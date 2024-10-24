<template>
  <div class="d-flex row w-100">
    <Formulario @aoSalvarTarefa="salvarTarefa" />
  </div>
  <div class="list-group gap-4 m-5">
    <div class="div-table">
      <div class="card-filter">
        <div><h1>Tarefas</h1></div>
        <!-- <font-awesome-icon :icon="['fas', 'filter']" class="filter-icon" /> -->
        <div class="div-right" >
          <span class="time-work" >  Total de horas: <strong>{{  formatTempoTrabalhado }}</strong> </span>
          <input
            type="text"
            v-model="filtro"
            placeholder="Filtrar..."
            class="form-control filter"
          />
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <td class="th">Tarefa</td>
            <td class="th">Projeto</td>
            <td class="th">Tempo</td>
            <td class="th">Ações</td>
          </tr>
        </thead>
      </table>
      <h1 class="h1-web">Tarefas</h1>
      <Tarefa v-for="(tarefa, index) in paginatedTarefas" :key="index" :tarefa="tarefa" />
    </div>
    <Box v-if="listaEstaVazia" class="box-nodata box">
      <strong> Você não está muito produtivo hoje</strong>
      <img src="../assets/no-data.gif" alt="" />
    </Box>
    <Pagination
      :currentPage="currentPage"
      :totalPages="totalPages"
      @update:currentPage="currentPage = $event"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import Formulario from "../components/Formulario.vue";
import Tarefa from "../components/Tarefa.vue";
import Box from "../components/Box.vue";
import Pagination from "../components/Pagination.vue";
import { useStore } from "@/store";
import ITarefa from "../interfaces/ITarefa";
import { ADICIONA_TAREFA, NOTIFICAR } from "@/store/tipo-mutacoes";
import { TipoNotificacao } from "@/interfaces/INotificacao";

export default defineComponent({
  name: "Tarefas",
  components: {
    Formulario,
    Tarefa,
    Box,
    Pagination,
  },
  setup() {
    const store = useStore();
    const filtro = ref("");
    const currentPage = ref(1);
    const itemsPerPage = 5;

    const tarefas = computed(() => store.state.tarefas);

    const filteredTarefas = computed(() =>
      tarefas.value.filter((tarefa) =>
        tarefa.descricao.toLowerCase().includes(filtro.value.toLowerCase())
      )
    );

    const totalPages = computed(() =>
      Math.ceil(filteredTarefas.value.length / itemsPerPage)
    );

    const paginatedTarefas = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return filteredTarefas.value.slice(start, end);
    });

    const listaEstaVazia = computed(() => paginatedTarefas.value.length === 0);

    const totalTempoTrabalhado = computed(() => {
      return filteredTarefas.value.reduce((total, tarefa) => total + (tarefa.duracaoEmSegundos || 0), 0);
    });

    const formatTempoTrabalhado = computed(() => {
      const totalSegundos = totalTempoTrabalhado.value;
      const horas = Math.floor(totalSegundos / 3600);
      const minutos = Math.floor((totalSegundos % 3600) / 60);
      const segundos = totalSegundos % 60;

      return `${horas}h ${minutos}m ${segundos}s`;
    });

    const salvarTarefa = (tarefa: ITarefa) => {
      store.commit(ADICIONA_TAREFA, tarefa);
      store.commit(NOTIFICAR, {
        titulo: "Tarefa salva!",
        texto: "Sua tarefa foi adicionada na lista!",
        tipo: TipoNotificacao.SUCESSO,
      });
    };

    return {
      filtro,
      paginatedTarefas,
      listaEstaVazia,
      salvarTarefa,
      currentPage,
      totalPages,
      formatTempoTrabalhado
    };
  },
});
</script>

<style scoped>
.box strong {
  color: rgb(99, 99, 99) !important;
}

.h1-web {
  display: none;
}

h1 {
  display: block;
  color: #598e98;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  text-align: center;
}

.box-nodata {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0;
}

img {
  width: 130px;
  height: auto;
}

table {
  width: 100%;
  margin: 1rem 0;
}

.th {
  width: 30% !important;
  padding: 18px 15px;
  text-align: center;
  white-space: nowrap;
  border-bottom: 3px solid #598e98;
}

.filter {
  width: 40%;
}

.div-right {
  display: flex;
  width: 50%;
  gap: 1rem;
  justify-content: end;
}

.div-right span {
  width: 230px;
}

.card-filter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
}

.filter-icon {
  color: #0e4e68;
  font-size: 22px;
  text-align: center;
}

.time-work {
  background-color: #2ac470;
  padding: 0.3rem 1rem;
  color: white;
  border-radius: 8px;
  width: 35%;
}

@media screen and (max-width: 1630px) {

  .time-work {
  width: 50%;
}

}

@media screen and (max-width: 768px) {
  thead {
    display: none;
  }

  .filter {
    width: 100%;
  }

  .filter {
  width: 50%;
}

.div-right {
  display: flex;
  width: 60%;
  gap: 1rem;
}

.div-right span {
  font-size: 14px;
  width: 250px;
}
}

@media screen and (max-width: 410px) {
.div-right {
  display: flex;
  flex-direction: column-reverse;
  width: 60%;
  gap: 1rem;
}

.card-filter {
  display: flex;
  flex-direction: column;
}

.filter {
  width: 100%;
}

.div-right span {
  font-size: 14px;
  width: 100%;
}
}
</style>

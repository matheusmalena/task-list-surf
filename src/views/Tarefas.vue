<template>
  <div class="d-flex row w-100" >
    <Formulario @aoSalvarTarefa="salvarTarefa" />
  </div>
  <div class="list-group gap-4 m-5">
    <div class="div-table" >
      <table>
        <thead>
          <tr>
            <td class="th">Tarefa</td>
            <td class="th">Projeto</td>
            <td class="th">Tempo</td>
            <td class="th"></td>
          </tr>
        </thead>
      </table>
      <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
    </div>
    <Box v-if="listaEstaVazia" class="box-nodata box">
      <strong> Você não está muito produtivo hoje</strong>
      <img src="../assets/no-data.gif" alt="" />
    </Box>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import Formulario from "../components/Formulario.vue";
import Tarefa from "../components/Tarefa.vue";
import Box from "../components/Box.vue";
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
  },
  setup() {
    const store = useStore();

    const tarefas = computed(() => store.state.tarefas);
    const listaEstaVazia = computed(() => tarefas.value.length === 0);

    const salvarTarefa = (tarefa: ITarefa) => {
      store.commit(ADICIONA_TAREFA, tarefa);
      store.commit(NOTIFICAR, {
          titulo: 'Tarefa salva!',
          texto: 'Sua tarefa foi adicionada na lista!',
          tipo: TipoNotificacao.SUCESSO
        })
    };

    return {
      tarefas,
      listaEstaVazia,
      salvarTarefa,
    };
  },
});
</script>

<style scoped>
.box strong {
  color: rgb(99, 99, 99) !important;
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

@media screen and (max-width: 768px) {
  thead {
    display: none;
  }
}
</style>

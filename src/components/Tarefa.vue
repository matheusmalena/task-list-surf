<template>
  <Box>
    <div class="d-flex justify-content-between box-celular">
      <div class="info-celular">
        <h3>Tarefa:</h3>
        <span class="title-task">Tarefa</span>
        <div class="d-flex">{{ tarefa.descricao || "Tarefa sem descrição" }}</div>
      </div>
      <div class="info-celular">
        <h3>Projeto:</h3>
        <span class="title-task">Projeto</span>
        <div>
          {{ tarefa.projeto?.nome || "N/D" }}
        </div>
      </div>
      <div class="info-celular">
        <h3>Tempo:</h3>
        <span class="title-task">Tempo</span>
        <div class="col-2">
          <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos" />
        </div>
      </div>
      <button class="btn-delete" @click="excluirTarefa">
        <span class="material-symbols-outlined icon-delete"> delete </span>
      </button>
    </div>
  </Box>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Cronometro from "./Cronometro.vue";
import ITarefa from "../interfaces/ITarefa";
import Box from "./Box.vue";
import { useStore } from '@/store/index';
import { EXCLUIR_TAREFA } from '@/store/tipo-mutacoes';

export default defineComponent({
  name: "Tarefa",
  components: {
    Cronometro,
    Box,
  },
  props: {
    tarefa: {
      type: Object as PropType<ITarefa>,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();

    const excluirTarefa = () => {
      if (props.tarefa) {
        store.commit(EXCLUIR_TAREFA, props.tarefa.descricao);
      }
    };

    return {
      excluirTarefa,
    };
  },
});
</script>

<style>
.info-celular h3 {
  display: none;
}

.title-task {
  color: #037a7a !important;
  font-weight: 600;
  text-transform: uppercase;
}

.btn-delete span {
  transition: transform 0.3s ease-in-out;
  display: inline-block;
}

.btn-delete span:hover {
  transform: translateY(-5px);
}

@media screen and (max-width: 760px) {
  .box-celular {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .info-celular {
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
  }
}
</style>

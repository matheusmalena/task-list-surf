<template>
  <Box>
    <div class="d-flex justify-content-between box-celular">
      <div class="info-celular">
        <h3>Tarefa:</h3>
        <span class="title-task" >Tarefa  </span>
        <div class="d-flex">{{ tarefa.descricao || "Tarefa sem descrição" }}</div>
      </div>
      <div class="info-celular">
        <h3>Projeto:</h3>
        <span class="title-task" >Projeto</span>
        <div>
          {{ tarefa.projeto?.nome || "N/D" }}
        </div>
      </div>
      <div class="info-celular">
        <h3>Tempo:</h3>
        <span class="title-task" >Tempo</span>
        <div class="col-2">
          <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos" />
        </div>
      </div>
    </div>
  </Box>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Cronometro from "./Cronometro.vue";
import ITarefa from "../interfaces/ITarefa";
import Box from "./Box.vue";

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
});
</script>

<style>
.info-celular h3{
  display: none;
}

.title-task {
  color: #037a7a !important;
  font-weight: 600;
  text-transform: uppercase;
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

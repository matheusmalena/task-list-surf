<template>
  <Box>
    <div class="row">
      <div class="col-7 fw-bolder">{{ tarefa.descricao || 'Tarefa sem descrição' }}</div>
      <div class="col-2">
        <Cronometro  :tempoEmSegundos="tarefa.duracaoEmSegundos"/>
      </div>
    </div>
  </Box>

</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Cronometro from "./Cronometro.vue";
import ITarefa from '../interfaces/ITarefa';
import Box from './Box.vue';

export default defineComponent({
  name: "Tarefa",
  components: {
    Cronometro,
    Box
  },
  props: {
    tarefa: {
      type: Object as PropType<ITarefa>,
      required: true
    }
  }
});
</script>


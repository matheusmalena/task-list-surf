<template>
  <Formulario @aoSalvarTarefa="salvarTarefa" />
  <div class="list-group gap-4 m-5">
    <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
    <Box v-if="listaEstaVazia" class="box">
      Você não está muito produtivo hoje :(
    </Box>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from '@/store/index';
import Formulario from '../components/Formulario.vue';
import Tarefa from '../components/Tarefa.vue';
import Box from '../components/Box.vue';
import ITarefa from '../interfaces/ITarefa';
import { ADICIONA_TAREFA } from '@/store/tipo-mutacoes';

export default defineComponent({
  name: 'Tarefas',
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
.box {
  color: black;
}
</style>

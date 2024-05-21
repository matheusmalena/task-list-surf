<template>
  <main class="d-flex">
    <div class="bg-fundo">
      <Sidebar />
    </div>
    <div class="flex-grow-1 w-75 justify-content-center align-items-center sombra">
      <router-view></router-view>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Sidebar from './components/Sidebar.vue';

export default defineComponent({
  name: 'App',
  components: {
    Sidebar,
  },
});
</script>

<style>
.lista {
  padding: 1.25rem;
}
main {
  --bg-primario: #fff;
  --texto-primario: #000;
}
main.modo-escuro {
  --bg-primario: #2b2d42;
  --texto-primario: #ddd;
}
.conteudo {
  background-color: var(--bg-primario);
}
</style>

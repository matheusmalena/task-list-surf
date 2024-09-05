<template>
  <main class="d-flex app-celular">
    <div class="bg-fundo">
      <div class="notificacao-tela-celular">
        <Notificacoes></Notificacoes>
      </div>
      <Sidebar />
    </div>
    <div class="flex-grow-1 justify-content-center align-items-center sombra">
      <div class="notificacao-tela-grande">
        <Notificacoes></Notificacoes>
      </div>
      <router-view></router-view>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Notificacoes from './components/Notificacoes.vue';
import Sidebar from './components/Sidebar.vue';

export default defineComponent({
  name: 'App',
  components: {
    Sidebar,
    Notificacoes,
  },
});
</script>

<style>
:root{
  --brown: #d4bfa3;
  --brown-hover: #bba88f;
  --blue-hover: linear-gradient(0deg, rgba(32, 75, 90, 1) 0%, rgba(119, 177, 185, 1) 100%);
}

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

body, strong {
  color: black !important;
}

.lista {
  padding: 1.25rem;
}
main {
  --bg-primario: #fff;
  --texto-primario: #000;
  display: flex;
  height: 100vh;
  overflow: hidden;
}
main.modo-escuro {
  --bg-primario: #2b2d42;
  --texto-primario: #ddd;
}
.conteudo {
  background-color: var(--bg-primario);
}

.sombra{
    width: 75% !important;
    overflow-y: auto;
  }

.bg-fundo{
    width: 18%;
    height: 100vh;
    overflow-y: auto;
  }

  .notificacao-tela-grande{
    display: block;
  }

  .notificacao-tela-celular{
    display: none;
  }

@media screen and (max-width: 760px){
  main{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .bg-fundo{
    width: 100% !important;
    height: auto;
  }

  .sombra{
    width: 100% !important;
  }

  .notificacao-tela-grande{
    display: none;
  }

  .notificacao-tela-celular{
    display: block;
  }
  
}
</style>

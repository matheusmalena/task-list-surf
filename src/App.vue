<template>
  <main class="d-flex app-celular">
    <Spinner v-if="isLoading" />
    <div class="bg-fundo" v-else>
      <div class="notificacao-tela-celular">
        <Notificacoes></Notificacoes>
      </div>
      <Sidebar />
    </div>
    <div class="flex-grow-1 justify-content-center align-items-center sombra">
      <div class="notificacao-tela-grande">
        <Notificacoes></Notificacoes>
      </div>
      <router-view @loaded="setLoading(false)"></router-view>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Notificacoes from './components/Notificacoes.vue';
import Sidebar from './components/Sidebar.vue';
import Spinner from './components/Spinner.vue';

export default defineComponent({
  name: 'App',
  components: {
    Sidebar,
    Notificacoes,
    Spinner,
  },
  setup() {
    const isLoading = ref(true);

    const setLoading = (status: boolean) => {
      isLoading.value = status;
    };

    setTimeout(() => {
      setLoading(false);
    }, 3000);

    return {
      isLoading,
      setLoading
    };
  }
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
  height: 100%;
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
    height: 100%;
    overflow-y: auto;
  }

  .notificacao-tela-grande{
    display: block;
  }

  .notificacao-tela-celular{
    display: none;
  }

  @media screen and (max-width: 760px){
  main {
    display: flex;
    flex-direction: column;
    justify-content: flex-start; /* Ajuste para alinhar corretamente */
    height: 100vh; /* Força a altura da tela inteira */
    overflow: hidden;
  }

  .bg-fundo {
    width: 100% !important;
    height: auto;
    flex-grow: 1; /* Ocupa o espaço restante */
  }

  .sombra {
    width: 100% !important;
    flex-grow: 1; /* Faz o conteúdo crescer para preencher a tela */
    overflow-y: auto;
  }

  .notificacao-tela-grande {
    display: none;
  }

  .notificacao-tela-celular {
    display: block;
  }
}
</style>

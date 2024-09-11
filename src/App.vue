<template>
  <main class="app-container">
    <Spinner v-if="isLoading" />
    <div v-if="!isAuthenticated" class="full-screen">
      <router-view></router-view>
    </div>
    <div v-else class="content-container">
      <div class="sidebar-container">
        <Sidebar />
      </div>
      <div class="main-content">
        <div class="notificacao-tela-celular">
          <Notificacoes></Notificacoes>
        </div>
        <div class="notificacao-tela-grande">
          <Notificacoes></Notificacoes>
        </div>
        <router-view @loaded="setLoading(false)"></router-view>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import Notificacoes from './components/Notificacoes.vue';
import Sidebar from './components/Sidebar.vue';
import Spinner from './components/Spinner.vue';
import { useStore } from './store';

export default defineComponent({
  name: 'App',
  components: {
    Sidebar,
    Notificacoes,
    Spinner,
  },
  setup() {
    const store = useStore();
    const isLoading = ref(true);

    const setLoading = (status: boolean) => {
      isLoading.value = status;
    };

    setTimeout(() => {
      setLoading(false);
    }, 3000);

    const isAuthenticated = computed(() => store.getters['auth/isAuthenticated']);

    return {
      isLoading,
      setLoading,
      isAuthenticated,
    };
  }
});
</script>

<style>
:root {
  --brown: #d4bfa3;
  --brown-hover: #bba88f;
  --blue-hover: linear-gradient(0deg, rgba(32, 75, 90, 1) 0%, rgba(119, 177, 185, 1) 100%);
}

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: white !important;
}

body, strong {
  color: black !important;
}

main {
  --bg-primario: #fff;
  --texto-primario: #000;
  display: flex;
  height: 100%;
  overflow: hidden;
}

.full-screen {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content-container {
  display: flex;
  height: 100%;
  width: 100%;
}

.sidebar-container {
  width: 18%;
  height: 100%;
  border: 2px solid red; /* Adiciona uma borda temporária para depuração */
  overflow-y: auto;
}

.main-content {
  width: 82%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.notificacao-tela-grande {
  display: block;
}

.notificacao-tela-celular {
  display: none;
}

@media screen and (max-width: 760px) {
  main {
    flex-direction: column;
  }

  .sidebar-container {
    width: 100%;
    height: auto;
  }

  .main-content {
    width: 100%;
  }

  .notificacao-tela-grande {
    display: none;
  }

  .notificacao-tela-celular {
    display: block;
  }
}
</style>

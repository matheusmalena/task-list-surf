<template>
  <header class="">
    <div
      class="d-flex flex-column align-items-center justify-content-center gap-3 fundo-bg"
    >
      <div class="d-flex justify-content-center">
        <video
          style="border-radius: 20px"
          src="../assets/video-logo.mp4"
          autoplay
          loop
          muted
          @canplay="onVideoCanPlay"
        ></video>
      </div>
      <nav>
        <ul>
          <li>
            <router-link to="/" class="routers" exact-active-class="active-link">
              <span class="material-symbols-outlined">tv_options_edit_channels</span>
              Tarefas
            </router-link>
          </li>
          <li>
            <router-link to="/projetos" class="routers" exact-active-class="active-link">
              <span class="material-symbols-outlined">tactic</span>
              Projetos
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Sidebar",
  methods: {
    onVideoCanPlay() {
      this.$emit('loaded');
    }
  }
});
</script>

<style scoped>
header {
  padding: 1rem;
  background: linear-gradient(0deg, rgba(32, 75, 90, 1) 0%, rgba(119, 177, 185, 1) 100%);
  width: 100%;
  height: 100%;
}

video {
  width: 90%;
  height: auto;
}

button {
  width: 50%;
  background-color: #d4bfa3;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #d4bfa3;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
}

li {
  list-style-type: none;
  margin-bottom: 10px;
}

.routers {
  width: 100%;
  padding: 0.5rem;
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #d4bfa3;
  border: 1px solid #d4bfa3;
  border-radius: 6px;
  font-size: 16px;
}

.routers:hover {
  background-color: var(--brown-hover);
  border: 1px solid var(--brown-hover);
}

.active-link {
  background: var(--brown-hover);
  border: 1px solid var(--brown-hover);
}

.material-symbols-outlined {
  color: black;
  font-size: 22px;
}

@media only screen and (max-width: 768px) {
  header {
    width: 100%;
    padding: 2.5rem;
    height: auto;
  }
  .fundo-bg {
    width: 100%;
  }

  img {
    width: 45%;
    height: auto;
  }

  ul {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
  video {
  width: 60%;
  height: auto;
}
}
</style>

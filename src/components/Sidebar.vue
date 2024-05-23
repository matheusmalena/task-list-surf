<template>
  <header class="sombra ">
    <div class="d-flex flex-column align-items-center gap-3 ">
      <div>
        <img
          src="../assets\surf-logo.png"
          alt=""
          style="border-radius: 20px"
        />
      </div>
      <nav>
    <ul>
      <li>
        <router-link to="/" class="routers">
          <span class="material-symbols-outlined">tv_options_edit_channels</span>
          Tarefas
        </router-link>
      </li>
      <li>
        <router-link to="/projetos" class="routers">
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
});
</script>

<style scoped>

header {
  padding: 1rem;
  background: linear-gradient(0deg, rgba(32, 75, 90, 1) 0%, rgba(119, 177, 185, 1) 100%);
  height: 100vh;
}

img {
  width: 18rem;
  height: 16rem;
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

li{
  list-style-type: none;
  margin-bottom: 10px;
}

.routers{
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

.material-symbols-outlined{
  color: black;
  font-size: 22px;
}

@media only screen and (max-width: 768px) {
  header {
    width: 100%;
    padding: 2.5rem;
    height: 100%;
  }
}
</style>

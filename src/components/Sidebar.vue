<template>
  <header class="sombra">
    <div class="d-flex flex-column align-items-center gap-3">
      <div>
        <img
          src="https://i.postimg.cc/ZRHWQQRx/surf-logo.png"
          alt=""
          style="border-radius: 20px"
        />
      </div>
    <button>Mudar tema</button>
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
  background-color: red;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #d4bfa3;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>

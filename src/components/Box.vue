<template>
  <div class="box has-text-weight-bold" :style="estilos">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Box",
  data() {
    return {
      estilos: {
        backgroundColor: "#FAF0CA",
      },
    };
  },
});
</script>

<style scoped>
.box {
  margin: 0rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 1.5rem;
  background-color: #faf0ca;
}
</style>

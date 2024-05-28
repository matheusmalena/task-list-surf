<template>
  <div class="projetos">
    <h1>Projetos</h1>
  </div>
  <router-view></router-view>
</template>

<script lang="ts" >
import { defineComponent } from 'vue';

export default defineComponent ({
  name: 'Projetos',
})

</script>

<style scoped>
  .projetos{
    text-align: center;
  }

  h1{
    color: #598e98;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
  }
</style>
<template>
  <div class="d-flex align-items-center justify-content-between ml-2 cronometro-celular gap-3">
    <Cronometro :tempoEmSegundos="tempoEmSegundos" />
    <div class="ajuste-cronometro">
    <button class="custom-button-start" @click="iniciar" :disabled="cronometroRodando">
      <div class="icon-container-start">
        <font-awesome-icon :icon="['fas', 'play']" />
    </div>
    <div class="text-container">
      Play
  </div>
    </button>
    <button class="custom-button" @click="finalizar" :disabled="!cronometroRodando">
  <div class="icon-container">
    <font-awesome-icon class="font" :icon="['fas', 'check']" />
  </div>
  <div class="text-container">
    Concluir
  </div>
</button>
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Cronometro from "./Cronometro.vue";

export default defineComponent({
  name: "Temporizador",
  emits: ["aoTemporizadorFinalizado"],
  components: {
    Cronometro,
  },
  data() {
    return {
      tempoEmSegundos: 0,
      cronometro: 0,
      cronometroRodando: false,
    };
  },
  methods: {
    iniciar() {
      // começar a contagem
      // 1 seg = 1000 ms
      this.cronometroRodando = true;
      this.cronometro = setInterval(() => {
        this.tempoEmSegundos += 1;
      }, 1000);
    },
    finalizar() {
      this.cronometroRodando = false;
      clearInterval(this.cronometro);
      this.$emit("aoTemporizadorFinalizado", this.tempoEmSegundos);
      this.tempoEmSegundos = 0;
    },
  },
});
</script>

<style scoped>
.icon {
  width: 25px;
  height: 25px;
}

.btn-concluir {
  background-color: #2ac470;
  font-weight: 600;
  color: white;
  border: none !important;
  display: flex;
  gap: 1rem;
}

.btn-concluir:hover {
  background-color: #24b666 !important;
}

.btn-concluir .font {
  background: #2ac470;
  border-right: 1px solid black;
}

.icon-play {
  width: 1.5rem;
  height: auto;
  margin-right: 5px;
}

.btn-border {
  border: 1px solid black;
  width: 80px;
  height: 40px;
  border-radius: 4px;
}

.btn-border:hover{
  background-color: rgb(211, 211, 211);
}

img {
  padding: 3px;
  margin-right: 2px;
}

.ml-2 {
  margin-left: 1.5rem;
}

span{
  cursor: pointer;
}

.custom-button {
  display: flex;
  align-items: center;
  font-size: 16px;
  background-color: #24b666;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s ease;
  width: 70%;
}

.custom-button:hover {
  background-color: #239b56;
}

.icon-container {
  background-color: #239b56;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px 0 0 5px;
  width: 100%;
  height: 100%;
}

.text-container {
  padding: 10px 20px;
}

.font {
  font-size: 18px;
}

.custom-button-start {
  display: flex;
  align-items: center;
  font-size: 16px;
  background-color: #3296d4;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s ease;
  width: 70%;
}

.icon-container-start {
  background-color: #2c87c0;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px 0 0 5px;
  width: 100%;
  height: 100%;
}

.custom-button-start:hover {
  background-color: #2c87c0;
}

.ajuste-cronometro{
    display: flex;
    gap: 1rem;
  }

@media screen and (max-width: 760px){
  .cronometro-celular{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    margin: 0;
  }

  .custom-button-start, .custom-button {
    width: 100% !important;
  }

  .ajuste-cronometro{
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  button {
    width: 100px !important;
  }
}

@media screen and (max-width: 450px){
  .btn-border {
  border: 1px solid black;
  width: 4rem;
  height: 2rem;
  border-radius: 4px;
  font-size: 14px;
}

span{
  display: flex;
  justify-content: center;
  align-items: center;
}

  .icons{
    width: 1.2rem;
    height: auto;
  }
}
</style>

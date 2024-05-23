<template>
  <div class="d-flex align-items-center justify-content-between ml-2 cronometro-celular">
    <Cronometro :tempoEmSegundos="tempoEmSegundos" />
    <div class="ajuste-cronometro">
    <button class="btn-border" @click="iniciar" :disabled="cronometroRodando">
      <span
        ><img src="../assets/icons/play2.png" class="icon-play" alt="" />Play</span
      >
    </button>
    <button class="btn-border" @click="finalizar" :disabled="!cronometroRodando">
      <span><img src="../assets/icons/stop-button.png" class="icon" alt="" />Stop</span>
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

  .ajuste-cronometro{
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
}
</style>

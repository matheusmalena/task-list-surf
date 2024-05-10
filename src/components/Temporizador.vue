<template>
  <div class="d-flex align-items-center justify-content-between ml-5">
    <Cronometro :tempoEmSegundos="tempoEmSegundos" />
    <button class="btn-border" @click="iniciar" :disabled="cronometroRodando">
      <span
        ><img src="https://i.postimg.cc/ZnKz1m04/play-azul.png" class="icon-play" alt="" />Play</span
      >
    </button>
    <button class="btn-border" @click="finalizar" :disabled="!cronometroRodando">
      <span><img src="../assets/icons/stop2.png" class="icon" alt="" />Stop</span>
    </button>
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

.ml-5 {
  margin-left: 5rem;
}
</style>

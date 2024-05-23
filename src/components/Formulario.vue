<template>
    <div class="d-flex row bg-light sombra w-100">
      <div class=" d-flex p-4 align-items-center cronometro-celular">
        <div
          class="w-50 d-flex form"
          role="form"
          aria-label="Formulário para criação de uma nova tarefa"
        >
          <input
            type="text"
            placeholder="Qual tarefa você quer iniciar?"
            class="form-control p-16 border-2"
            v-model="descricao"
          />
          <button class="btnLimparFiltro" @click="limparFiltro"> <span class="material-symbols-outlined">
          filter_list_off</span> </button>
        </div>
        
        <div class="d-flex row align-items temporizador">
          <Temporizador @aoTemporizadorFinalizado="finalizarTarefa"/>
        </div>
      </div>
    </div>
  
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Temporizador from './Temporizador.vue'

export default defineComponent({
  name: "Formulário",
  emits: ['aoSalvarTarefa'],
  components: {
    Temporizador
  },
  data () {
    return {
      descricao: ''
    }
  },
  methods: {
    finalizarTarefa (tempoDecorrido: number) : void {
      this.$emit('aoSalvarTarefa', {
        duracaoEmSegundos: tempoDecorrido,
        descricao: this.descricao
      })
      this.descricao = ''
    },
    limparFiltro(){
      this.descricao = ""
      console.log('Filtro limpo!')
    },
  }
});
</script>

<style>
.row {
    margin-left: 0 !important;
}

.formulario {
  color: var(--texto-primario);
  background-color: var(--bg-primario);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100vh;
  height: 100vh;
}

.p-1 {
  padding: 0.5rem;
}

.p-5 {
  padding: 4rem;
}

.sombra{
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.btnLimparFiltro{
  background: none;
  border: none;
  color: #9ca7b0 !important;
}

.btnLimparFiltro img{
  width: 32px;
  height: auto;
  color: #9ca7b0;
}

@media screen and (max-width: 760px){
  .cronometro-celular{
    justify-content: space-around;
  }

  .form-control{
    width: 100%;
  }

  .temporizador{
    display: flex;
    gap: 1rem;
  }
}
</style>

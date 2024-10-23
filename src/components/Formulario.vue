<template>
    <div class="d-flex w-100 sombra p-4 align-items-center cronometro-celular">
      <div
        class="w-50 div-input d-flex form gap-2"
        role="form"
        aria-label="Formulário para criação de uma nova tarefa"
      >
        <input
          type="text"
          placeholder="Digite sua tarefa..."
          class="form-control p-16 border-2"
          v-model="descricao"
        />
        <button class="btnLimparFiltro" @click="limparFiltro">
          <span class="material-symbols-outlined"> filter_list_off</span>
        </button>
      </div>
      <div>
        <div class="select-wrapper">
        <select class="selecionar-projeto" v-model="idProjeto">
          <option value="">Selecione o projeto</option>
          <option :value="projeto.id" v-for="projeto in projetos" :key="projeto.id">
            {{ projeto.nome }}
          </option>
        </select>
      </div>
      </div>

      <div class="d-flex row align-items temporizador">
        <Temporizador @aoTemporizadorFinalizado="finalizarTarefa" />
      </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import Temporizador from "./Temporizador.vue";
import { useStore } from "@/store";
import { TipoNotificacao } from "@/interfaces/INotificacao";
import { NOTIFICAR } from "@/store/tipo-mutacoes";

export default defineComponent({
  name: "Formulario",
  emits: ["aoSalvarTarefa"],
  components: {
    Temporizador,
  },
  data() {
    return {
      descricao: "",
      idProjeto: "",
    };
  },
  methods: {
    finalizarTarefa(tempoDecorrido: number): void {
      const projeto = this.projetos.find((p) => p.id == this.idProjeto);
      if (!projeto) {
        this.store.commit(NOTIFICAR, {
          titulo: "Ops!",
          texto: "Selecione um projeto antes de finalizar a tarefa!",
          tipo: TipoNotificacao.FALHA,
        });
        return;
      }
      this.$emit("aoSalvarTarefa", {
        duracaoEmSegundos: tempoDecorrido,
        descricao: this.descricao,
        projeto,
      });
      this.descricao = "";
    },
    limparFiltro() {
      this.descricao = "";
      console.log("Filtro limpo!");
    },
  },
  setup() {
    const store = useStore();
    return {
      store,
      projetos: computed(() => store.state.projetos),
    };
  },
});
</script>


<style>
.row {
  margin-left: 0 !important;
}

.form {
  width: 100%;
}

.form-control {
  width: 100%;
}

.formulario {
  color: var(--texto-primario) !important;
  background-color: var(--bg-primario);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
}

.cronometro-celular {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100% !important;
}

.p-1 {
  padding: 0.5rem;
}

.p-5 {
  padding: 4rem;
}

.sombra {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.select-wrapper {
  position: relative;
  width: 100%;
}

.selecionar-projeto {
  -webkit-appearance: none; /* Remove a aparência padrão */
  -moz-appearance: none; /* Remove a aparência padrão */
  appearance: none; /* Remove a aparência padrão */
  background-color: white;
  color: black;
  padding: 10px;
  padding-right: 40px; /* Espaço para a seta */
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  font-size: 16px;
  cursor: pointer;
}

/* Adiciona a seta para baixo usando ::after */
.select-wrapper::after {
  content: '\25BC'; /* Seta para baixo em Unicode */
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
  color: #000000; /* Cor da seta */
  pointer-events: none;
}

.selecionar-projeto:focus {
  border-color: #666;
  outline: none;
}

.btnLimparFiltro {
  background: none;
  color: #9ca7b0 !important;
  width: 35px;
  height:35px;
  border-radius: 50%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btnLimparFiltro img {
  width: 32px;
  height: auto;
  color: #9ca7b0;
}

.btnLimparFiltro:hover {
  width:35px;
  height:35px;
  background-color: rgba(234, 233, 233, 0.853);
  border-radius: 50%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.selecionar-projeto {
  background-color: white !important;
  color: black !important;
  width: 100% !important;
}

@media screen and (max-width: 760px) {
  .cronometro-celular {
    justify-content: space-around;
    flex-direction: column;
    gap: 12px;
    width: 100%;
  }

  .form-control {
    width: 100%;
  }

  .temporizador {
    display: flex;
    gap: 1rem;
  }

  .div-input {
    width: 100% !important;
    display: flex;
    justify-content: center !important;
    align-items: center !important;
  }
}
</style>

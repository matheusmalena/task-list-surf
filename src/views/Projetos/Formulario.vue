<template>
  <section class="d-flex justify-content-center flex-column align-items-center">
    <form
      @submit.prevent="salvar"
      class="d-flex flex-column justify-content-center align-items-center gap-3 w-100"
    >
      <div
        class="d-flex flex-column justify-content-center align-items-center gap-2 w-100"
      >
        <label for="nomeDoProjeto"> Nome do Projeto</label>
        <input type="text" v-model="nomeDoProjeto" id="nomeDoProjeto" />
      </div>
      <div>
        <button class="button-save" type="submit">Salvar</button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import { ADICIONA_PROJETO, ALTERA_PROJETO, NOTIFICAR } from "@/store/tipo-mutacoes";
import { TipoNotificacao } from "@/interfaces/INotificacao";

export default defineComponent({
  name: "Formulario",
  props: {
    id: {
      type: String,
    },
  },
  mounted() {
    if (this.id) {
      const projeto = this.store.state.projetos.find((proj) => proj.id == this.id);
      this.nomeDoProjeto = projeto?.nome || "";
    }
  },
  data() {
    return {
      nomeDoProjeto: "",
    };
  },
  methods: {
    salvar() {
      if (this.id) {
        this.store.commit(ALTERA_PROJETO, {
          id: this.id,
          nome: this.nomeDoProjeto,
        });
      } else {
        this.store.commit(ADICIONA_PROJETO, this.nomeDoProjeto);
      }
      this.nomeDoProjeto = "";
      this.store.commit(NOTIFICAR, {
        titulo: "Novo projeto foi salvo!",
        texto: "Seu projeto já está disponivel",
        tipo: TipoNotificacao.SUCESSO,
      });
      this.$router.push("/projetos");
    },
  },
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
});
</script>

<style scoped>
.table {
  padding: 1.5rem;
  border-radius: 10px;
  width: 80%;
  margin: 2rem;
}

thead tr {
  border-bottom: 1px solid #598e98;
}

tbody {
  width: 100%;
}

thead {
  width: 100%;
}

tbody tr td {
  border: none;
}

tbody tr {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid black; /* Adiciona borda completa ao <tr> */
  margin-bottom: 1rem; /* Espaçamento entre as linhas */
  width: 100%;
  padding: 1rem;
  border-radius: 6px;
  margin-top: 1rem;
}

label {
  font-size: 1.15rem;
  color: #598e98;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
}

input {
  width: 40%;
  padding: 0.5rem;
  border-radius: 6px;
}

.button-save {
  background-color: #598e98;
  padding: 0.5rem;
  color: white;
  border-radius: 6px;
  border: 1px solid black;
}

form {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
}

@media screen and (max-width: 760px) {
  input {
    width: 60%;
    padding: 0.4rem;
  }
}
</style>
import { ALTERA_PROJETO, ADICIONA_PROJETO } from "@/store/tipo-mutacoes";

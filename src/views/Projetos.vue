<template>
  <section class="d-flex justify-content-center flex-column align-items-center">
    <h1>Projetos</h1>
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
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="projeto in projetos" :key="projeto.id">
          <td>{{ projeto.id }}</td>
          <td>{{ projeto.nome }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";

export default defineComponent({
  name: "Projetos",
  data() {
    return {
      nomeDoProjeto: "",
    };
  },
  methods: {
    salvar() {
      this.store.commit('ADICIONA_PROJETO', this.nomeDoProjeto)
      this.nomeDoProjeto = "";
    },
  },
  setup(){
    const store = useStore()
    return {
        store,
        projetos: computed(() => store.state.projetos)
    }
  }
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

thead{
    width: 100%;
}

tbody tr td{
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

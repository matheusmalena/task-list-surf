<template>
  <section class="d-flex justify-content-center flex-column align-items-center">
    <router-link to="/projetos/novo" class="button">
      <span class="material-symbols-outlined icon-more">add_circle</span>
      <span>Novo projeto</span>
    </router-link>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="projeto in projetos" :key="projeto.id">
          <td>{{ projeto.id }}</td>
          <td>{{ projeto.nome }}</td>
          <td>
            <router-link :to="`/projetos/${projeto.id}`">
              <span class="material-symbols-outlined icon-edit">edit</span>
            </router-link>
            <button class="btn-delete" @click="excluir(projeto.id)">
              <span class="material-symbols-outlined"> delete </span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";
import { EXCLUIR_PROJETO, NOTIFICAR } from "@/store/tipo-mutacoes";
import { TipoNotificacao } from "@/interfaces/INotificacao";

export default defineComponent({
  name: "Lista",
  methods: {
    excluir(id: string){
        this.store.commit(EXCLUIR_PROJETO, id)
        console.log("Tarefa deletada!")
        this.store.commit(NOTIFICAR, {
          titulo: 'Projeto excluido!',
          texto: 'Seu projeto foi removido com sucesso!',
          tipo: TipoNotificacao.SUCESSO
        })
    }
  },
  setup() {
    const store = useStore();
    return {
      projetos: computed(() => store.state.projetos),
      store
    };
  },
});
</script>

<style scoped>
.table {
  width: 80%;
  margin: 2rem auto;
  border-collapse: collapse; /* Alterado para collapse */
  background-color: transparent;
  color: black !important;
}

thead,
tbody tr {
  display: table; /* Faz com que se comportem como uma linha de tabela */
  width: 100%; /* Garante que ocupem o mesmo espaço */
  table-layout: fixed; /* Ajuda a manter colunas de largura igual */
}

thead tr,
tbody tr {
  border-bottom: 1px solid #598e98 !important; /* Aplica borda de forma consistente */
}

thead {
  margin-bottom: 0.5rem; /* Adiciona espaçamento entre thead e tbody */
  color: black !important;
}

.table thead th {
  color: black;
}

thead tr {
  border-bottom: 1px solid #598e98 !important;
  color: black !important;
}

tbody {
  display: flex; /* Permite definir um espaçamento entre thead e tbody */
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
}

tbody tr {
  border-radius: 6px; /* Mantém o estilo de borda arredondada */
  margin-top: 1rem; /* Espaçamento entre linhas */
  background-color: #fff; /* Fundo branco para as linhas */
  border: none;
  margin-top: 1rem;
  border: 1px solid #a4a4a4;
  border-radius: 6px;
}

tbody tr td {
  padding: 1rem; /* Espaço interno para as células */
  color: black;
}

/* tbody tr {
    display: flex;
    width: 100%;
    padding: 1rem; 
    box-sizing: border-box;
    border: 1px solid black;
    border-radius: 6px;
    margin-top: 1rem;
  } */

tbody tr td {
  border: none;
  flex: 1;
  width: 32%;
  color: black;
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

.button {
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: #d4bfa3;
  padding: 0.5rem;
  color: black;
  text-decoration: none;
  border-radius: 6px;
}

.icon-edit {
  color: black;
}

.btn-delete{
    background-color: transparent;
    border: none;
    text-decoration: none;
}

.btn-delete span{
    background: transparent;
    color: red;
}

@media screen and (max-width: 760px) {
  input {
    width: 60%;
    padding: 0.4rem;
  }
}
</style>

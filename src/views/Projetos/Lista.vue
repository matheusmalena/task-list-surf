<template>
  <section class="d-flex justify-content-center flex-column align-items-center">
    <router-link to="/projetos/novo" class="button">
      <span class="material-symbols-outlined icon-more">add_circle</span>
      <span class="btn-bronw" >Novo projeto</span>
    </router-link>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Ações</th>
          <th>
            <button @click="deletarTodosProjetos" class="btn-limpar-todas" > <p> Excluir tudo </p> <span class="material-symbols-outlined"> delete </span></button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="projeto in projetos" :key="projeto.id">
          <td data-label="ID" >{{ projeto.id }}</td>
          <td data-label="Nome" >{{ projeto.nome }}</td>
          <td data-label="Ações" >
            <router-link :to="`/projetos/${projeto.id}`">
              <span class="material-symbols-outlined icon-edit">edit</span>
            </router-link>
            <button class="btn-delete" @click="excluir(projeto.id)">
              <span class="material-symbols-outlined icon-delete"> delete </span>
            </button>
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";
import { EXCLUIR_PROJETO, NOTIFICAR, EXCLUIR_TODOS_PROJETOS } from "@/store/tipo-mutacoes";
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
    },
    deletarTodosProjetos() {
      this.store.commit(EXCLUIR_TODOS_PROJETOS)
      console.log("Projetos excluidos!")
      this.store.commit(NOTIFICAR, {
          titulo: 'Projetos excluidos!',
          texto: 'Todos os seus projetos foram removidos com sucesso!',
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
  border-collapse: collapse;
  background-color: transparent;
  color: black !important;
}

thead tr,
tbody tr {
  border-bottom: 1px solid #598e98 !important;
}

thead tr th {
  width: 30%;
  border: none !important;
  display: flex;
  align-items: center;
  flex-direction: row;
}

thead {
  margin-bottom: 0.5rem;
  color: black !important;
}

.table thead th {
  color: black;
  max-width: 30% !important;
  display: flex;
  justify-content: center;
  align-items: center;
}

thead tr {
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 3px solid #598e98 !important;
  color: black !important;
}

tbody tr {
  display: flex;
  align-items: center;
  text-align: center;
  border-radius: 6px;
  margin-top: 1rem;
  background-color: #fff;
  border: none;
  margin-top: 1rem;
  border: 1px solid #a4a4a4;
  border-radius: 6px;
}

tbody tr td {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border: none;
  text-align: center;
  word-wrap: break-word;
  width: 30%;
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

.btn-limpar-todas {
  display: flex;
  align-items: center;
  background-color: red;
  border-radius: 10px;
  color: white !important;
  padding: 0.5rem;
}

.btn-limpar-todas:hover {
  display: flex;
  align-items: center;
  background-color: rgb(204, 37, 37);
  border-radius: 10px;
  color: white !important;
  padding: 0.5rem;
}

.btn-limpar-todas span {
  font-size: 22px;
}

.icon-edit, .btn-delete span {
  transition: transform 0.3s ease-in-out;
}

.icon-edit:hover, .btn-delete span:hover {
  transform: translateY(-5px);
}

.button:hover {
  background-color: var(--brown-hover);
}

@media screen and (max-width: 760px) {
  thead {
    display: none;
  }

  tbody {
    display: block;
    width: 100%;
  }

  tbody tr {
    display: block;
    margin-bottom: 0.625rem;
    border-bottom: 2px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    width: 100%;
  }

  tbody tr td {
    display: block;
    text-align: right;
    position: relative;
    padding: 0.75rem;
    font-size: 12px;
    width: 40% !important;
  }

  tbody td::before {
    content: attr(data-label);
    font-weight: bold;
    text-transform: uppercase;
    color: #037a7a;
    position: absolute;
    left: 0;
    width: 50%;
    padding-right: 1rem;
    white-space: nowrap;
    text-align: left;
  }

  tbody td[data-label="ID"]::before {
    content: "ID";
  }
  tbody td[data-label="Nome"]::before {
    content: "Nome";
  }
  tbody td[data-label="Ações"]::before {
    content: "Ações";
  }
  tbody td[data-label=""]::before {
    content: " ";
  }

  tbody td {
    text-align: right;
    padding-left: 50%;
  }

  .btn-limpar-todas {
    font-size: 12px;
    width: 40px;
  }

  .btn-limpar-todas p {
    display: none;
  }

  tbody tr td {
    display: block !important;
    width: 100% !important;
  }
}
</style>
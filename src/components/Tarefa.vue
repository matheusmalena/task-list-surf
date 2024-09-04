<template>
  <div class="table-container">
    <table class="styled-table">
      <thead>
        <tr>
          <th><span class="title-task">Tarefa</span></th>
          <th><span class="title-task">Projeto</span></th>
          <th><span class="title-task">Tempo</span></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="Tarefa">{{ tarefa.descricao || "Tarefa sem descrição" }}</td>
          <td data-label="Projeto">{{ tarefa.projeto?.nome || "N/D" }}</td>
          <td data-label="Tempo">
            <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos" />
          </td>
          <td class="text-center" data-label="Ações">
            <button class="btn-delete" @click="excluirTarefa">
              <span class="material-symbols-outlined icon-delete">delete</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Cronometro from "./Cronometro.vue";
import ITarefa from "../interfaces/ITarefa";
import { useStore } from '@/store/index';
import { EXCLUIR_TAREFA } from '@/store/tipo-mutacoes';

export default defineComponent({
  name: "Tarefa",
  components: {
    Cronometro,
  },
  props: {
    tarefa: {
      type: Object as PropType<ITarefa>,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();

    const excluirTarefa = () => {
      if (props.tarefa) {
        store.commit(EXCLUIR_TAREFA, props.tarefa.descricao);
      }
    };

    return {
      excluirTarefa,
    };
  },
});
</script>

<style scoped>
.table-container {
  width: 100%;
  overflow-x: auto;
  border-radius: 8px;
}

.styled-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
}

.styled-table thead {
  background: linear-gradient(0deg, rgba(32, 75, 90, 1) 0%, rgba(119, 177, 185, 1) 100%);
  color: #ffffff;
  text-align: left;
  font-weight: bold;
}

.styled-table th,
.styled-table td {
  padding: 12px 15px;
  text-align: left;
  white-space: nowrap;
}

.styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
  transition: background-color 0.3s ease;
}

.styled-table tbody tr:hover {
  background-color: #f1f1f1;
}

.btn-delete {
  background: none;
  border: none;
  color: #ff5c5c;
  cursor: pointer;
}

.btn-delete span {
  transition: transform 0.3s ease-in-out;
  display: inline-block;
}

.btn-delete span:hover {
  transform: translateY(-3px);
  color: #ff1c1c;
}

@media screen and (max-width: 760px) {
  .styled-table thead {
    display: none;
  }

  .styled-table tbody tr {
    display: block;
    margin-bottom: 0.625rem;
    border-bottom: 2px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
  }

  .styled-table tbody tr td {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: right;
    padding: 0.75rem 0;
    border-bottom: 1px solid #ddd;
  }

  .styled-table tbody tr td:last-child {
    border-bottom: none;
  }

  .styled-table tbody tr td::before {
    content: attr(data-label);
    font-weight: bold;
    text-transform: uppercase;
    color: #037a7a;
    text-align: left;
  }
}
</style>

<template>
  <div class="table-container">
    <table class="styled-table">
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
import { useStore } from '@/store';
import { EXCLUIR_TAREFA, NOTIFICAR } from '@/store/tipo-mutacoes';
import { TipoNotificacao } from "@/interfaces/INotificacao";

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
        store.commit(NOTIFICAR, {
          titulo: 'Tarefa excluida!',
          texto: 'Sua tarefa foi removida da lista!',
          tipo: TipoNotificacao.ATENCAO
        })
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
  table-layout: fixed;
}

.styled-table th {
  padding: 20px 15px;
  text-align: center;
  white-space: nowrap !important;
  width: 30% !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
}

.styled-table td {
  padding: 20px 15px;
  text-align: center;
  white-space: nowrap !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  width: 30%;
}

.styled-table tbody tr {
  background-color: #faf0ca;
  border-bottom: 1px solid #faf0ca;
  transition: background-color 0.3s ease;
}

.btn-delete {
  background: none;
  border: none;
  color: #181818;
  cursor: pointer;
}

.btn-delete span {
  transition: transform 0.3s ease-in-out;
  display: inline-block;
}

.btn-delete span:hover {
  transform: translateY(-5px);
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

  .styled-table th,
  .styled-table td {
    padding: 20px 15px;
    white-space: nowrap;
    width: 100% !important;
  }

}
</style>

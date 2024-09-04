import IProjeto from "@/interfaces/IProjeto";
import ITarefa from "@/interfaces/ITarefa";
import { InjectionKey } from "vue";
import { Store, createStore, useStore as vuexUseStore } from "vuex";
import { ADICIONA_PROJETO, ALTERA_PROJETO, EXCLUIR_PROJETO, NOTIFICAR, EXCLUIR_TODOS_PROJETOS, ADICIONA_TAREFA, EXCLUIR_TAREFA, ATUALIZA_TAREFA } from "./tipo-mutacoes";
import { INotificacao } from "@/interfaces/INotificacao";
import { v4 as uuidv4 } from 'uuid';

interface Estado {
  projetos: IProjeto[];
  tarefas: ITarefa[];
  notificacoes: INotificacao[];
}

export const key: InjectionKey<Store<Estado>> = Symbol();

function saveToLocalStorage(state: Estado) {
  localStorage.setItem('projetos', JSON.stringify(state.projetos));
  localStorage.setItem('tarefas', JSON.stringify(state.tarefas));
}

function loadFromLocalStorage(): { projetos: IProjeto[], tarefas: ITarefa[] } {
  const projetos = localStorage.getItem('projetos');
  const tarefas = localStorage.getItem('tarefas');
  return {
    projetos: projetos ? JSON.parse(projetos) : [],
    tarefas: tarefas ? JSON.parse(tarefas) : []
  };
}

export const store = createStore<Estado>({
  state: {
    projetos: loadFromLocalStorage().projetos,
    tarefas: loadFromLocalStorage().tarefas,
    notificacoes: [],
  },
  mutations: {
    [ADICIONA_PROJETO](state, nomeDoProjeto: string) {
      const projeto = {
        id: uuidv4(), // Gera um ID único
        nome: nomeDoProjeto,
      } as IProjeto;
      state.projetos.push(projeto);
      saveToLocalStorage(state);
    },
    [ALTERA_PROJETO](state, projeto: IProjeto) {
      const index = state.projetos.findIndex(proj => proj.id === projeto.id);
      if (index !== -1) {
        state.projetos[index] = projeto;
      }
      saveToLocalStorage(state);
    },
    [EXCLUIR_PROJETO](state, id: string) {
      state.projetos = state.projetos.filter(proj => proj.id !== id);
      saveToLocalStorage(state);
    },
    [ADICIONA_TAREFA](state, tarefa: ITarefa) {
      state.tarefas.push(tarefa);
      saveToLocalStorage(state);
    },
    [ATUALIZA_TAREFA](state, tarefa: ITarefa) {
      const index = state.tarefas.findIndex(t => t.descricao === tarefa.descricao);
      if (index !== -1) {
        state.tarefas[index] = tarefa;
      }
      saveToLocalStorage(state);
    },
    [EXCLUIR_TAREFA](state, descricao: string) {
      state.tarefas = state.tarefas.filter(tarefa => tarefa.descricao !== descricao);
      saveToLocalStorage(state);
    },
    [NOTIFICAR](state, notificacao: INotificacao) {
      notificacao.id = new Date().getTime();
      state.notificacoes.push(notificacao);
      setTimeout(() => {
        state.notificacoes = state.notificacoes.filter(n => n.id !== notificacao.id);
      }, 3000);
    },
    [EXCLUIR_TODOS_PROJETOS](state) {
      state.projetos = [];
      saveToLocalStorage(state);
    },
  },
});

export function useStore(): Store<Estado> {
  return vuexUseStore(key);
}

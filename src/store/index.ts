import IProjeto from "@/interfaces/IProjeto";
import { InjectionKey } from "vue";
import { Store, createStore, useStore as vuexUseStore } from "vuex";
import { ADICIONA_PROJETO, ALTERA_PROJETO, EXCLUIR_PROJETO, NOTIFICAR } from "./tipo-mutacoes";
import { INotificacao } from "@/interfaces/INotificacao";

interface Estado {
  projetos: IProjeto[];
  notificacoes: INotificacao[];
}

export const key: InjectionKey<Store<Estado>> = Symbol();

function saveToLocalStorage(state: Estado) {
  localStorage.setItem('projetos', JSON.stringify(state.projetos));
}

function loadFromLocalStorage(): IProjeto[] {
  const data = localStorage.getItem('projetos');
  return data ? JSON.parse(data) : [];
}

export const store = createStore<Estado>({
  state: {
    projetos: loadFromLocalStorage(),
    notificacoes: [],
  },
  mutations: {
    [ADICIONA_PROJETO](state, nomeDoProjeto: string) {
      const projeto = {
        id: new Date().toISOString(),
        nome: nomeDoProjeto,
      } as IProjeto;
      state.projetos.push(projeto);
      saveToLocalStorage(state);
    },
    [ALTERA_PROJETO](state, projeto: IProjeto) {
      const index = state.projetos.findIndex(proj => proj.id == projeto.id);
      state.projetos[index] = projeto;
      saveToLocalStorage(state);
    },
    [EXCLUIR_PROJETO](state, id: string) {
      state.projetos = state.projetos.filter(proj => proj.id != id);
      saveToLocalStorage(state);
    },
    [NOTIFICAR](state, notificacao: INotificacao) {
      notificacao.id = new Date().getTime();
      state.notificacoes.push(notificacao);
      setTimeout(() => {
        state.notificacoes = state.notificacoes.filter(n => n.id !== notificacao.id);
      }, 3000);
    },
  },
});

export function useStore(): Store<Estado> {
  return vuexUseStore(key);
}

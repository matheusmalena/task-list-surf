import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Tarefas from '../views/Tarefas.vue';
import Projetos from '../views/Projetos.vue';
import Formulario from '../views/Projetos/Formulario.vue';
import Lista from '../views/Projetos/Lista.vue';
import Login from '../components/Login.vue';
import { store } from '../store';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/tarefas',
    name: 'Tarefas',
    component: Tarefas,
  },
  {
    path: '/projetos',
    component: Projetos,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'Projetos',
        component: Lista,
        meta: { requiresAuth: true }
      },
      {
        path: 'novo',
        name: 'Novo Projeto',
        component: Formulario,
        meta: { requiresAuth: true }
      },
      {
        path: ':id',
        name: 'Editar Projeto',
        component: Formulario,
        meta: { requiresAuth: true },
        props: true
      },
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.isAuthenticated;
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;

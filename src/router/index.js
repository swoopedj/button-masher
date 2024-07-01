import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CounterView from '../views/CounterView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/fire-heli',
      name: 'fire-heli',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/FireHeli.vue')
    },
    {
      path: '/graff',
      name: 'graff',
      component: () => import('../views/GraffWall.vue')
    },
    {
      path: '/expense-tracker',
      name: 'expense-tracker',
      component: () => import('../views/ExpenseTracker.vue')
    },
    {
      path: '/counter',
      name: 'counter',
      component: CounterView
    }
  ]
});

export default router;

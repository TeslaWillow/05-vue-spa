import isAuthenticatedGuard from '@/modules/auth/guards/is-authenticated.guard';
import LoginPage from '@/modules/auth/pages/LoginPage.vue';
import NotFound404 from '@/modules/common/pages/NotFound404.vue';
import HomePage from '@/modules/landing/pages/HomePage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // DASHBOARD
    {
      path: '/',
      name: 'landing',
      component: () => import('@/modules/landing/layout/LandingLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: HomePage,
        },
        {
          path: '/features',
          name: 'features',
          component: () => import('@/modules/landing/pages/FeaturesPages.vue'),
        },
        {
          path: '/pricing',
          name: 'pricing',
          component: () => import('@/modules/landing/pages/PricingPage.vue'),
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => import('@/modules/landing/pages/ContactPage.vue'),
        },
        {
          path: '/pokemon/:id',
          name: 'pokemon',
          // props: true,
          beforeEnter: [isAuthenticatedGuard],
          props: route => {
            console.log(route);
            const id = +route.params.id;

            return isNaN(id) ? { id: 1 } : { id: id };
          },
          component: () => import('@/modules/pokemon/pages/PokemonPage.vue'),
        },
      ],
    },

    // AUTH
    {
      path: '/auth',
      name: 'auth',
      redirect: { name: 'login' },
      component: () => import('@/modules/auth/layout/AuthLayout.vue'),
      children: [
        {
          path: '/login',
          name: 'login',
          component: LoginPage,
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('@/modules/auth/pages/RegisterPage.vue'),
        },
      ],
    },

    // 404
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound404,
    },
  ],
});

export default router;

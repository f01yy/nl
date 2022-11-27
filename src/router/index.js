import { createRouter, createWebHistory } from 'vue-router';

import CategoriesPage from '@/pages/CategoriesPage.vue';
import ProductsPage from '@/pages/ProductsPage.vue';

const routes = [
  { path: '/', component: CategoriesPage, props: true },
  { path: '/category/:slug', component: ProductsPage, props: true },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});

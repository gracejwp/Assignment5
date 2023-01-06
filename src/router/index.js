import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import LoginPage from "../views/LoginPage.vue";
import MoviesPage from "../views/MoviesPage.vue";
import PurchasePage from "../views/PurchasePage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/movies",
    component: MoviesPage,
  },
  {
    path: "/purchase",
    component: PurchasePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

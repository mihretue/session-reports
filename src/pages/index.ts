import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

import SessionsPage from "./SessionsPage.vue";
import ReportsPage from "./ReportsPage.vue";
import DiffusionPage from "./DiffusionPage.vue";
import SchedulePage from "./SchedulePage.vue";

const routes: RouteRecordRaw[] = [
  { path: "/sessions", component: SessionsPage },
  { path: "/reports", component: ReportsPage },
  { path: "/diffusion", component: DiffusionPage },
  { path: "/schedule", component: SchedulePage },
  { path: "/", redirect: "/sessions" },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});

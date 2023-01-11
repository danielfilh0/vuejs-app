import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/edit-user",
      name: "edit-user",
      component: () => import("../views/EditUser.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
      meta: { layout: "empty" },
    },
    {
      path: "/sign-up",
      name: "sign-up",
      component: () => import("../views/SignUp.vue"),
      meta: { layout: "empty" },
    },
    {
      path: "/:pathMatch(.*)",
      name: "page-not-found",
      component: () => import("../views/PageNotFound.vue"),
      meta: { layout: "empty" },
    },
  ],
});

export default router;

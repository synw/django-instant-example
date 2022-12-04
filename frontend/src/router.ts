import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import HomeView from "./views/HomeView.vue"

const baseTitle = "Django Instant"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: HomeView,
    meta: {
      title: "Websockets demo"
    }
  },
  {
    path: "/login",
    component: () => import("./views/LoginView.vue"),
    meta: {
      title: "Login"
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.afterEach((to, from) => { // eslint-disable-line
  document.title = `${baseTitle} - ${to.meta?.title}`
});

export default router

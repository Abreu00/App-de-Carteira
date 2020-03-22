import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Goals from "../views/Goals";
import Consolidada from "../views/Consolidada";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/goals",
    name: "Goals",
    component: Goals
  },
  {
    path: "/consolidada",
    name: "Consolidada",
    component: Consolidada
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

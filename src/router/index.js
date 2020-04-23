import Vue from "vue";
import VueRouter from "vue-router";
import CurrentAssets from "../views/CurrentAssets";
import Goals from "../views/Goals";
import Consolidada from "../views/Consolidada";
import CreateWallet from "../views/CreateWallet/";
import About from "../views/About";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "CurrentAssets",
    component: CurrentAssets,
  },
  {
    path: "/goals",
    name: "Goals",
    component: Goals,
  },
  {
    path: "/consolidada",
    name: "Consolidada",
    component: Consolidada,
  },
  {
    path: "/createWallet",
    name: "CreateWallet",
    component: CreateWallet,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

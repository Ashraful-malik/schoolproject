import Vue from "vue";
import VueRouter from "vue-router";
import home2 from "../components/Home2";
import detail from "../components/Detail";
import project from "../components/Project";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: home2 },
  { path: "/project", name: "project", component: project },
  { path: "/projects/:slug", name: "details", component: detail },
];
const router = new VueRouter({
  mode: "history",
  routes,
});
export default router;

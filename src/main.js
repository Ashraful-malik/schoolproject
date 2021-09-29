import Vue from "vue";
import App from "./App.vue";
import "animate.css";
import router from "./routes";
import VueTypedJs from "vue-typed-js";
Vue.use(VueTypedJs);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");

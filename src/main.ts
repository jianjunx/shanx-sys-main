import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import elementui from "./utils/elementui";
import { microAppStart } from "./utils/microApps";
Vue.config.productionTip = false;
import "./styles/index.scss";

elementui(Vue);

Vue.config.errorHandler = (err, vm, info) => {
  console.log("Vue Error", err, info);
  // handle error
  // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
  // 只在 2.2.0+ 可用
};

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

microAppStart();

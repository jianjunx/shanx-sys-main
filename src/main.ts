import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import './styles/index.less';
import elementui from './utils/elementui';
import { microAppStart } from './utils/microApps';
Vue.config.productionTip = false;

elementui(Vue);

new Vue({
  render: (h) => h(App),
}).$mount('#app');

microAppStart();

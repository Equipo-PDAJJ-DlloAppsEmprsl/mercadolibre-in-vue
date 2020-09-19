import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import VueRouter from 'vue-router';
import MainShop from './components/personal-shop/main/MainShop';
import ProductDetail from './components/personal-shop/product-detail/ProductDetail';

Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");

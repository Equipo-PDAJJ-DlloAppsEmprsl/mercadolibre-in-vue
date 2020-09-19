import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "main",
    component: require("@/components/personal-shop/main/MainShop.vue").default
  },
  {
    path: "/products/:criteria/:offset",
    name: "products",
    component: require("@/components/personal-shop/main/product-list/ProductList.vue").default
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: require("@/components/personal-shop/product-detail/ProductDetail.vue").default
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

<template>
  <v-app>
    <v-main>
      <ShopHeader />
      <ProductList/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import ShopHeader from "./components/personal-shop/main/shopheader/ShopHeader.vue";
import ProductList from "./components/personal-shop/main/product-list/ProductList.vue";

export default Vue.extend({
  name: "App",

  components: {
    ShopHeader,
    ProductList
  },

  data: () => ({
    //
  })
});
</script>

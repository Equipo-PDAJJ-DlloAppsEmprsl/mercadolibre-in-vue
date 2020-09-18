<template>
  <v-app>
    <v-main>
      <ShopHeader />
      <ProductCard/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import ShopHeader from "./components/personal-shop/main/shopheader/ShopHeader.vue";
import ProductCard from "./components/personal-shop/main/product-card/ProductCard.vue";

export default Vue.extend({
  name: "App",

  components: {
    ShopHeader,
    ProductCard
  },

  data: () => ({
    //
  })
});
</script>

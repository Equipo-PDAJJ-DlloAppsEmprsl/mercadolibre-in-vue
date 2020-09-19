<template>
  <v-app>
    <v-main>
      <ProductList></ProductList>
      <Main></Main>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Main from "./components/personal-shop/main/Main.vue";
import ProductList from "./components/personal-shop/main/shopheader/ShopHeader.vue";

export default Vue.extend({
  name: "App",

  components: {
    Main,
    ProductList
  },

  data: () => ({
    //
  })
});
</script>

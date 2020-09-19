<template>
<div>
    <ShopHeader></ShopHeader>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ShopHeader from '@/components/personal-shop/main/shopheader/ShopHeader.vue'
export default Vue.extend({
  name: "App",

  components: {
    ShopHeader
  },

  data: () => ({
    //
  })
});
</script>

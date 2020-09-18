<template>
<v-card
    class="mx-auto"
    max-width="344">
      <v-img
      src="https://www.alchimiaweb.com/blog/wp-content/uploads/2013/08/Una-genetica-Purple-presentada-por-Subcool-Cannabis-de-color-rosa.jpg"
      height="200px"
    ></v-img>
    <v-system-bar
      dark
    >
        <v-card-title>
        {{ product.name }}
        </v-card-title>
    </v-system-bar>
  </v-card>
</template>
<script lang="ts" src="./ProductCard.ts">
</script>
<style scoped>
@import "./ProductCard.css";
</style>
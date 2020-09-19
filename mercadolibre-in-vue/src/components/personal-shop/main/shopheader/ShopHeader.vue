<template>
  <v-card class="overflow-hidden">
    <v-app-bar>
      <div>
        <v-img class="ml-logo" :src="require('@/assets/ml.png')" />
      </div>
      <v-toolbar-title class="titulo">Gallito Shop</v-toolbar-title>
      <v-spacer></v-spacer>
     <v-text-field
        class="mx-4"
        flat
        hide-details
        append-icon="search"
        solo-inverted
        v-model="searchCriteria"
        v-on:keyup.enter="searchItems"
        
      ></v-text-field>
      <v-spacer></v-spacer>
      <div>
        <v-img class="aniversario" :src="require('@/assets/aniversario.png')" />
      </div>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-8"
      class="overflow-y-auto"
      max-height="600"
    >
    </v-sheet>
  </v-card>
</template>
<script src="./ShopHeader.ts">
</script>
<style scoped>
@import "./ShopHeader.css";
</style>

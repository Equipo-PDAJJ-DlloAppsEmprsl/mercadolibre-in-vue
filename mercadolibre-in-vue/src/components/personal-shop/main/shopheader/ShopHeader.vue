<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="primary"
      dark
    >
      <v-app-bar-nav-icon color="#3B3815"></v-app-bar-nav-icon>

      <v-toolbar-title class="titulo">Gallito Shop</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon color="#3B3815">mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon color="#3B3815">mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon color="#3B3815">mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-8"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 1500px;">

      </v-container>
    </v-sheet>
  </v-card>
</template>
<script>
import Vue from "vue";

export default Vue.extend({
  name: "ShopHeader"
})
</script>
<style scoped>
  @import "./ShopHeader.css";
</style>
<template>
    <v-card
        max-width="1000px"
        class="mx-auto">
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="(item, i) in items"
          :key="i"
          :cols="3"
          >
          <v-card dark>
              <v-img :src="item.photo" height="200px">
                <v-card-title v-text="item.price"></v-card-title>
              </v-img>
              <div>
                <v-card-subtitle v-text="item.name"></v-card-subtitle>
              </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script lang="ts" src="./ProductList.ts">
</script>
<style scoped>
@import "./ProductList.css";
</style>
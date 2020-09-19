<template>
<div class="product-list-cont">
<v-card v-if="items.length>0"
        max-width="1000px"
        class="mx-auto">
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="(item, i) in items"
          v-bind="item"
          :key="i"
          :cols="3"
          >
          <v-card dark @click="itemSelection">
              <v-img :src="item.photo" height="200px" >
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
  <v-container v-if="items.length==0">
  <h1>No match results</h1>
</v-container>
</div>

    
</template>
<script lang="ts" src="./ProductList.ts">
</script>
<style scoped>
@import "./ProductList.css";
</style>
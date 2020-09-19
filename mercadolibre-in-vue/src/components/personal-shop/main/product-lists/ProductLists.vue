<template>
  <div>
    <v-container v-if="total !=0">
      <v-row>
        <v-col v-bind:key="result.id" v-for="result in results " cols="9" sm="4">
          <v-card @click="details(result.id)" height="350px">
            <v-img :src="result.thumbnail" height="200px" width="200px"></v-img>
            <v-card-title>{{result.title}}</v-card-title>
            <v-card-subtitle>{{result.address.state_name}}</v-card-subtitle>
            <v-card-text class="text--primary">{{new Intl.NumberFormat().format(result.price)}}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <div class="text-center">
        <v-container>
          <v-row justify="center">
            <v-col cols="8">
              <v-container class="max-width">
                <v-pagination
                  v-model="page"
                  class="my-4"
                  :length="pagination"
                  @input="cambio(page)"
                ></v-pagination>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-container>
    <v-container v-if="total==0">
      <h1>No hay resultados que concuerden con tu busqueda</h1>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      pagination: 0,
      search: 0,
      offset: 0,
      total: 0,
      loading: true,
      results: {},
      page: 1,
    };
  },
  created() {
    this.consult(this.$route.params.search, this.$route.params.offset);
  },
  watch: {
    $route(to) {
      this.consult(to.params.search, to.params.offset);
      console.log(to.params.search);
      this.search = to.params.search;
      this.offset = to.params.offset;
    },
  },
  methods: {
    details(id) {
      this.$router.push({
        name: "detail",
        params: { id },
      });
    },
    consult(search, offset) {
      axios
        .get(
          `https://api.mercadolibre.com/sites/MCO/search?q=${search}&offset=${offset}`
        )
        .then((result) => {
          this.total = result.data.paging.total;
          this.pagination = Math.ceil(result.data.paging.total / 50);
          this.results = result.data.results;
          this.loading = false;
        })
        .catch((err) => {
          console.log("falllo");
          console.log(err);
          this.loading = false;
        });
    },
    cambio(newPage) {
      let busqueda = this.$route.params.search;
      console.log(busqueda);
      let offset = (newPage - 1) * 50;
      console.log(offset);
      this.$router.push({
        name: "search",
        params: { search: busqueda, offset: offset },
      });
    },
  },
};
</script>

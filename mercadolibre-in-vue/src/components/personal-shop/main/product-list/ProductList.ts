import Vue from 'vue'
import {store} from '@/store/store';

export default Vue.extend({
    name: "ProductList",
    data: () => ({
        items: store.items
    }),
    methods: {
        itemSelection: function(event: any) {
            console.log(event)
            this.$router.push({
                name: "detail",
                params: { id: "xx" },
              });
        },
    }, created(){
        //this.searchItem("carro")
    },
    watch: {
    }
})
import Vue from 'vue'
import {store} from '@/store/store';

export default Vue.extend({
    name: "ProductList",
    data: () => ({
        items: [],
        criteria: "",
        totPages: 0,
        offset: 0,
        find: 0,
        currentPage: 0
    }),
    methods: {
        itemSelection: function(event: any) {
            console.log(event)
            this.$router.push({
                name: "detail",
                params: { id: "xx" },
              });
        },
        searchItem: function(searchText: string, offset: number) {               
            store.service.getItems(searchText, offset).then(
                response=>{
                    (console.log(response))
                    this.parseResponse(response.data.results)
                   }
            );
           },
           parseResponse: function(data: any[]) {
            data.forEach(element => {
                store.items.push({
                    price: element.price,
                    name: element.title,
                    reseller: element.seller.id,
                    discount: element.original_price || 0,
                    review: "",
                    photo: element.thumbnail
                })
            });
            console.log(store.items);
        }
    },    
    created(){
        this.searchItem(this.$route.params.criteria, 0)
    },
    watch: {
        $route(params) {
            const criteria = params.params.criteria;
            const offset = params.params.offset;
            this.searchItem(criteria, offset);
            this.criteria = criteria;
            this.offset = offset;
        }
    }
})
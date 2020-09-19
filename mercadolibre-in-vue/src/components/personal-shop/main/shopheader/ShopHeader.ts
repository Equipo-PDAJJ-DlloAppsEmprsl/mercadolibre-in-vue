import Vue from "vue";
import {store} from '@/store/store';
import {MercadoLibreService} from '@/shared/services/mercado-libre.services';
import { Product } from '@/model/Product';
export default Vue.extend({
    name: "ShopHeader",
    data: () => ({
        searchCriteria: ""
    }),
    methods: {
        searchItems: function()  {
            this.$router.push({
                name: 'products',
                params: {criteria: this.searchCriteria, offset:"0"}
            })
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
    
});
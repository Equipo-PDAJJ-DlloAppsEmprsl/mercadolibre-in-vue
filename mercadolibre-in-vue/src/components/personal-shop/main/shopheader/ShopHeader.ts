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
        searchItem: function(searchText: string) {
            const service: MercadoLibreService = new MercadoLibreService();
            
             service.getItems(searchText, 30).then(
                 response=>{
                     (console.log(response))
                     this.parseResponse(response.data.results)
                    }
             )
            },
        searchItems: function()  {
            console.log(this.searchCriteria)
            
            this.searchItem(this.searchCriteria)
        },
        parseResponse: function(data: any[]) {
            const newArray: Product[] = [];
            data.forEach(element => {
                newArray.push({
                    price: element.price,
                    name: element.title,
                    reseller: element.seller.id,
                    discount: element.original_price || 0,
                    review: "",
                    photo: element.thumbnail
                })
            });
            store.items = newArray;
            console.log(store.items);
        }
    },
    
});
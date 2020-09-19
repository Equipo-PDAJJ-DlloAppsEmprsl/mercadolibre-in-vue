import Vue from 'vue'
import {PRODUCTLIST} from '../../../../shared/helpers/__mock___/Products.mock';

export default Vue.extend({
    name: "ProductList",
    data: () => ({
        items: PRODUCTLIST
    }),
    methods: {
        itemSelection: function(event: any) {
            console.log(event)
        }
    }
})
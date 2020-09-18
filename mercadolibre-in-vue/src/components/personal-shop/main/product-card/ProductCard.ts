import Vue from "vue";
import {Product} from '../../../../model/Product';

const product: Product = {
    discount: 0,
    name: "la cripa rosada",
    price: 70000,
    reseller: "El jivaro",
    review: "una chimba",
    photo: ""
}

export default Vue.extend({
    name: "ProductCard",
    data: () => ({
        product: product    
    })
});
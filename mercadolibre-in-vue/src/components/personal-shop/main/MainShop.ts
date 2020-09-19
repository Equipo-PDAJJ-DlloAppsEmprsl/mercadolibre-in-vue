import ProductList from "./product-list/ProductList.vue"
import ShopHeader from "./shopheader/ShopHeader.vue";
import Vue from 'vue'

export default Vue.extend({
    name: "MainShop",
    components: {
        ProductList,
        ShopHeader
    }
})
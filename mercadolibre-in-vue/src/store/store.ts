import Vue from 'vue';
import {Product} from '@/model/Product';
import {MercadoLibreService} from '@/shared/services/mercado-libre.services'

const items: Product[] = []
const service: MercadoLibreService = new MercadoLibreService();
export const store = Vue.observable({
    items: items,
    service: service
});

import Vue from 'vue';
import {Product} from '@/model/Product';

const items: Product[] = []

export const store = Vue.observable({
    items: items
});

import axios from 'axios';

export class MercadoLibreService {

    dataML = [];

    getItems(searchCriteria: string, offset: number){
        return axios.get(`https://api.mercadolibre.com/sites/MCO/search?q=${searchCriteria}&offset=${offset}`)
    }
}
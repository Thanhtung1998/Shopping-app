
import axiosClient from './axiosClient'
import { Product, ProductData } from '../models'

const productApi = {
    getAllProduct: () => {
        const url = '/products';
        return axiosClient.get(url);
    },

    getSingleProduct: (params: any) => {
        console.log(params)
        const url = '/products/' + `${params}`;
        return axiosClient.get(url);
    },

    getPagination(params: any): Promise<ProductData<Product>> {
        const url = '/products';
        return axiosClient.get(url, { params });
    }
}

export default productApi;
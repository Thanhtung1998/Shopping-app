import { apolloClient } from '../../app/graphql';
import { GetProduct_products } from './__generated__/GetProduct'
import { Get_ALL_Product } from './queries'

class ProductService {

    public async getProducts(): Promise<GetProduct_products[]> {
        const response = await apolloClient.query({ query: Get_ALL_Product }).catch((err) => {
            throw err;
        })

        // console.log(response)

        if (response && response.data) {
            return response.data as GetProduct_products[];
        }

        return [];

    }
}

export default new ProductService();
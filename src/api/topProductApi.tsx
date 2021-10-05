
import axiosClient from './axiosClient'

const topProductApi = {
    getAllProduct: () => {
        const url = '/TopProduct';
        return axiosClient.get(url);
    },

    getSingleProduct: (params: any) => {
        // console.log(params)
        const url = '/TopProduct/' + `${params}`;
        return axiosClient.get(url);
    },

}

export default topProductApi;
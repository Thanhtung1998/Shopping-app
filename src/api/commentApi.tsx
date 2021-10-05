import axiosClientDev from './axiosClientDev'

const commentApi = {

    getAllComment: () => {
        const url = '/cmtProduct';
        return axiosClientDev.get(url);
    },

    getCommentByProductId: (params: string) => {
        const url = `/cmtProduct/product/${params}`;
        return axiosClientDev.get(url);
    }

}

export default commentApi;

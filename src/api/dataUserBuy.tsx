import axiosClientDev from "./axiosClientDev";
import { dataUserBuy } from '../models/dataUserBuy'
import { dataUserBuyList } from '../models/common'

const DataUserBuy = {

    getAllUserBuy(): Promise<dataUserBuyList<dataUserBuy>> {
        const url = "/firebase/dataUserBuy"
        return axiosClientDev.get(url);
    },

    getBuyId(params: string): Promise<dataUserBuy> {
        const url = `/firebase/dataUserBuy?userId=${params}`
        return axiosClientDev.get(url);
    }

}

export default DataUserBuy
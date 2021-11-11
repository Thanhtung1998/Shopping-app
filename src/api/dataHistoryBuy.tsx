import axiosClientDev from "./axiosClientDev";
import { dataHistoryBuy } from '../models/dataHistoryBuy'
import { dataHistoryBuyList } from '../models/common'

const DataHistoryBuy = {

    getAllDataBuy(params: string): Promise<dataHistoryBuyList<dataHistoryBuy>> {
        const url = `/firebase/dataBuyUser/dataBuy/${params}`
        return axiosClientDev.get(url);
    },

    getDataBuyId(params: string): Promise<dataHistoryBuy> {
        const url = `/firebase/dataUserBuy?userId=${params}`
        return axiosClientDev.get(url);
    }

}

export default DataHistoryBuy
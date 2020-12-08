import axios from 'axios';
import Web3 from 'web3';

export class GasPriceStore {
    private static _instance: GasPriceStore;
    private gasStationUrl = "http://ethgasstation.info/json/ethgasAPI.json";

    private constructor() {
        // Do nothing
    }

    public static getInstance() {
        if (!GasPriceStore._instance) {
            GasPriceStore._instance = new GasPriceStore();
            return GasPriceStore._instance;
        } else {
            return GasPriceStore._instance;
        }
    }

    /**
     * Used to get price from gas station.
     */
    public async getPrice() {
        const res = await axios.get(this.gasStationUrl);

        var price = res.data.average / 10;

        return Web3.utils.toWei(price.toString(), 'gwei');
    }

}
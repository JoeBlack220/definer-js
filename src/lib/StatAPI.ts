import axios from 'axios';
const api = require('../constants/json/api.json')

class API {

    private CN_URL: string = "https://stat.definer.cn";
    private ORG_URL: string = "https://stat.definer.org";

    public async statusAssests(userAddress: string, unit: string = "ETH") {

        const route = api["status_assests"];
        const res = await axios.get(`CN_URL${route}`, { params: { eth_address: userAddress, unit: unit } });
        this.handleError(res);
        return res.data;

    }

    public async balances(userAddress: string, tokenAddress: string) {

        const route = api["balances"];
        const res = await axios.get(`CN_URL${route}`, { params: { eth_address: userAddress, token_address: tokenAddress } });
        this.handleError(res);
        return res.data;

    }

    public async ltv(userAddress: string) {

        const route = api["ltv"];
        const res = await axios.get(`CN_URL${route}`, { params: { eth_address: userAddress } });
        this.handleError(res);
        return res.data;

    }

    public async balanceLog(userAddress: string, tokenAddress: string, limit: number) {

        const route = api["balance_log"];
        const res = await axios.get(`CN_URL${route}`,
            { params: { eth_address: userAddress, token_address: tokenAddress, limit: limit } });
        this.handleError(res);
        return res.data;

    }

    public async getSavingsOrder(userAddress: string, tokenAddress: string, page: number, limit: number) {
        const route = api["get_savings_order"];
        const res = await axios.get(`CN_URL${route}`,
            { params: { eth_address: userAddress, token_address: tokenAddress, page: page, limit: limit } });
        this.handleError(res);
        return res.data;
    }

    public async tokenStatus(tokenAddress: string) {
        const route = api["token_status"];
        const res = await axios.get(`CN_URL${route}`,
            { params: { token_address: tokenAddress } });
        this.handleError(res);
        return res.data;
    }

    public async tokenStatistical(tokenAddress: string, limit: number) {
        const route = api["token_statistical"];
        const res = await axios.get(`CN_URL${route}`,
            { params: { token_address: tokenAddress, limit: limit } });
        this.handleError(res);
        return res.data;
    }

    public async tokenPrice(tokenAddress: string) {
        const route = api["token_prices"];
        const res = await axios.get(`CN_URL${route}`,
            { params: { token_address: tokenAddress } });
        this.handleError(res);
        return res.data;
    }

    public async totalAssets() {

        const route = api["total_assets"];
        const res = await axios.get(`CN_URL${route}`);
        this.handleError(res);
        return res.data;

    }

    public async addressList(page: number, limit: number) {
        const route = api["address_list"];
        const res = await axios.get(`CN_URL${route}`,
            { params: { page: page, limit: limit } });
        this.handleError(res);
        return res.data;
    }

    private handleError(res: any) {
        const succCode = res.code;

        switch (succCode) {
            case 200:
                return;
            case 401:
                throw new Error("Missing Parameters.");
            case 403:
                throw new Error("Request denied.");
            case 404:
                throw new Error("Requested content doesn't exist.");
            case 500:
                throw new Error("Internal error.");
        }

    }
}
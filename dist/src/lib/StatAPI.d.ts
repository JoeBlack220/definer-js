export declare class API {
    private CN_URL;
    private ORG_URL;
    statusAssests(userAddress: string, unit?: string): Promise<any>;
    balances(userAddress: string, tokenAddress: string): Promise<any>;
    ltv(userAddress: string): Promise<any>;
    balanceLog(userAddress: string, tokenAddress: string, limit: number): Promise<any>;
    getSavingsOrder(userAddress: string, tokenAddress: string, page: number, limit: number): Promise<any>;
    tokenStatus(tokenAddress: string): Promise<any>;
    tokenStatistical(tokenAddress: string, limit: number): Promise<any>;
    tokenPrice(tokenAddress: string): Promise<any>;
    totalAssets(): Promise<any>;
    addressList(page: number, limit: number): Promise<any>;
    private handleError;
}

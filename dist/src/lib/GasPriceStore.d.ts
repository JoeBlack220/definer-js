export declare class GasPriceStore {
    private static _instance;
    private gasStationUrl;
    private constructor();
    static getInstance(): GasPriceStore;
    /**
     * Used to get price from gas station.
     */
    getPrice(): Promise<string>;
}

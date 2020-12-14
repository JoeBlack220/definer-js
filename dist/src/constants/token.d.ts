export declare enum Token {
    BAT = 1,
    DAI = 2,
    ETH = 3,
    REP = 4,
    USDC = 5,
    USDT = 6,
    WBTC = 7,
    ZRX = 8,
    MKR = 9,
    FIN = 10,
    LPToken = 11,
    TUSD = 12
}
export declare const tokenNameMap: Map<Token, string>;
/**
 * This value start from 100 to distinguish to value from Token
 */
export declare enum cToken {
    cBAT = 100,
    cDAI = 101,
    cETH = 102,
    cREP = 103,
    cUSDC = 104,
    cUSDT = 105,
    cWBTC = 106,
    cZRX = 107
}
export declare const cTokenNameMap: Map<cToken, string>;

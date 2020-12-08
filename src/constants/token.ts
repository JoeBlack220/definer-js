export enum Token {
    BAT = 1,
    DAI,
    ETH,
    REP,
    USDC,
    USDT,
    WBTC,
    ZRX,
    MKR,
    FIN,
    LPToken
}

export const tokenNameMap = new Map([
    [Token.BAT, "BAT"],
    [Token.DAI, "DAI"],
    [Token.ETH, "ETH"],
    [Token.REP, "REP"],
    [Token.USDC, "USDC"],
    [Token.USDT, "USDT"],
    [Token.WBTC, "WBTC"],
    [Token.ZRX, "ZRX"],
    [Token.MKR, "MKR"],
    [Token.FIN, "FIN"],
    [Token.LPToken, "LPToken"],
]);

/**
 * This value start from 100 to distinguish to value from Token
 */
export enum cToken {
    cBAT = 100,
    cDAI,
    cETH,
    cREP,
    cUSDC,
    cUSDT,
    cWBTC,
    cZRX
}

export const cTokenNameMap = new Map([
    [cToken.cBAT, "cBAT"],
    [cToken.cDAI, "cDAI"],
    [cToken.cETH, "cETH"],
    [cToken.cREP, "cREP"],
    [cToken.cUSDC, "cUSDC"],
    [cToken.cUSDT, "cUSDT"],
    [cToken.cZRX, "cZRX"]
]);

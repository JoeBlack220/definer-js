"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cTokenNameMap = exports.cToken = exports.tokenNameMap = exports.Token = void 0;
var Token;
(function (Token) {
    Token[Token["BAT"] = 1] = "BAT";
    Token[Token["DAI"] = 2] = "DAI";
    Token[Token["ETH"] = 3] = "ETH";
    Token[Token["REP"] = 4] = "REP";
    Token[Token["USDC"] = 5] = "USDC";
    Token[Token["USDT"] = 6] = "USDT";
    Token[Token["WBTC"] = 7] = "WBTC";
    Token[Token["ZRX"] = 8] = "ZRX";
    Token[Token["MKR"] = 9] = "MKR";
    Token[Token["FIN"] = 10] = "FIN";
    Token[Token["LPToken"] = 11] = "LPToken";
    Token[Token["TUSD"] = 12] = "TUSD";
})(Token = exports.Token || (exports.Token = {}));
exports.tokenNameMap = new Map([
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
    [Token.TUSD, "TUSD"],
]);
/**
 * This value start from 100 to distinguish to value from Token
 */
var cToken;
(function (cToken) {
    cToken[cToken["cBAT"] = 100] = "cBAT";
    cToken[cToken["cDAI"] = 101] = "cDAI";
    cToken[cToken["cETH"] = 102] = "cETH";
    cToken[cToken["cREP"] = 103] = "cREP";
    cToken[cToken["cUSDC"] = 104] = "cUSDC";
    cToken[cToken["cUSDT"] = 105] = "cUSDT";
    cToken[cToken["cWBTC"] = 106] = "cWBTC";
    cToken[cToken["cZRX"] = 107] = "cZRX";
})(cToken = exports.cToken || (exports.cToken = {}));
exports.cTokenNameMap = new Map([
    [cToken.cBAT, "cBAT"],
    [cToken.cDAI, "cDAI"],
    [cToken.cETH, "cETH"],
    [cToken.cREP, "cREP"],
    [cToken.cUSDC, "cUSDC"],
    [cToken.cUSDT, "cUSDT"],
    [cToken.cZRX, "cZRX"]
]);

import { expect } from 'chai';
import Web3 from 'web3';
import { DeFiner } from '../../src/app/DeFiner';
import { Token } from '../../src/constants'
import { GasPriceStore } from '../../src/lib';

const PrivateKeyProvider = require("truffle-privatekey-provider");
const { BN } = require("@openzeppelin/test-helpers");

describe("Token address getter tests", async function () {

    this.timeout(0);
    const provider = new PrivateKeyProvider(
        "850bdc51011cbc33bd72592e494b0127d7755d468a501f50161d96c9a7f4c640",
        "https://mainnet.infura.io/v3/ea620a48fe584d2297be56bde9d5b451");
    const web3 = new Web3(provider);
    const definer = new DeFiner(web3);

    before(async function () {
        this.timeout(0);
        await definer.initialize();
    });


    it("Should get all the tokens name.", async () => {

        const BATName = definer.getTokenName(Token.BAT);
        const DAIName = definer.getTokenName(Token.DAI);
        const ETHName = definer.getTokenName(Token.ETH);
        const FINName = definer.getTokenName(Token.FIN);
        const LPName = definer.getTokenName(Token.LPToken);
        const MKRName = definer.getTokenName(Token.MKR);
        const REPName = definer.getTokenName(Token.REP);
        const TUSDName = definer.getTokenName(Token.TUSD);
        const USDCName = definer.getTokenName(Token.USDC);
        const USDTName = definer.getTokenName(Token.USDT);
        const WBTCName = definer.getTokenName(Token.WBTC);
        const ZRXName = definer.getTokenName(Token.ZRX);

        expect(BATName).to.equal("BAT");
        expect(DAIName).to.equal("DAI");
        expect(ETHName).to.equal("ETH");
        expect(FINName).to.equal("FIN");
        expect(LPName).to.equal("LPToken");
        expect(MKRName).to.equal("MKR");
        expect(REPName).to.equal("REP");
        expect(TUSDName).to.equal("TUSD");
        expect(USDCName).to.equal("USDC");
        expect(USDTName).to.equal("USDT");
        expect(WBTCName).to.equal("WBTC");
        expect(ZRXName).to.equal("ZRX");

    });

});
import { expect } from 'chai';
import Web3 from 'web3';
import { DeFiner } from '../../src/app/DeFiner';
import { Token } from '../../src/constants'
const PrivateKeyProvider = require("truffle-privatekey-provider");
const { BN } = require("@openzeppelin/test-helpers");

describe("Stat API tests", async function () {

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

    it("Should call the status_assets API", async () => {
        const data = await definer.API.statusAssests("0xaA817b67d605f45e7759031303b04422734834eD");
        console.log(data);
    });

});
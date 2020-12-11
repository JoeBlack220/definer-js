import { expect } from 'chai';
import Web3 from 'web3';
import { DeFiner } from '../../src/app/DeFiner';
import { Token } from '../../src/constants'
const PrivateKeyProvider = require("truffle-privatekey-provider");
const { BN } = require("@openzeppelin/test-helpers");

describe("Contract API tests", async function () {

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

    it("Should call getDepositBalanceCurrent()", async () => {
        const res = Number((await definer.getDepositBalanceCurrent(Token.DAI, "0xaA817b67d605f45e7759031303b04422734834eD")).toString());
        expect(res).to.equal(0);
    });

    it("Should call getBorrowBalanceCurrent()", async () => {
        const res = Number((await definer.getBorrowBalanceCurrent(Token.DAI, "0xaA817b67d605f45e7759031303b04422734834eD")).toString());
        expect(res).to.equal(0);
    });

    it("Should call userHasAnyDeposit()", async () => {
        const res = await definer.userHasAnyDeposit("0xaA817b67d605f45e7759031303b04422734834eD");
        expect(res).to.equal(false);
    });

    it("Should call getDepositPrincipal()", async () => {
        const res = Number(await definer.getDepositPrincipal(Token.DAI, "0xaA817b67d605f45e7759031303b04422734834eD"));
        expect(res).to.equal(0);
    });

    it("Should call getBorrowPrincipal()", async () => {
        const res = Number(await definer.getBorrowPrincipal(Token.DAI, "0xaA817b67d605f45e7759031303b04422734834eD"));
        expect(res).to.equal(0);
    });

    it("Should call getLastDepositBlock()", async () => {
        const res = Number(await definer.getLastDepositBlock(Token.DAI, "0xaA817b67d605f45e7759031303b04422734834eD"));
        expect(res).to.equal(0);
    });

    it("Should call getLastBorrowBlock()", async () => {
        const res = Number(await definer.getLastBorrowBlock(Token.DAI, "0xaA817b67d605f45e7759031303b04422734834eD"));
        expect(res).to.equal(0);
    });

    it("Should call getDepositInterest()", async () => {
        const res = Number(await definer.getDepositInterest(Token.DAI, "0xaA817b67d605f45e7759031303b04422734834eD"));
        expect(res).to.equal(0);
    });

    it("Should call getBorrowInterest()", async () => {
        const res = Number(await definer.getBorrowInterest(Token.DAI, "0xaA817b67d605f45e7759031303b04422734834eD"));
        expect(res).to.equal(0);
    });

    it("Should call getBorrowPower()", async () => {
        const res = Number(await definer.getBorrowPower("0xaA817b67d605f45e7759031303b04422734834eD"));
        expect(res).to.equal(0);
    });

    it("Should call getBorrowETH()", async () => {
        const res = Number(await definer.getBorrowETH("0xaA817b67d605f45e7759031303b04422734834eD"));
        expect(res).to.equal(0);
    });

    it("Should call getDepositETH()", async () => {
        const res = Number(await definer.getDepositETH("0xaA817b67d605f45e7759031303b04422734834eD"));
        expect(res).to.equal(0);
    });

    it("Should call isAccountLiquidatable()", async () => {
        const res = await definer.isAccountLiquidatable("0xaA817b67d605f45e7759031303b04422734834eD");
        expect(res).to.equal(false);
    });

    it("Should call getTotalDepositStore()", async () => {
        const res = await definer.getTotalDepositStore(Token.DAI);
        console.log("DAI deposit amount is: ", res.toString());
    });

    it("Should call getBorrowRatePerBlock() for DAI", async () => {
        const res = await definer.getBorrowRatePerBlock(Token.DAI);
        console.log("DAI borrow rate per block is: ", res.toString());
    });

    it("Should call getDepositRatePerBlock() for ETH", async () => {
        const res = await definer.getDepositRatePerBlock(Token.ETH);
        console.log("ETH deposit rate per block is: ", res.toString());
    });

    it("Should call getCapitalUtilizationRatio() for USDC", async () => {
        const res = await definer.getCapitalUtilizationRatio(Token.USDC);
        console.log("USDC capitial utilization ratio is: ", res.toString());
    });

    it("Should call getCapitalCompoundRatio() for USDT", async () => {
        const res = await definer.getCapitalCompoundRatio(Token.USDT);
        console.log("USDT capitial compound ratio is: ", res.toString());
    });

    it("Should call getPoolAmount() for ZRX", async () => {
        const res = await definer.getPoolAmount(Token.ZRX);
        console.log("ZRX pool amount is: ", res.toString());
    });

})
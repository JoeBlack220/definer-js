import { Contract } from 'web3-eth-contract';
import { ContractInstance } from './index';
import { idNameMap } from '../constants/network';
import { address } from '../constants/address';
import Web3 from 'web3';

const { BN } = require("@openzeppelin/test-helpers");
const abi = require('../constants/json/abi.json')

export class SavAccInstance extends ContractInstance {

    constructor(web3: Web3) {
        super(web3);
    }

    /**
     * Should be called once before calling getContract().
     * Will throw two kinds of errors:
     * 1. Network not found: The provider use a network that's not supported.
     * 2. SavingAccount contract address not found: The current network doesn't 
     * have a deployed saving account instance.
     */
    public async initialize(): Promise<void> {
        this.networkID = await this.web3.eth.net.getId();
        const networkName: string = idNameMap[this.networkID];

        if (!networkName) {
            throw new Error("Network not found.");
        }

        this.networkName = networkName;

        const contractAddr = address[networkName]["SavingAccountProxy"];

        if (!contractAddr) {
            throw new Error("SavingAccount contract address not found.");
        }

        this.contract = await new this.web3.eth.Contract(abi["SavingAccount"], contractAddr);

    }

    /**
     * The getter for contract attribute.
     */
    public async getContract(): Promise<Contract> {
        if (!this.contract) {
            throw new Error("Contract Instance is not initialized.");
        } else {
            return this.contract;
        }
    }

    /**
     * The function used to call deposit from SavingAccount contract.
     * Will throw an error when the transaction is not successful.
     * 
     * @param tokenName - The token that we want to deposit.
     * @param amount - The deposit amount.
     * @param user - The user address.
     * @param gasPrice - The gas price of the transaction.
     */
    public async deposit(tokenName: string, amount: any, user: string, gasPrice: string): Promise<void> {
        if (!this.contract) {
            throw new Error("Contract Instance is not initialized.");
        } else {
            const tokenAddress = address[this.networkName][tokenName];
            await this.contract.methods.deposit(tokenAddress, amount).send({ from: user, gas: 1000000, gasPrice });
        }
    }

    /** 
     * The function used to call repay from SavingAccount contract.
     * Will throw an error when the transaction is not successful.
     * 
     * @param tokenName - The token that we want to repay.
     * @param amount - The repay amount.
     * @param gasPrice - The gas price of the transaction.
     * @param user - The user address.
     */
    public async repay(tokenName: string, amount: string, gasPrice: string, user: string): Promise<void> {
        if (!this.contract) {
            throw new Error("Contract Instance is not initialized.");
        } else {
            const tokenAddress = address[this.networkName][tokenName];
            await this.contract.methods.repay(tokenAddress, amount).send({ from: user, gas: 2000000, gasPrice });
        }
    }


    /** 
     * The function used to call withdraw from SavingAccount contract.
     * Will throw an error when the transaction is not successful.
     * 
     * @param tokenName - The token that we want to withdraw.
     * @param amount - The withdraw amount.
     * @param gasPrice - The gas price of the transaction.
     * @param user - The user address.
     */
    public async withdraw(tokenName: string, amount: string, gasPrice: string, user: string): Promise<void> {
        if (!this.contract) {
            throw new Error("Contract Instance is not initialized.");
        } else {
            const tokenAddress = address[this.networkName][tokenName];
            await this.contract.methods.withdraw(tokenAddress, amount).send({ from: user, gas: 2000000, gasPrice });
        }
    }

    /** 
     * The function used to call withdraw from SavingAccount contract.
     * Will throw an error when the transaction is not successful.
     * 
     * @param tokenName - The token that we want to withdraw.
     * @param gasPrice - The gas price of the transaction.
     * @param user - The user address.
     */
    public async withdrawAll(tokenName: string, gasPrice: string, user: string): Promise<void> {
        if (!this.contract) {
            throw new Error("Contract Instance is not initialized.");
        } else {
            const tokenAddress = address[this.networkName][tokenName];
            await this.contract.methods.withdrawAll(tokenAddress).send({ from: user, gas: 2000000, gasPrice });
        }
    }

    /**
     * The function used to call borrow from SavingAccount contract.
     * Will throw an error when the transaction is not successful.
     * 
     * @param tokenName - The token that we want to borrow.
     * @param amount - The borrow amount.
     * @param user - The user address.
     * @param gasPrice - The gas price of the transaction.
     */
    public async borrow(tokenName: string, amount: any, user: string, gasPrice: string): Promise<void> {
        if (!this.contract) {
            throw new Error("Contract Instance is not initialized.");
        } else {
            const tokenAddress = address[this.networkName][tokenName];
            await this.contract.methods.borrow(tokenAddress, amount).send({ from: user, gas: 1000000, gasPrice });
        }
    }

    /** 
     * The function used to call withdraw from SavingAccount contract.
     * Will throw an error when the transaction is not successful.
     * 
     * @param tokenName - The token that we want to withdraw.
     * @param amount - The withdraw amount.
     * @param to - The address to transfer to.
     * @param gasPrice - The gas price of the transaction.
     * @param user - The user address.
     */
    public async transfer(tokenName: string, amount: string, to: string, gasPrice: string, user: string): Promise<void> {
        if (!this.contract) {
            throw new Error("Contract Instance is not initialized.");
        } else {
            const tokenAddress = address[this.networkName][tokenName];
            await this.contract.methods.transfer(to, tokenAddress, amount).send({ from: user, gas: 2000000, gasPrice });
        }
    }

    // Todo: Liquidate

} 

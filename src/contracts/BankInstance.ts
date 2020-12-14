import { Contract } from 'web3-eth-contract';
import { ContractInstance } from './ContractInstance';
import { idNameMap } from '../constants/network';
import { address } from '../constants/address';
import Web3 from 'web3';

const abi = require('../../data/json/abi.json')

export class BankInstance extends ContractInstance {

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

        const contractAddr = address[networkName]["BankProxy"];

        if (!contractAddr) {
            throw new Error("Bank contract address not found in the given network.");
        }

        this.contract = await new this.web3.eth.Contract(abi["Bank"], contractAddr);

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
     * The function used to call getTotalDepositStore() from Bank contract.
     * 
     * @param tokenName - The token name we are using.
     * @param user - The user address.
     */
    public async getTotalDepositStore(tokenName: string, user: string): Promise<any> {
        if (!this.contract) {
            throw new Error("Contract Instance is not initialized.");
        } else {
            const tokenAddress = address[this.networkName][tokenName];
            return await this.contract.methods.getTotalDepositStore(tokenAddress).call({ from: user });
        }
    }

    /** 
     * The function used to call getBorrowRatePerBlock() from Bank contract.
     * 
     * @param tokenName - The token name we are using.
     * @param user - The user address.
     */
    public async getBorrowRatePerBlock(tokenName: string, user: string): Promise<any> {
        if (!this.contract) {
            throw new Error("Contract Instance is not initialized.");
        } else {
            const tokenAddress = address[this.networkName][tokenName];
            return await this.contract.methods.getBorrowRatePerBlock(tokenAddress).call({ from: user });
        }
    }

    /** 
     * The function used to call getDepositRatePerBlock() from Bank contract.
     * 
     * @param tokenName - The token name we are using.
     * @param user - The user address.
     */
    public async getDepositRatePerBlock(tokenName: string, user: string): Promise<any> {
        if (!this.contract) {
            throw new Error("Contract Instance is not initialized.");
        } else {
            const tokenAddress = address[this.networkName][tokenName];
            return await this.contract.methods.getDepositRatePerBlock(tokenAddress).call({ from: user });
        }
    }

    /** 
     * The function used to call getCapitalUtilizationRatio() from Bank contract.
     * 
     * @param tokenName - The token name we are using.
     * @param user - The user address.
     */
    public async getCapitalUtilizationRatio(tokenName: string, user: string): Promise<any> {
        if (!this.contract) {
            throw new Error("Contract Instance is not initialized.");
        } else {
            const tokenAddress = address[this.networkName][tokenName];
            return await this.contract.methods.getCapitalUtilizationRatio(tokenAddress).call({ from: user });
        }
    }

    /** 
     * The function used to call getCapitalCompoundRatio() from Bank contract.
     * 
     * @param tokenName - The token name we are using.
     * @param user - The user address.
     */
    public async getCapitalCompoundRatio(tokenName: string, user: string): Promise<any> {
        if (!this.contract) {
            throw new Error("Contract Instance is not initialized.");
        } else {
            const tokenAddress = address[this.networkName][tokenName];
            return await this.contract.methods.getCapitalCompoundRatio(tokenAddress).call({ from: user });
        }
    }

    /** 
     * The function used to call getTokenState() from Bank contract.
     * 
     * @param tokenName - The token name we are using.
     * @param user - The user address.
     */
    public async getTokenState(tokenName: string, user: string): Promise<any> {
        if (!this.contract) {
            throw new Error("Contract Instance is not initialized.");
        } else {
            const tokenAddress = address[this.networkName][tokenName];
            return await this.contract.methods.getTokenState(tokenAddress).call({ from: user });
        }
    }


    /** 
     * The function used to call getPoolAmount() from Bank contract.
     * 
     * @param tokenName - The token name we are using.
     * @param user - The user address.
     */
    public async getPoolAmount(tokenName: string, user: string): Promise<any> {
        if (!this.contract) {
            throw new Error("Contract Instance is not initialized.");
        } else {
            const tokenAddress = address[this.networkName][tokenName];
            return await this.contract.methods.getPoolAmount(tokenAddress).call({ from: user });
        }
    }

} 

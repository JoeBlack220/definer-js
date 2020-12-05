import { Contract } from 'web3-eth-contract';
import { ContractInstance } from './ContractInstance';
import { idNameMap } from '../constants/network';
import { address } from '../constants/address';
import Web3 from 'web3';

const { BN } = require("@openzeppelin/test-helpers");
const abi = require('../constants/json/abi.json')

export class AccountsInstance extends ContractInstance {

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
    async initialize(): Promise<void> {
        this.networkID = await this.web3.eth.net.getId();
        const networkName: string = idNameMap[this.networkID];

        if (!networkName) {
            throw new Error("Network not found.");
        }

        this.networkName = networkName;

        const contractAddr = address[networkName]["AccountsProxy"];

        if (!contractAddr) {
            throw new Error("Bank contract address not found in the given network.");
        }

        this.contract = await new this.web3.eth.Contract(abi["Accounts"], contractAddr);

    }

    /**
     * The getter for contract attribute.
     */
    async getContract(): Promise<Contract> {
        if (!this.contract) {
            throw new Error("Contract Instance is not initialized.");
        } else {
            return this.contract;
        }
    }

    /** 
     * The function used to call isUserHasAnyDeposits() from Accounts contract.
     * 
     * @param user - The user address.
     * @param target - The account you 
     */
    async isUserHasAnyDeposits(user: string, target: string): Promise<any> {
        if (!this.contract) {
            throw new Error("Contract Instance is not initialized.");
        } else {
            return await this.contract.methods.isUserHasAnyDeposits(target).call({ from: user });
        }
    }

    /** 
     * The function used to call getDepositPrincipal() from Accounts contract.
     * 
     * @param tokenName - The token we want to query on.
     * @param user - The user address.
     * @param target - The account you 
     */
    async getDepositPrincipal(tokenName: string, user: string, target: string): Promise<any> {
        if (!this.contract) {
            throw new Error("Contract Instance is not initialized.");
        } else {
            const tokenAddress = address[this.networkName][tokenName];
            return await this.contract.methods.getDepositPrincipal(target, tokenAddress).call({ from: user });
        }
    }

    /** 
     * The function used to call getBorrowPrincipal() from Accounts contract.
     * 
     * @param tokenName - The token we want to query on.
     * @param user - The user address.
     * @param target - The account you 
     */
    async getBorrowPrincipal(tokenName: string, user: string, target: string): Promise<any> {
        if (!this.contract) {
            throw new Error("Contract Instance is not initialized.");
        } else {
            const tokenAddress = address[this.networkName][tokenName];
            return await this.contract.methods.getBorrowPrincipal(target, tokenAddress).call({ from: user });
        }
    }

    /** 
     * The function used to call getLastDepositBlock() from Accounts contract.
     * 
     * @param tokenName - The token we want to query on.
     * @param user - The user address.
     * @param target - The account you 
     */
    async getLastDepositBlock(tokenName: string, user: string, target: string): Promise<any> {
        if (!this.contract) {
            throw new Error("Contract Instance is not initialized.");
        } else {
            const tokenAddress = address[this.networkName][tokenName];
            return await this.contract.methods.getLastDepositBlock(target, tokenAddress).call({ from: user });
        }
    }

    /** 
     * The function used to call getLastBorrowBlock() from Accounts contract.
     * 
     * @param tokenName - The token we want to query on.
     * @param user - The user address.
     * @param target - The account you 
     */
    async getLastBorrowBlock(tokenName: string, user: string, target: string): Promise<any> {
        if (!this.contract) {
            throw new Error("Contract Instance is not initialized.");
        } else {
            const tokenAddress = address[this.networkName][tokenName];
            return await this.contract.methods.getLastBorrowBlock(target, tokenAddress).call({ from: user });
        }
    }

    /** 
     * The function used to call getDepositInterest() from Accounts contract.
     * 
     * @param tokenName - The token we want to query on.
     * @param user - The user address.
     * @param target - The account you 
     */
    async getDepositInterest(tokenName: string, user: string, target: string): Promise<any> {
        if (!this.contract) {
            throw new Error("Contract Instance is not initialized.");
        } else {
            const tokenAddress = address[this.networkName][tokenName];
            return await this.contract.methods.getDepositInterest(target, tokenAddress).call({ from: user });
        }
    }

    /** 
     * The function used to call getBorrowInterest() from Accounts contract.
     * 
     * @param tokenName - The token we want to query on.
     * @param user - The user address.
     * @param target - The account you 
     */
    async getBorrowInterest(tokenName: string, user: string, target: string): Promise<any> {
        if (!this.contract) {
            throw new Error("Contract Instance is not initialized.");
        } else {
            const tokenAddress = address[this.networkName][tokenName];
            return await this.contract.methods.getBorrowInterest(target, tokenAddress).call({ from: user });
        }
    }

    /** 
     * The function used to call getDepositBalanceCurrent() from Accounts contract.
     * 
     * @param tokenName - The token we want to query on.
     * @param user - The user address.
     * @param target - The account you 
     */
    async getDepositBalanceCurrent(tokenName: string, user: string, target: string): Promise<any> {
        if (!this.contract) {
            throw new Error("Contract Instance is not initialized.");
        } else {
            const tokenAddress = address[this.networkName][tokenName];
            return await this.contract.methods.getDepositBalanceCurrent(target, tokenAddress).call({ from: user });
        }
    }

    /** 
     * The function used to call getBorrowBalanceCurrent() from Accounts contract.
     * 
     * @param tokenName - The token we want to query on.
     * @param user - The user address.
     * @param target - The account you 
     */
    async getBorrowBalanceCurrent(tokenName: string, user: string, target: string): Promise<any> {
        if (!this.contract) {
            throw new Error("Contract Instance is not initialized.");
        } else {
            const tokenAddress = address[this.networkName][tokenName];
            return await this.contract.methods.getBorrowBalanceCurrent(target, tokenAddress).call({ from: user });
        }
    }

    /** 
     * The function used to call getBorrowPower() from Accounts contract.
     * 
     * @param user - The user address.
     * @param target - The account you 
     */
    async getBorrowPower(user: string, target: string): Promise<any> {
        if (!this.contract) {
            throw new Error("Contract Instance is not initialized.");
        } else {
            return await this.contract.methods.getBorrowPower(target).call({ from: user });
        }
    }


    /** 
     * The function used to call getDepositETH() from Accounts contract.
     * 
     * @param user - The user address.
     * @param target - The account you 
     */
    async getDepositETH(user: string, target: string): Promise<any> {
        if (!this.contract) {
            throw new Error("Contract Instance is not initialized.");
        } else {
            return await this.contract.methods.getDepositETH(target).call({ from: user });
        }
    }

    /** 
     * The function used to call getBorrowETH() from Accounts contract.
     * 
     * @param user - The user address.
     * @param target - The account you 
     */
    async getBorrowETH(user: string, target: string): Promise<any> {
        if (!this.contract) {
            throw new Error("Contract Instance is not initialized.");
        } else {
            return await this.contract.methods.getBorrowETH(target).call({ from: user });
        }
    }

    /** 
     * The function used to call isAccountLiquidatable()) from Accounts contract.
     * 
     * @param user - The user address.
     * @param target - The account you 
     */
    async isAccountLiquidatable(user: string, target: string): Promise<any> {
        if (!this.contract) {
            throw new Error("Contract Instance is not initialized.");
        } else {
            return await this.contract.methods.isAccountLiquidatable(target).call({ from: user });
        }
    }
} 

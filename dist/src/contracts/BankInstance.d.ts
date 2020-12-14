import { Contract } from 'web3-eth-contract';
import { ContractInstance } from './ContractInstance';
import Web3 from 'web3';
export declare class BankInstance extends ContractInstance {
    constructor(web3: Web3);
    /**
     * Should be called once before calling getContract().
     * Will throw two kinds of errors:
     * 1. Network not found: The provider use a network that's not supported.
     * 2. SavingAccount contract address not found: The current network doesn't
     * have a deployed saving account instance.
     */
    initialize(): Promise<void>;
    /**
     * The getter for contract attribute.
     */
    getContract(): Promise<Contract>;
    /**
     * The function used to call getTotalDepositStore() from Bank contract.
     *
     * @param tokenName - The token name we are using.
     * @param user - The user address.
     */
    getTotalDepositStore(tokenName: string, user: string): Promise<any>;
    /**
     * The function used to call getBorrowRatePerBlock() from Bank contract.
     *
     * @param tokenName - The token name we are using.
     * @param user - The user address.
     */
    getBorrowRatePerBlock(tokenName: string, user: string): Promise<any>;
    /**
     * The function used to call getDepositRatePerBlock() from Bank contract.
     *
     * @param tokenName - The token name we are using.
     * @param user - The user address.
     */
    getDepositRatePerBlock(tokenName: string, user: string): Promise<any>;
    /**
     * The function used to call getCapitalUtilizationRatio() from Bank contract.
     *
     * @param tokenName - The token name we are using.
     * @param user - The user address.
     */
    getCapitalUtilizationRatio(tokenName: string, user: string): Promise<any>;
    /**
     * The function used to call getCapitalCompoundRatio() from Bank contract.
     *
     * @param tokenName - The token name we are using.
     * @param user - The user address.
     */
    getCapitalCompoundRatio(tokenName: string, user: string): Promise<any>;
    /**
     * The function used to call getTokenState() from Bank contract.
     *
     * @param tokenName - The token name we are using.
     * @param user - The user address.
     */
    getTokenState(tokenName: string, user: string): Promise<any>;
    /**
     * The function used to call getPoolAmount() from Bank contract.
     *
     * @param tokenName - The token name we are using.
     * @param user - The user address.
     */
    getPoolAmount(tokenName: string, user: string): Promise<any>;
}

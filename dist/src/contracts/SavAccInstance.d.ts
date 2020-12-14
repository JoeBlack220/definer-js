import { Contract } from 'web3-eth-contract';
import { ContractInstance } from './index';
import Web3 from 'web3';
export declare class SavAccInstance extends ContractInstance {
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
     * The function used to call deposit from SavingAccount contract.
     * Will throw an error when the transaction is not successful.
     *
     * @param tokenName - The token that we want to deposit.
     * @param amount - The deposit amount.
     * @param user - The user address.
     * @param gasPrice - The gas price of the transaction.
     */
    deposit(tokenName: string, amount: any, user: string, gasPrice: string): Promise<void>;
    /**
     * The function used to call repay from SavingAccount contract.
     * Will throw an error when the transaction is not successful.
     *
     * @param tokenName - The token that we want to repay.
     * @param amount - The repay amount.
     * @param gasPrice - The gas price of the transaction.
     * @param user - The user address.
     */
    repay(tokenName: string, amount: string, gasPrice: string, user: string): Promise<void>;
    /**
     * The function used to call withdraw from SavingAccount contract.
     * Will throw an error when the transaction is not successful.
     *
     * @param tokenName - The token that we want to withdraw.
     * @param amount - The withdraw amount.
     * @param gasPrice - The gas price of the transaction.
     * @param user - The user address.
     */
    withdraw(tokenName: string, amount: string, gasPrice: string, user: string): Promise<void>;
    /**
     * The function used to call withdraw from SavingAccount contract.
     * Will throw an error when the transaction is not successful.
     *
     * @param tokenName - The token that we want to withdraw.
     * @param gasPrice - The gas price of the transaction.
     * @param user - The user address.
     */
    withdrawAll(tokenName: string, gasPrice: string, user: string): Promise<void>;
    /**
     * The function used to call borrow from SavingAccount contract.
     * Will throw an error when the transaction is not successful.
     *
     * @param tokenName - The token that we want to borrow.
     * @param amount - The borrow amount.
     * @param user - The user address.
     * @param gasPrice - The gas price of the transaction.
     */
    borrow(tokenName: string, amount: any, user: string, gasPrice: string): Promise<void>;
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
    transfer(tokenName: string, amount: string, to: string, gasPrice: string, user: string): Promise<void>;
}

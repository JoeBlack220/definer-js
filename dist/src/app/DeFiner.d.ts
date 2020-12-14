import Web3 from 'web3';
import { Token } from '../constants';
import { API } from '../lib';
export { Token } from '../constants';
export declare class DeFiner {
    API: API;
    private web3;
    private contractInstanceStore?;
    private account?;
    constructor(web3: Web3);
    /**
     * Used to initialize contractInstanceStore field.
     */
    initialize(): Promise<void>;
    /**
     * Call deposit of SavingAccount Contract.
     * @param amount : The amount that the user wants to deposit.
     */
    deposit(token: Token, amount: any): Promise<void>;
    /**
     * Call borrow of SavingAccount Contract.
     * @param amount : The amount that the user wants to borrow.
     */
    borrow(token: Token, amount: any): Promise<void>;
    /**
     * Call repay of SavingAccount Contract.
     * @param amount : The amount that the user wants to repay
     */
    repay(token: Token, amount: any): Promise<void>;
    /**
     * Call withdraw of SavingAccount Contract.
     * @param amount : The amount that the user wants to withdraw.
     */
    withdraw(token: Token, amount: any): Promise<void>;
    /**
     * Call withdrawAll of SavingAccount Contract.
     */
    withdrawAll(token: Token): Promise<void>;
    /**
     * Call isUserHasAnyDeposit on Accounts contract.
     * @param target - The account address that you want to query on.
     */
    userHasAnyDeposit(target: string): Promise<any>;
    /**
     * Call getDepositPrincipal on Accounts contract.
     * @param token - The token you want to query on.
     * @param target - The account address of the target account.
     */
    getDepositPrincipal(token: Token, target: string): Promise<any>;
    /**
     * Call getBorrowPrincipal on Accounts contract.
     * @param token - The token you want to query on.
     * @param target - The account address of the target account.
     */
    getBorrowPrincipal(token: Token, target: string): Promise<any>;
    /**
     * Call getLastDepositBlock on Accounts contract.
     * Get the block height that the target deposit this kind of token to DeFiner.
     * @param token - The token you want to query on.
     * @param target - The account address of the target account.
     */
    getLastDepositBlock(token: Token, target: string): Promise<any>;
    /**
     * Call getLastBorrowBlock on Accounts contract.
     * Get the block height that the target borrow this kind of token to DeFiner.
     * @param token - The token you want to query on.
     * @param target - The account address of the target account.
     */
    getLastBorrowBlock(token: Token, target: string): Promise<any>;
    /**
     * Call getDepositInterest on Accounts contract.
     * Get deposit interest between this block and last deposit block of the current user.
     * @param token - The token you want to query on.
     * @param target - The account address of the target account.
     */
    getDepositInterest(token: Token, target: string): Promise<any>;
    /**
     * Call getBorrowtInterest on Accounts contract.
     * Get borrow interest between this block and last borrow block of the current user.
     * @param token - The token you want to query on.
     * @param target - The account address of the target account.
     */
    getBorrowInterest(token: Token, target: string): Promise<any>;
    /**
     * Call getDepositBalanceCurrent on Accounts contract.
     * Get the total deposit balance at this block (principal + interests)
     * @param token - The token you want to query on.
     * @param target - The account address of the target account.
     */
    getDepositBalanceCurrent(token: Token, target: string): Promise<any>;
    /**
     * Call getBorrowBalanceCurrent on Accounts contract.
     * Get the total borrow balance at this block (principal + interests)
     * @param token - The token you want to query on.
     * @param target - The account address of the target account.
     */
    getBorrowBalanceCurrent(token: Token, target: string): Promise<any>;
    /**
     * Call getBorrowPower on Accounts contract.
     * Get the borrow power in ETH wei unit.
     * @param target - The account address of the target account.
     */
    getBorrowPower(target: string): Promise<any>;
    /**
     * Call getBorrowETH on Accounts contract.
     * Get the borrowed asser value in ETH wei unit.
     * @param target - The account address of the target account.
     */
    getBorrowETH(target: string): Promise<any>;
    /**
     * Call getDepositETH on Accounts contract.
     * Get the deposited asser value in ETH wei unit.
     * @param target - The account address of the target account.
     */
    getDepositETH(target: string): Promise<any>;
    /**
     * Call isAccountLiquidatable on Accounts contract.
     * Get the liquidatable status of a target account.
     * @param target - The account address of the target account.
     */
    isAccountLiquidatable(target: string): Promise<any>;
    /**
     * Call getTotalDepositStore() on Bank contract.
     * @param token - The token that we want to query on.
     */
    getTotalDepositStore(token: Token): Promise<any>;
    /**
     * Call getBorrowRatePerBlock() on Bank contract.
     * @param token - The token that we want to query on.
     */
    getBorrowRatePerBlock(token: Token): Promise<any>;
    /**
     * Call getDepositRatePerBlock() on Bank contract.
     * @param token - The token that we want to query on.
     */
    getDepositRatePerBlock(token: Token): Promise<any>;
    /**
     * Call getCapitalUtilizationRatio() on Bank contract.
     * @param token - The token that we want to query on.
     */
    getCapitalUtilizationRatio(token: Token): Promise<any>;
    /**
     * Call getCapitalCompoundRatio() on Bank contract.
     * @param token - The token that we want to query on.
     */
    getCapitalCompoundRatio(token: Token): Promise<any>;
    /**
     * Call getDepositRatePerBlock() on Bank contract.
     * @param token - The token that we want to query on.
     */
    getTokenState(token: Token): Promise<any>;
    /**
     * Call getPoolAmount() on Bank contract.
     * @param token - The token that we want to query on.
     */
    getPoolAmount(token: Token): Promise<any>;
    /**
     * Helper function to get the SavingAccount contract.
     */
    private getSavContract;
    /**
     * Helper function to get the Accounts contract.
     */
    private getAccountsContract;
    /**
     * Helper function to get the Bank contract.
     */
    private getBankContract;
    /**
     * Get the token name given the enum
     * @param token : The token in enum.
     */
    getTokenName(token: Token): string;
}

import { Contract } from 'web3-eth-contract';
import { ContractInstance } from './index';
import Web3 from 'web3';
export declare class AccountsInstance extends ContractInstance {
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
     * The function used to call isUserHasAnyDeposits() from Accounts contract.
     *
     * @param user - The user address.
     * @param target - The account you
     */
    userHasAnyDeposits(user: string, target: string): Promise<any>;
    /**
     * The function used to call getDepositPrincipal() from Accounts contract.
     *
     * @param tokenName - The token we want to query on.
     * @param user - The user address.
     * @param target - The account you
     */
    getDepositPrincipal(tokenName: string, user: string, target: string): Promise<any>;
    /**
     * The function used to call getBorrowPrincipal() from Accounts contract.
     *
     * @param tokenName - The token we want to query on.
     * @param user - The user address.
     * @param target - The account you
     */
    getBorrowPrincipal(tokenName: string, user: string, target: string): Promise<any>;
    /**
     * The function used to call getLastDepositBlock() from Accounts contract.
     *
     * @param tokenName - The token we want to query on.
     * @param user - The user address.
     * @param target - The account you
     */
    getLastDepositBlock(tokenName: string, user: string, target: string): Promise<any>;
    /**
     * The function used to call getLastBorrowBlock() from Accounts contract.
     *
     * @param tokenName - The token we want to query on.
     * @param user - The user address.
     * @param target - The account you
     */
    getLastBorrowBlock(tokenName: string, user: string, target: string): Promise<any>;
    /**
     * The function used to call getDepositInterest() from Accounts contract.
     *
     * @param tokenName - The token we want to query on.
     * @param user - The user address.
     * @param target - The account you
     */
    getDepositInterest(tokenName: string, user: string, target: string): Promise<any>;
    /**
     * The function used to call getBorrowInterest() from Accounts contract.
     *
     * @param tokenName - The token we want to query on.
     * @param user - The user address.
     * @param target - The account you
     */
    getBorrowInterest(tokenName: string, user: string, target: string): Promise<any>;
    /**
     * The function used to call getDepositBalanceCurrent() from Accounts contract.
     *
     * @param tokenName - The token we want to query on.
     * @param user - The user address.
     * @param target - The account you
     */
    getDepositBalanceCurrent(tokenName: string, user: string, target: string): Promise<any>;
    /**
     * The function used to call getBorrowBalanceCurrent() from Accounts contract.
     *
     * @param tokenName - The token we want to query on.
     * @param user - The user address.
     * @param target - The account you
     */
    getBorrowBalanceCurrent(tokenName: string, user: string, target: string): Promise<any>;
    /**
     * The function used to call getBorrowPower() from Accounts contract.
     *
     * @param user - The user address.
     * @param target - The account you
     */
    getBorrowPower(user: string, target: string): Promise<any>;
    /**
     * The function used to call getDepositETH() from Accounts contract.
     *
     * @param user - The user address.
     * @param target - The account you
     */
    getDepositETH(user: string, target: string): Promise<any>;
    /**
     * The function used to call getBorrowETH() from Accounts contract.
     *
     * @param user - The user address.
     * @param target - The account you
     */
    getBorrowETH(user: string, target: string): Promise<any>;
    /**
     * The function used to call isAccountLiquidatable()) from Accounts contract.
     *
     * @param user - The user address.
     * @param target - The account you
     */
    isAccountLiquidatable(user: string, target: string): Promise<any>;
}

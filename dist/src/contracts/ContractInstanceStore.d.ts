import { BankInstance, SavAccInstance, AccountsInstance } from './index';
import Web3 from 'web3';
export declare class ContractInstanceStore {
    private savAccInstance?;
    private bankInstance?;
    private accountsInstance?;
    private web3;
    constructor(web3: Web3);
    /**
     * Used to initialize all three wrapper contracts.
     */
    initialize(): Promise<void>;
    /**
     * Used to get the Bank contract wrapper.
     */
    getBankInstance(): Promise<BankInstance>;
    /**
     * Used to get the Bank contract wrapper.
     */
    getAccountsInstance(): Promise<AccountsInstance>;
    /**
     * Used to get the Bank contract wrapper.
     */
    getSavAccInstance(): Promise<SavAccInstance>;
}

import { Contract } from 'web3-eth-contract';
import { BankInstance, SavAccInstance, AccountsInstance } from './index';
import Web3 from 'web3';


export class ContractInstanceStore {

    private savAccInstance?: SavAccInstance;
    private bankInstance?: BankInstance;
    private accountsInstance?: AccountsInstance;
    private web3: Web3;

    constructor(web3: Web3) {
        this.web3 = web3;
    }

    /**
     * Used to initialize all three wrapper contracts.
     */
    public async initialize(): Promise<void> {

        this.savAccInstance = new SavAccInstance(this.web3);
        this.bankInstance = new BankInstance(this.web3);
        this.accountsInstance = new AccountsInstance(this.web3);

        await this.savAccInstance.initialize();
        await this.bankInstance.initialize();
        await this.accountsInstance.initialize();
    }

    /**
     * Used to get the Bank contract wrapper.
     */
    public async getBankInstance(): Promise<BankInstance> {
        if (!this.bankInstance) {
            await this.initialize();
            if (this.bankInstance) return this.bankInstance;
            else throw new Error("The Bank contract can't be initialized.");
        } else {
            return this.bankInstance;
        }
    }

    /**
     * Used to get the Bank contract wrapper.
     */
    public async getAccountsInstance(): Promise<AccountsInstance> {
        if (!this.accountsInstance) {
            await this.initialize();
            if (this.accountsInstance) return this.accountsInstance;
            else throw new Error("The Bank contract can't be initialized.");
        } else {
            return this.accountsInstance;
        }
    }

    /**
     * Used to get the Bank contract wrapper.
     */
    public async getSavAccInstance(): Promise<SavAccInstance> {
        if (!this.savAccInstance) {
            await this.initialize();
            if (this.savAccInstance) return this.savAccInstance;
            else throw new Error("The Bank contract can't be initialized.");
        } else {
            return this.savAccInstance;
        }
    }


}
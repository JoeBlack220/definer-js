import { ContractInstanceStore, SavAccInstance } from '../contracts';
import Web3 from 'web3';
import { Token, tokenNameMap } from '../constants';
import { GasPriceStore } from '../lib';
export { Token } from '../constants';

export class DeFiner {

    private web3: Web3;
    private contractInstanceStore?: ContractInstanceStore;
    private account?: string;

    constructor(web3: Web3) {
        this.web3 = web3;
    }

    /**
     * Used to initialize contractInstanceStore field.
     */
    public async initialize(): Promise<void> {
        if (!this.contractInstanceStore) {
            this.contractInstanceStore = new ContractInstanceStore(this.web3);
            await this.contractInstanceStore.initialize();
        }
        this.account = (await this.web3.eth.getAccounts())[0];
    }

    /**
     * Call deposit of SavingAccount Contract.
     * @param amount : The amount that the user wants to deposit.
     */
    public async deposit(token: Token, amount: any): Promise<void> {
        const savAccInstance = await this.getSavContract();

        if (!this.account) {
            throw new Error("No account in the provider.");
        }

        const tokenName = this.getTokenName(token);

        const gasPrice = await GasPriceStore.getInstance().getPrice();
        await savAccInstance.deposit(tokenName, amount, this.account, gasPrice);

    }


    /**
     * Call borrow of SavingAccount Contract.
     * @param amount : The amount that the user wants to borrow.
     */
    public async borrow(token: Token, amount: any): Promise<void> {
        const savAccInstance = await this.getSavContract();

        if (!this.account) {
            throw new Error("No account in the provider.");
        }

        const tokenName = this.getTokenName(token);

        const gasPrice = await GasPriceStore.getInstance().getPrice();
        await savAccInstance.borrow(tokenName, amount, this.account, gasPrice);

    }

    /**
     * Call repay of SavingAccount Contract.
     * @param amount : The amount that the user wants to repay
     */
    public async repay(token: Token, amount: any): Promise<void> {

        const savAccInstance = await this.getSavContract();

        if (!this.account) {
            throw new Error("No account in the provider.");
        }

        const tokenName = this.getTokenName(token);

        const gasPrice = await GasPriceStore.getInstance().getPrice();
        await savAccInstance.repay(tokenName, amount, this.account, gasPrice);

    }

    /**
     * Call withdraw of SavingAccount Contract.
     * @param amount : The amount that the user wants to withdraw.
     */
    public async withdraw(token: Token, amount: any): Promise<void> {

        const savAccInstance = await this.getSavContract();

        if (!this.account) {
            throw new Error("No account in the provider.");
        }

        const tokenName = this.getTokenName(token);

        const gasPrice = await GasPriceStore.getInstance().getPrice();
        await savAccInstance.withdraw(tokenName, amount, this.account, gasPrice);

    }

    /**
     * Call withdrawAll of SavingAccount Contract.
     */
    public async withdrawAll(token: Token, amount: any): Promise<void> {

        const savAccInstance = await this.getSavContract();

        if (!this.account) {
            throw new Error("No account in the provider.");
        }

        const tokenName = this.getTokenName(token);

        const gasPrice = await GasPriceStore.getInstance().getPrice();
        await savAccInstance.withdrawAll(tokenName, this.account, gasPrice);

    }

    private async getSavContract(): Promise<SavAccInstance> {

        if (!this.contractInstanceStore) {
            await this.initialize();
        }

        if (!this.contractInstanceStore) {
            throw new Error("ContractInstanceStore can't be intialized.");
        }

        const savAccInstance = await this.contractInstanceStore.getSavAccInstance();
        return savAccInstance;
    }

    private getTokenName(token: Token) {
        const tokenName = tokenNameMap.get(token);

        if (!tokenName) {
            throw new Error("Token doesn't exist");
        }

        return tokenName;
    }
}
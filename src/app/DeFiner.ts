import { ContractInstanceStore, SavAccInstance, AccountsInstance, BankInstance } from '../contracts';
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
    public async withdrawAll(token: Token): Promise<void> {

        const savAccInstance = await this.getSavContract();

        if (!this.account) {
            throw new Error("No account in the provider.");
        }

        const tokenName = this.getTokenName(token);

        const gasPrice = await GasPriceStore.getInstance().getPrice();
        await savAccInstance.withdrawAll(tokenName, this.account, gasPrice);

    }

    /**
     * Call isUserHasAnyDeposit on Accounts contract.
     * @param target - The account address that you want to query on.
     */
    public async userHasAnyDeposit(target: string) {

        const accountsInstance = await this.getAccountsContract();

        if (!this.account) {
            throw new Error("No account in the provider.");
        }

        return await accountsInstance.userHasAnyDeposits(this.account, target);

    }

    /**
     * Call getDepositPrincipal on Accounts contract.
     * @param token - The token you want to query on.
     * @param target - The account address of the target account.
     */
    public async getDepositPrincipal(token: Token, target: string) {

        const accountsInstance = await this.getAccountsContract();

        if (!this.account) {
            throw new Error("No account in the provider.");
        }

        const tokenName = this.getTokenName(token);

        return await accountsInstance.getDepositPrincipal(tokenName, this.account, target);
    }

    /**
     * Call getBorrowPrincipal on Accounts contract.
     * @param token - The token you want to query on.
     * @param target - The account address of the target account.
     */
    public async getBorrowPrincipal(token: Token, target: string) {

        const accountsInstance = await this.getAccountsContract();

        if (!this.account) {
            throw new Error("No account in the provider.");
        }

        const tokenName = this.getTokenName(token);

        return await accountsInstance.getBorrowPrincipal(tokenName, this.account, target);
    }

    /**
     * Call getLastDepositBlock on Accounts contract.
     * Get the block height that the target deposit this kind of token to DeFiner.
     * @param token - The token you want to query on.
     * @param target - The account address of the target account.
     */
    public async getLastDepositBlock(token: Token, target: string) {

        const accountsInstance = await this.getAccountsContract();

        if (!this.account) {
            throw new Error("No account in the provider.");
        }

        const tokenName = this.getTokenName(token);

        return await accountsInstance.getLastDepositBlock(tokenName, this.account, target);
    }

    /**
     * Call getLastBorrowBlock on Accounts contract.
     * Get the block height that the target borrow this kind of token to DeFiner.
     * @param token - The token you want to query on.
     * @param target - The account address of the target account.
     */
    public async getLastBorrowBlock(token: Token, target: string) {

        const accountsInstance = await this.getAccountsContract();

        if (!this.account) {
            throw new Error("No account in the provider.");
        }

        const tokenName = this.getTokenName(token);

        return await accountsInstance.getLastBorrowBlock(tokenName, this.account, target);
    }

    /**
     * Call getDepositInterest on Accounts contract.
     * Get deposit interest between this block and last deposit block of the current user.
     * @param token - The token you want to query on.
     * @param target - The account address of the target account.
     */
    public async getDepositInterest(token: Token, target: string) {

        const accountsInstance = await this.getAccountsContract();

        if (!this.account) {
            throw new Error("No account in the provider.");
        }

        const tokenName = this.getTokenName(token);

        return await accountsInstance.getDepositInterest(tokenName, this.account, target);
    }

    /**
     * Call getBorrowtInterest on Accounts contract.
     * Get borrow interest between this block and last borrow block of the current user.
     * @param token - The token you want to query on.
     * @param target - The account address of the target account.
     */
    public async getBorrowInterest(token: Token, target: string) {

        const accountsInstance = await this.getAccountsContract();

        if (!this.account) {
            throw new Error("No account in the provider.");
        }

        const tokenName = this.getTokenName(token);

        return await accountsInstance.getBorrowInterest(tokenName, this.account, target);
    }

    /**
     * Call getDepositBalanceCurrent on Accounts contract.
     * Get the total deposit balance at this block (principal + interests)
     * @param token - The token you want to query on.
     * @param target - The account address of the target account.
     */
    public async getDepositBalanceCurrent(token: Token, target: string) {

        const accountsInstance = await this.getAccountsContract();

        if (!this.account) {
            throw new Error("No account in the provider.");
        }

        const tokenName = this.getTokenName(token);

        return await accountsInstance.getDepositBalanceCurrent(tokenName, this.account, target);
    }

    /**
     * Call getBorrowBalanceCurrent on Accounts contract.
     * Get the total borrow balance at this block (principal + interests)
     * @param token - The token you want to query on.
     * @param target - The account address of the target account.
     */
    public async getBorrowBalanceCurrent(token: Token, target: string) {

        const accountsInstance = await this.getAccountsContract();

        if (!this.account) {
            throw new Error("No account in the provider.");
        }

        const tokenName = this.getTokenName(token);

        return await accountsInstance.getBorrowBalanceCurrent(tokenName, this.account, target);
    }

    /**
     * Call getBorrowPower on Accounts contract.
     * Get the borrow power in ETH wei unit.
     * @param target - The account address of the target account.
     */
    public async getBorrowPower(target: string) {

        const accountsInstance = await this.getAccountsContract();

        if (!this.account) {
            throw new Error("No account in the provider.");
        }

        return await accountsInstance.getBorrowPower(this.account, target);
    }

    /**
     * Call getBorrowETH on Accounts contract.
     * Get the borrowed asser value in ETH wei unit.
     * @param target - The account address of the target account.
     */
    public async getBorrowETH(target: string) {

        const accountsInstance = await this.getAccountsContract();

        if (!this.account) {
            throw new Error("No account in the provider.");
        }

        return await accountsInstance.getBorrowETH(this.account, target);
    }

    /**
     * Call getDepositETH on Accounts contract.
     * Get the deposited asser value in ETH wei unit.
     * @param target - The account address of the target account.
     */
    public async getDepositETH(target: string) {

        const accountsInstance = await this.getAccountsContract();

        if (!this.account) {
            throw new Error("No account in the provider.");
        }

        return await accountsInstance.getDepositETH(this.account, target);
    }

    /**
     * Call isAccountLiquidatable on Accounts contract.
     * Get the liquidatable status of a target account.
     * @param target - The account address of the target account.
     */
    public async isAccountLiquidatable(target: string) {

        const accountsInstance = await this.getAccountsContract();

        if (!this.account) {
            throw new Error("No account in the provider.");
        }

        return await accountsInstance.isAccountLiquidatable(this.account, target);
    }


    /**
     * Helper function to get the SavingAccount contract.
     */
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

    /**
     * Helper function to get the Accounts contract.
     */
    private async getAccountsContract(): Promise<AccountsInstance> {
        if (!this.contractInstanceStore) {
            await this.initialize();
        }

        if (!this.contractInstanceStore) {
            throw new Error("ContractInstanceStore can't be intialized.");
        }

        const accountsInstance = await this.contractInstanceStore.getAccountsInstance();

        return accountsInstance;
    }

    /**
     * Helper function to get the Bank contract.
     */
    private async getBankContract(): Promise<BankInstance> {
        if (!this.contractInstanceStore) {
            await this.initialize();
        }

        if (!this.contractInstanceStore) {
            throw new Error("ContractInstanceStore can't be intialized.");
        }

        const bankInstance = await this.contractInstanceStore.getBankInstance();

        return bankInstance;
    }

    /**
     * Get the token name given the enum
     * @param token : The token in enum.
     */
    private getTokenName(token: Token) {
        const tokenName = tokenNameMap.get(token);

        if (!tokenName) {
            throw new Error("Token doesn't exist");
        }

        return tokenName;
    }




}
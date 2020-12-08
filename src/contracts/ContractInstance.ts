import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';

export abstract class ContractInstance {

    protected contract?: Contract;
    protected web3: Web3;
    protected networkID: number = 0;
    protected networkName: string = "";

    constructor(web3: Web3) {
        this.web3 = web3;
    }

    abstract initialize(): Promise<void>;
    abstract getContract(): Promise<Contract>;

}
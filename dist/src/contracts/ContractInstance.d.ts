import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';
export declare abstract class ContractInstance {
    protected contract?: Contract;
    protected web3: Web3;
    protected networkID: number;
    protected networkName: string;
    constructor(web3: Web3);
    abstract initialize(): Promise<void>;
    abstract getContract(): Promise<Contract>;
}

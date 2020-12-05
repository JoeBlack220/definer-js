import { AbiItem } from 'web3-utils';

export interface ObjectLiteralNum {
    [key: number]: any;
}

export interface ObjectLiteralStr {
    [key: string]: any;
}

export interface ObjectLiteralAbi {
    [key: string]: AbiItem;
}
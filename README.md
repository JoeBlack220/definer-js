# definer-js
Javascript SDK for definer protocols

## Overview
This is the SDK that can be used in javascript or typescript project. Developers can use it to as a wrapper to interact with DeFiner's protocl on the mainnet and also can be used to interact with the backend API to get the statistical data from DeFiner.

## Installation
Just use npm to install this DeFiner SDK:
```bash
npm i definer-js
```

## Usage
- First we need to import DeFiner class from the package: `import { DeFiner } from 'definer-js'`
- Create a new DeFiner class: `const definer = new DeFiner(web3);`
  - Here `web3` is created through Web3 library(https://web3js.readthedocs.io/en/v1.3.0/).
- Initialize the definer object, it will create all the contract instances for you: `await definer.initialize();`
- Interact with the contract: `await definer.getBorrowBalanceCurrent(Token.DAI, TheAccountYouWantToQuery);`
- Interact with the backend API: `await definer.API.statusAssests(TheAccountYouWantToQuery);`
- When interacting with the contract on mainnet, it uses the average gas price that get from:https://docs.ethgasstation.info/
- Currently, it only supports interacting with the contracts on mainnet, but in the future we will provide more options.


## APIs
- deposit(token: Token, amount: any): Deposit an amount of token to DeFiner.
- borrow(token: Token, amount: any): Borrow an amount of token from DeFiner.
- repay(token: Token, amount: any): Repay an amount of token to DeFiner.
- withdraw(token: Token, amount: any): Withdraw an amount of token from DeFiner.
- withdrawAll(token: Token): Withdraw all tokens from DeFiner.
- userHasAnyDeposit(target: string): Check whether the target user has deposits in DeFiner or not.
- getDepositPrincipal(token: Token, target: string): Get the deposit principal of a specific token of the target user since last deposit.
- getBorrowPrincipal(token: Token, target: string): Get the borrow principal of a specific token of the target user since last borrow.
- getLastDepositBlock(token: Token, target: string): Get the last deposit block of the target user.
- getLastBorrowBlock(token: Token, target: string): Get the last borrow block of the target user.
- getDepositInterest(token: Token, target: string): Get the deposit interest since last deposit block to now.
- getBorrowInterest(token: Token, target: string): Get the borrow interest since last deposit block to now.
- getDepositBalanceCurrent(token: Token, target: string): Get the total deposit balance(interests + principal) of a target user.
- getBorrowBalanceCurrent(token: Token, target: string): Get the total borrow balance(interests + principal) of a target user.
- getBorrowPower(target: string): Get the borrow power of a target user. This means how much value of asset that one account can borrow given its deposits value. The returned value's unit is ETH wei.
- getBorrowETH(target: string): Get the total borrowed asset value of the target account in ETH wei.
- getDepositETH(target: string): Get the total deposited asset value of the target account in ETH wei.
- isAccountLiquidatable(target: string): Check the liquidatable status of an account.
- getTotalDepositStore(token: Token): Get the total deposit amount of a specific token in DeFiner.
- getBorrowRatePerBlock(token: Token): Get the current borrow rate per block.
- getDepositRatePerBlock(token: Token): Get the current deposit rate per block.
- getCapitalUtilizationRatio(token: Token): Get the current utilization ratio of DeFiner.
- getCapitalCompoundRatio(token: Token): Get the current Compound ratio of DeFiner.
- getPoolAmount(token: Token): Get the total amount of a specific token that is still in DeFiner.

The documentation about the stat API is not completed yet.









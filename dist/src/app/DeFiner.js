"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeFiner = void 0;
var contracts_1 = require("../contracts");
var constants_1 = require("../constants");
var lib_1 = require("../lib");
var lib_2 = require("../lib");
var constants_2 = require("../constants");
Object.defineProperty(exports, "Token", { enumerable: true, get: function () { return constants_2.Token; } });
var DeFiner = /** @class */ (function () {
    function DeFiner(web3) {
        this.API = new lib_2.API();
        this.web3 = web3;
    }
    /**
     * Used to initialize contractInstanceStore field.
     */
    DeFiner.prototype.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!this.contractInstanceStore) return [3 /*break*/, 2];
                        this.contractInstanceStore = new contracts_1.ContractInstanceStore(this.web3);
                        return [4 /*yield*/, this.contractInstanceStore.initialize()];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2:
                        _a = this;
                        return [4 /*yield*/, this.web3.eth.getAccounts()];
                    case 3:
                        _a.account = (_b.sent())[0];
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Call deposit of SavingAccount Contract.
     * @param amount : The amount that the user wants to deposit.
     */
    DeFiner.prototype.deposit = function (token, amount) {
        return __awaiter(this, void 0, void 0, function () {
            var savAccInstance, tokenName, gasPrice;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSavContract()];
                    case 1:
                        savAccInstance = _a.sent();
                        if (!this.account) {
                            throw new Error("No account in the provider.");
                        }
                        tokenName = this.getTokenName(token);
                        return [4 /*yield*/, lib_1.GasPriceStore.getInstance().getPrice()];
                    case 2:
                        gasPrice = _a.sent();
                        return [4 /*yield*/, savAccInstance.deposit(tokenName, amount, this.account, gasPrice)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Call borrow of SavingAccount Contract.
     * @param amount : The amount that the user wants to borrow.
     */
    DeFiner.prototype.borrow = function (token, amount) {
        return __awaiter(this, void 0, void 0, function () {
            var savAccInstance, tokenName, gasPrice;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSavContract()];
                    case 1:
                        savAccInstance = _a.sent();
                        if (!this.account) {
                            throw new Error("No account in the provider.");
                        }
                        tokenName = this.getTokenName(token);
                        return [4 /*yield*/, lib_1.GasPriceStore.getInstance().getPrice()];
                    case 2:
                        gasPrice = _a.sent();
                        return [4 /*yield*/, savAccInstance.borrow(tokenName, amount, this.account, gasPrice)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Call repay of SavingAccount Contract.
     * @param amount : The amount that the user wants to repay
     */
    DeFiner.prototype.repay = function (token, amount) {
        return __awaiter(this, void 0, void 0, function () {
            var savAccInstance, tokenName, gasPrice;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSavContract()];
                    case 1:
                        savAccInstance = _a.sent();
                        if (!this.account) {
                            throw new Error("No account in the provider.");
                        }
                        tokenName = this.getTokenName(token);
                        return [4 /*yield*/, lib_1.GasPriceStore.getInstance().getPrice()];
                    case 2:
                        gasPrice = _a.sent();
                        return [4 /*yield*/, savAccInstance.repay(tokenName, amount, this.account, gasPrice)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Call withdraw of SavingAccount Contract.
     * @param amount : The amount that the user wants to withdraw.
     */
    DeFiner.prototype.withdraw = function (token, amount) {
        return __awaiter(this, void 0, void 0, function () {
            var savAccInstance, tokenName, gasPrice;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSavContract()];
                    case 1:
                        savAccInstance = _a.sent();
                        if (!this.account) {
                            throw new Error("No account in the provider.");
                        }
                        tokenName = this.getTokenName(token);
                        return [4 /*yield*/, lib_1.GasPriceStore.getInstance().getPrice()];
                    case 2:
                        gasPrice = _a.sent();
                        return [4 /*yield*/, savAccInstance.withdraw(tokenName, amount, this.account, gasPrice)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Call withdrawAll of SavingAccount Contract.
     */
    DeFiner.prototype.withdrawAll = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var savAccInstance, tokenName, gasPrice;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSavContract()];
                    case 1:
                        savAccInstance = _a.sent();
                        if (!this.account) {
                            throw new Error("No account in the provider.");
                        }
                        tokenName = this.getTokenName(token);
                        return [4 /*yield*/, lib_1.GasPriceStore.getInstance().getPrice()];
                    case 2:
                        gasPrice = _a.sent();
                        return [4 /*yield*/, savAccInstance.withdrawAll(tokenName, this.account, gasPrice)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Call isUserHasAnyDeposit on Accounts contract.
     * @param target - The account address that you want to query on.
     */
    DeFiner.prototype.userHasAnyDeposit = function (target) {
        return __awaiter(this, void 0, void 0, function () {
            var accountsInstance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccountsContract()];
                    case 1:
                        accountsInstance = _a.sent();
                        if (!this.account) {
                            throw new Error("No account in the provider.");
                        }
                        return [4 /*yield*/, accountsInstance.userHasAnyDeposits(this.account, target)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Call getDepositPrincipal on Accounts contract.
     * @param token - The token you want to query on.
     * @param target - The account address of the target account.
     */
    DeFiner.prototype.getDepositPrincipal = function (token, target) {
        return __awaiter(this, void 0, void 0, function () {
            var accountsInstance, tokenName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccountsContract()];
                    case 1:
                        accountsInstance = _a.sent();
                        if (!this.account) {
                            throw new Error("No account in the provider.");
                        }
                        tokenName = this.getTokenName(token);
                        return [4 /*yield*/, accountsInstance.getDepositPrincipal(tokenName, this.account, target)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Call getBorrowPrincipal on Accounts contract.
     * @param token - The token you want to query on.
     * @param target - The account address of the target account.
     */
    DeFiner.prototype.getBorrowPrincipal = function (token, target) {
        return __awaiter(this, void 0, void 0, function () {
            var accountsInstance, tokenName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccountsContract()];
                    case 1:
                        accountsInstance = _a.sent();
                        if (!this.account) {
                            throw new Error("No account in the provider.");
                        }
                        tokenName = this.getTokenName(token);
                        return [4 /*yield*/, accountsInstance.getBorrowPrincipal(tokenName, this.account, target)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Call getLastDepositBlock on Accounts contract.
     * Get the block height that the target deposit this kind of token to DeFiner.
     * @param token - The token you want to query on.
     * @param target - The account address of the target account.
     */
    DeFiner.prototype.getLastDepositBlock = function (token, target) {
        return __awaiter(this, void 0, void 0, function () {
            var accountsInstance, tokenName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccountsContract()];
                    case 1:
                        accountsInstance = _a.sent();
                        if (!this.account) {
                            throw new Error("No account in the provider.");
                        }
                        tokenName = this.getTokenName(token);
                        return [4 /*yield*/, accountsInstance.getLastDepositBlock(tokenName, this.account, target)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Call getLastBorrowBlock on Accounts contract.
     * Get the block height that the target borrow this kind of token to DeFiner.
     * @param token - The token you want to query on.
     * @param target - The account address of the target account.
     */
    DeFiner.prototype.getLastBorrowBlock = function (token, target) {
        return __awaiter(this, void 0, void 0, function () {
            var accountsInstance, tokenName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccountsContract()];
                    case 1:
                        accountsInstance = _a.sent();
                        if (!this.account) {
                            throw new Error("No account in the provider.");
                        }
                        tokenName = this.getTokenName(token);
                        return [4 /*yield*/, accountsInstance.getLastBorrowBlock(tokenName, this.account, target)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Call getDepositInterest on Accounts contract.
     * Get deposit interest between this block and last deposit block of the current user.
     * @param token - The token you want to query on.
     * @param target - The account address of the target account.
     */
    DeFiner.prototype.getDepositInterest = function (token, target) {
        return __awaiter(this, void 0, void 0, function () {
            var accountsInstance, tokenName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccountsContract()];
                    case 1:
                        accountsInstance = _a.sent();
                        if (!this.account) {
                            throw new Error("No account in the provider.");
                        }
                        tokenName = this.getTokenName(token);
                        return [4 /*yield*/, accountsInstance.getDepositInterest(tokenName, this.account, target)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Call getBorrowtInterest on Accounts contract.
     * Get borrow interest between this block and last borrow block of the current user.
     * @param token - The token you want to query on.
     * @param target - The account address of the target account.
     */
    DeFiner.prototype.getBorrowInterest = function (token, target) {
        return __awaiter(this, void 0, void 0, function () {
            var accountsInstance, tokenName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccountsContract()];
                    case 1:
                        accountsInstance = _a.sent();
                        if (!this.account) {
                            throw new Error("No account in the provider.");
                        }
                        tokenName = this.getTokenName(token);
                        return [4 /*yield*/, accountsInstance.getBorrowInterest(tokenName, this.account, target)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Call getDepositBalanceCurrent on Accounts contract.
     * Get the total deposit balance at this block (principal + interests)
     * @param token - The token you want to query on.
     * @param target - The account address of the target account.
     */
    DeFiner.prototype.getDepositBalanceCurrent = function (token, target) {
        return __awaiter(this, void 0, void 0, function () {
            var accountsInstance, tokenName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccountsContract()];
                    case 1:
                        accountsInstance = _a.sent();
                        if (!this.account) {
                            throw new Error("No account in the provider.");
                        }
                        tokenName = this.getTokenName(token);
                        return [4 /*yield*/, accountsInstance.getDepositBalanceCurrent(tokenName, this.account, target)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Call getBorrowBalanceCurrent on Accounts contract.
     * Get the total borrow balance at this block (principal + interests)
     * @param token - The token you want to query on.
     * @param target - The account address of the target account.
     */
    DeFiner.prototype.getBorrowBalanceCurrent = function (token, target) {
        return __awaiter(this, void 0, void 0, function () {
            var accountsInstance, tokenName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccountsContract()];
                    case 1:
                        accountsInstance = _a.sent();
                        if (!this.account) {
                            throw new Error("No account in the provider.");
                        }
                        tokenName = this.getTokenName(token);
                        return [4 /*yield*/, accountsInstance.getBorrowBalanceCurrent(tokenName, this.account, target)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Call getBorrowPower on Accounts contract.
     * Get the borrow power in ETH wei unit.
     * @param target - The account address of the target account.
     */
    DeFiner.prototype.getBorrowPower = function (target) {
        return __awaiter(this, void 0, void 0, function () {
            var accountsInstance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccountsContract()];
                    case 1:
                        accountsInstance = _a.sent();
                        if (!this.account) {
                            throw new Error("No account in the provider.");
                        }
                        return [4 /*yield*/, accountsInstance.getBorrowPower(this.account, target)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Call getBorrowETH on Accounts contract.
     * Get the borrowed asser value in ETH wei unit.
     * @param target - The account address of the target account.
     */
    DeFiner.prototype.getBorrowETH = function (target) {
        return __awaiter(this, void 0, void 0, function () {
            var accountsInstance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccountsContract()];
                    case 1:
                        accountsInstance = _a.sent();
                        if (!this.account) {
                            throw new Error("No account in the provider.");
                        }
                        return [4 /*yield*/, accountsInstance.getBorrowETH(this.account, target)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Call getDepositETH on Accounts contract.
     * Get the deposited asser value in ETH wei unit.
     * @param target - The account address of the target account.
     */
    DeFiner.prototype.getDepositETH = function (target) {
        return __awaiter(this, void 0, void 0, function () {
            var accountsInstance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccountsContract()];
                    case 1:
                        accountsInstance = _a.sent();
                        if (!this.account) {
                            throw new Error("No account in the provider.");
                        }
                        return [4 /*yield*/, accountsInstance.getDepositETH(this.account, target)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Call isAccountLiquidatable on Accounts contract.
     * Get the liquidatable status of a target account.
     * @param target - The account address of the target account.
     */
    DeFiner.prototype.isAccountLiquidatable = function (target) {
        return __awaiter(this, void 0, void 0, function () {
            var accountsInstance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccountsContract()];
                    case 1:
                        accountsInstance = _a.sent();
                        if (!this.account) {
                            throw new Error("No account in the provider.");
                        }
                        return [4 /*yield*/, accountsInstance.isAccountLiquidatable(this.account, target)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Call getTotalDepositStore() on Bank contract.
     * @param token - The token that we want to query on.
     */
    DeFiner.prototype.getTotalDepositStore = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var bankInstance, tokenName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getBankContract()];
                    case 1:
                        bankInstance = _a.sent();
                        if (!this.account) {
                            throw new Error("No account in the provider.");
                        }
                        tokenName = this.getTokenName(token);
                        return [4 /*yield*/, bankInstance.getTotalDepositStore(tokenName, this.account)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Call getBorrowRatePerBlock() on Bank contract.
     * @param token - The token that we want to query on.
     */
    DeFiner.prototype.getBorrowRatePerBlock = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var bankInstance, tokenName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getBankContract()];
                    case 1:
                        bankInstance = _a.sent();
                        if (!this.account) {
                            throw new Error("No account in the provider.");
                        }
                        tokenName = this.getTokenName(token);
                        return [4 /*yield*/, bankInstance.getBorrowRatePerBlock(tokenName, this.account)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Call getDepositRatePerBlock() on Bank contract.
     * @param token - The token that we want to query on.
     */
    DeFiner.prototype.getDepositRatePerBlock = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var bankInstance, tokenName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getBankContract()];
                    case 1:
                        bankInstance = _a.sent();
                        if (!this.account) {
                            throw new Error("No account in the provider.");
                        }
                        tokenName = this.getTokenName(token);
                        return [4 /*yield*/, bankInstance.getDepositRatePerBlock(tokenName, this.account)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Call getCapitalUtilizationRatio() on Bank contract.
     * @param token - The token that we want to query on.
     */
    DeFiner.prototype.getCapitalUtilizationRatio = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var bankInstance, tokenName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getBankContract()];
                    case 1:
                        bankInstance = _a.sent();
                        if (!this.account) {
                            throw new Error("No account in the provider.");
                        }
                        tokenName = this.getTokenName(token);
                        return [4 /*yield*/, bankInstance.getCapitalUtilizationRatio(tokenName, this.account)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Call getCapitalCompoundRatio() on Bank contract.
     * @param token - The token that we want to query on.
     */
    DeFiner.prototype.getCapitalCompoundRatio = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var bankInstance, tokenName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getBankContract()];
                    case 1:
                        bankInstance = _a.sent();
                        if (!this.account) {
                            throw new Error("No account in the provider.");
                        }
                        tokenName = this.getTokenName(token);
                        return [4 /*yield*/, bankInstance.getCapitalCompoundRatio(tokenName, this.account)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Call getDepositRatePerBlock() on Bank contract.
     * @param token - The token that we want to query on.
     */
    DeFiner.prototype.getTokenState = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var bankInstance, tokenName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getBankContract()];
                    case 1:
                        bankInstance = _a.sent();
                        if (!this.account) {
                            throw new Error("No account in the provider.");
                        }
                        tokenName = this.getTokenName(token);
                        return [4 /*yield*/, bankInstance.getTokenState(tokenName, this.account)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Call getPoolAmount() on Bank contract.
     * @param token - The token that we want to query on.
     */
    DeFiner.prototype.getPoolAmount = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var bankInstance, tokenName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getBankContract()];
                    case 1:
                        bankInstance = _a.sent();
                        if (!this.account) {
                            throw new Error("No account in the provider.");
                        }
                        tokenName = this.getTokenName(token);
                        return [4 /*yield*/, bankInstance.getPoolAmount(tokenName, this.account)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Helper function to get the SavingAccount contract.
     */
    DeFiner.prototype.getSavContract = function () {
        return __awaiter(this, void 0, void 0, function () {
            var savAccInstance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.contractInstanceStore) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.initialize()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!this.contractInstanceStore) {
                            throw new Error("ContractInstanceStore can't be intialized.");
                        }
                        return [4 /*yield*/, this.contractInstanceStore.getSavAccInstance()];
                    case 3:
                        savAccInstance = _a.sent();
                        return [2 /*return*/, savAccInstance];
                }
            });
        });
    };
    /**
     * Helper function to get the Accounts contract.
     */
    DeFiner.prototype.getAccountsContract = function () {
        return __awaiter(this, void 0, void 0, function () {
            var accountsInstance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.contractInstanceStore) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.initialize()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!this.contractInstanceStore) {
                            throw new Error("ContractInstanceStore can't be intialized.");
                        }
                        return [4 /*yield*/, this.contractInstanceStore.getAccountsInstance()];
                    case 3:
                        accountsInstance = _a.sent();
                        return [2 /*return*/, accountsInstance];
                }
            });
        });
    };
    /**
     * Helper function to get the Bank contract.
     */
    DeFiner.prototype.getBankContract = function () {
        return __awaiter(this, void 0, void 0, function () {
            var bankInstance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.contractInstanceStore) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.initialize()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!this.contractInstanceStore) {
                            throw new Error("ContractInstanceStore can't be intialized.");
                        }
                        return [4 /*yield*/, this.contractInstanceStore.getBankInstance()];
                    case 3:
                        bankInstance = _a.sent();
                        return [2 /*return*/, bankInstance];
                }
            });
        });
    };
    /**
     * Get the token name given the enum
     * @param token : The token in enum.
     */
    DeFiner.prototype.getTokenName = function (token) {
        var tokenName = constants_1.tokenNameMap.get(token);
        if (!tokenName) {
            throw new Error("Token doesn't exist");
        }
        return tokenName;
    };
    return DeFiner;
}());
exports.DeFiner = DeFiner;

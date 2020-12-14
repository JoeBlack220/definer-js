"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.AccountsInstance = void 0;
var index_1 = require("./index");
var network_1 = require("../constants/network");
var address_1 = require("../constants/address");
var BN = require("@openzeppelin/test-helpers").BN;
var abi = require('../../data/json/abi.json');
var AccountsInstance = /** @class */ (function (_super) {
    __extends(AccountsInstance, _super);
    function AccountsInstance(web3) {
        return _super.call(this, web3) || this;
    }
    /**
     * Should be called once before calling getContract().
     * Will throw two kinds of errors:
     * 1. Network not found: The provider use a network that's not supported.
     * 2. SavingAccount contract address not found: The current network doesn't
     * have a deployed saving account instance.
     */
    AccountsInstance.prototype.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, networkName, contractAddr, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.web3.eth.net.getId()];
                    case 1:
                        _a.networkID = _c.sent();
                        networkName = network_1.idNameMap[this.networkID];
                        if (!networkName) {
                            throw new Error("Network not found.");
                        }
                        this.networkName = networkName;
                        contractAddr = address_1.address[networkName]["AccountsProxy"];
                        if (!contractAddr) {
                            throw new Error("Bank contract address not found in the given network.");
                        }
                        _b = this;
                        return [4 /*yield*/, new this.web3.eth.Contract(abi["Accounts"], contractAddr)];
                    case 2:
                        _b.contract = _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * The getter for contract attribute.
     */
    AccountsInstance.prototype.getContract = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.contract) {
                    throw new Error("Contract Instance is not initialized.");
                }
                else {
                    return [2 /*return*/, this.contract];
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * The function used to call isUserHasAnyDeposits() from Accounts contract.
     *
     * @param user - The user address.
     * @param target - The account you
     */
    AccountsInstance.prototype.userHasAnyDeposits = function (user, target) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.contract) return [3 /*break*/, 1];
                        throw new Error("Contract Instance is not initialized.");
                    case 1: return [4 /*yield*/, this.contract.methods.isUserHasAnyDeposits(target).call({ from: user })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * The function used to call getDepositPrincipal() from Accounts contract.
     *
     * @param tokenName - The token we want to query on.
     * @param user - The user address.
     * @param target - The account you
     */
    AccountsInstance.prototype.getDepositPrincipal = function (tokenName, user, target) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenAddress;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.contract) return [3 /*break*/, 1];
                        throw new Error("Contract Instance is not initialized.");
                    case 1:
                        tokenAddress = address_1.address[this.networkName][tokenName];
                        return [4 /*yield*/, this.contract.methods.getDepositPrincipal(target, tokenAddress).call({ from: user })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * The function used to call getBorrowPrincipal() from Accounts contract.
     *
     * @param tokenName - The token we want to query on.
     * @param user - The user address.
     * @param target - The account you
     */
    AccountsInstance.prototype.getBorrowPrincipal = function (tokenName, user, target) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenAddress;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.contract) return [3 /*break*/, 1];
                        throw new Error("Contract Instance is not initialized.");
                    case 1:
                        tokenAddress = address_1.address[this.networkName][tokenName];
                        return [4 /*yield*/, this.contract.methods.getBorrowPrincipal(target, tokenAddress).call({ from: user })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * The function used to call getLastDepositBlock() from Accounts contract.
     *
     * @param tokenName - The token we want to query on.
     * @param user - The user address.
     * @param target - The account you
     */
    AccountsInstance.prototype.getLastDepositBlock = function (tokenName, user, target) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenAddress;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.contract) return [3 /*break*/, 1];
                        throw new Error("Contract Instance is not initialized.");
                    case 1:
                        tokenAddress = address_1.address[this.networkName][tokenName];
                        return [4 /*yield*/, this.contract.methods.getLastDepositBlock(target, tokenAddress).call({ from: user })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * The function used to call getLastBorrowBlock() from Accounts contract.
     *
     * @param tokenName - The token we want to query on.
     * @param user - The user address.
     * @param target - The account you
     */
    AccountsInstance.prototype.getLastBorrowBlock = function (tokenName, user, target) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenAddress;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.contract) return [3 /*break*/, 1];
                        throw new Error("Contract Instance is not initialized.");
                    case 1:
                        tokenAddress = address_1.address[this.networkName][tokenName];
                        return [4 /*yield*/, this.contract.methods.getLastBorrowBlock(target, tokenAddress).call({ from: user })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * The function used to call getDepositInterest() from Accounts contract.
     *
     * @param tokenName - The token we want to query on.
     * @param user - The user address.
     * @param target - The account you
     */
    AccountsInstance.prototype.getDepositInterest = function (tokenName, user, target) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenAddress;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.contract) return [3 /*break*/, 1];
                        throw new Error("Contract Instance is not initialized.");
                    case 1:
                        tokenAddress = address_1.address[this.networkName][tokenName];
                        return [4 /*yield*/, this.contract.methods.getDepositInterest(target, tokenAddress).call({ from: user })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * The function used to call getBorrowInterest() from Accounts contract.
     *
     * @param tokenName - The token we want to query on.
     * @param user - The user address.
     * @param target - The account you
     */
    AccountsInstance.prototype.getBorrowInterest = function (tokenName, user, target) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenAddress;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.contract) return [3 /*break*/, 1];
                        throw new Error("Contract Instance is not initialized.");
                    case 1:
                        tokenAddress = address_1.address[this.networkName][tokenName];
                        return [4 /*yield*/, this.contract.methods.getBorrowInterest(target, tokenAddress).call({ from: user })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * The function used to call getDepositBalanceCurrent() from Accounts contract.
     *
     * @param tokenName - The token we want to query on.
     * @param user - The user address.
     * @param target - The account you
     */
    AccountsInstance.prototype.getDepositBalanceCurrent = function (tokenName, user, target) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenAddress;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.contract) return [3 /*break*/, 1];
                        throw new Error("Contract Instance is not initialized.");
                    case 1:
                        tokenAddress = address_1.address[this.networkName][tokenName];
                        return [4 /*yield*/, this.contract.methods.getDepositBalanceCurrent(target, tokenAddress).call({ from: user })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * The function used to call getBorrowBalanceCurrent() from Accounts contract.
     *
     * @param tokenName - The token we want to query on.
     * @param user - The user address.
     * @param target - The account you
     */
    AccountsInstance.prototype.getBorrowBalanceCurrent = function (tokenName, user, target) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenAddress;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.contract) return [3 /*break*/, 1];
                        throw new Error("Contract Instance is not initialized.");
                    case 1:
                        tokenAddress = address_1.address[this.networkName][tokenName];
                        return [4 /*yield*/, this.contract.methods.getBorrowBalanceCurrent(target, tokenAddress).call({ from: user })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * The function used to call getBorrowPower() from Accounts contract.
     *
     * @param user - The user address.
     * @param target - The account you
     */
    AccountsInstance.prototype.getBorrowPower = function (user, target) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.contract) return [3 /*break*/, 1];
                        throw new Error("Contract Instance is not initialized.");
                    case 1: return [4 /*yield*/, this.contract.methods.getBorrowPower(target).call({ from: user })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * The function used to call getDepositETH() from Accounts contract.
     *
     * @param user - The user address.
     * @param target - The account you
     */
    AccountsInstance.prototype.getDepositETH = function (user, target) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.contract) return [3 /*break*/, 1];
                        throw new Error("Contract Instance is not initialized.");
                    case 1: return [4 /*yield*/, this.contract.methods.getDepositETH(target).call({ from: user })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * The function used to call getBorrowETH() from Accounts contract.
     *
     * @param user - The user address.
     * @param target - The account you
     */
    AccountsInstance.prototype.getBorrowETH = function (user, target) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.contract) return [3 /*break*/, 1];
                        throw new Error("Contract Instance is not initialized.");
                    case 1: return [4 /*yield*/, this.contract.methods.getBorrowETH(target).call({ from: user })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * The function used to call isAccountLiquidatable()) from Accounts contract.
     *
     * @param user - The user address.
     * @param target - The account you
     */
    AccountsInstance.prototype.isAccountLiquidatable = function (user, target) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.contract) return [3 /*break*/, 1];
                        throw new Error("Contract Instance is not initialized.");
                    case 1: return [4 /*yield*/, this.contract.methods.isAccountLiquidatable(target).call({ from: user })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return AccountsInstance;
}(index_1.ContractInstance));
exports.AccountsInstance = AccountsInstance;

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
exports.SavAccInstance = void 0;
var index_1 = require("./index");
var network_1 = require("../constants/network");
var address_1 = require("../constants/address");
var BN = require("@openzeppelin/test-helpers").BN;
var abi = require('../../data/json/abi.json');
var SavAccInstance = /** @class */ (function (_super) {
    __extends(SavAccInstance, _super);
    function SavAccInstance(web3) {
        return _super.call(this, web3) || this;
    }
    /**
     * Should be called once before calling getContract().
     * Will throw two kinds of errors:
     * 1. Network not found: The provider use a network that's not supported.
     * 2. SavingAccount contract address not found: The current network doesn't
     * have a deployed saving account instance.
     */
    SavAccInstance.prototype.initialize = function () {
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
                        contractAddr = address_1.address[networkName]["SavingAccountProxy"];
                        if (!contractAddr) {
                            throw new Error("SavingAccount contract address not found.");
                        }
                        _b = this;
                        return [4 /*yield*/, new this.web3.eth.Contract(abi["SavingAccount"], contractAddr)];
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
    SavAccInstance.prototype.getContract = function () {
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
     * The function used to call deposit from SavingAccount contract.
     * Will throw an error when the transaction is not successful.
     *
     * @param tokenName - The token that we want to deposit.
     * @param amount - The deposit amount.
     * @param user - The user address.
     * @param gasPrice - The gas price of the transaction.
     */
    SavAccInstance.prototype.deposit = function (tokenName, amount, user, gasPrice) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenAddress;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.contract) return [3 /*break*/, 1];
                        throw new Error("Contract Instance is not initialized.");
                    case 1:
                        tokenAddress = address_1.address[this.networkName][tokenName];
                        return [4 /*yield*/, this.contract.methods.deposit(tokenAddress, amount).send({ from: user, gas: 1000000, gasPrice: gasPrice })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * The function used to call repay from SavingAccount contract.
     * Will throw an error when the transaction is not successful.
     *
     * @param tokenName - The token that we want to repay.
     * @param amount - The repay amount.
     * @param gasPrice - The gas price of the transaction.
     * @param user - The user address.
     */
    SavAccInstance.prototype.repay = function (tokenName, amount, gasPrice, user) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenAddress;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.contract) return [3 /*break*/, 1];
                        throw new Error("Contract Instance is not initialized.");
                    case 1:
                        tokenAddress = address_1.address[this.networkName][tokenName];
                        return [4 /*yield*/, this.contract.methods.repay(tokenAddress, amount).send({ from: user, gas: 2000000, gasPrice: gasPrice })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * The function used to call withdraw from SavingAccount contract.
     * Will throw an error when the transaction is not successful.
     *
     * @param tokenName - The token that we want to withdraw.
     * @param amount - The withdraw amount.
     * @param gasPrice - The gas price of the transaction.
     * @param user - The user address.
     */
    SavAccInstance.prototype.withdraw = function (tokenName, amount, gasPrice, user) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenAddress;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.contract) return [3 /*break*/, 1];
                        throw new Error("Contract Instance is not initialized.");
                    case 1:
                        tokenAddress = address_1.address[this.networkName][tokenName];
                        return [4 /*yield*/, this.contract.methods.withdraw(tokenAddress, amount).send({ from: user, gas: 2000000, gasPrice: gasPrice })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * The function used to call withdraw from SavingAccount contract.
     * Will throw an error when the transaction is not successful.
     *
     * @param tokenName - The token that we want to withdraw.
     * @param gasPrice - The gas price of the transaction.
     * @param user - The user address.
     */
    SavAccInstance.prototype.withdrawAll = function (tokenName, gasPrice, user) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenAddress;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.contract) return [3 /*break*/, 1];
                        throw new Error("Contract Instance is not initialized.");
                    case 1:
                        tokenAddress = address_1.address[this.networkName][tokenName];
                        return [4 /*yield*/, this.contract.methods.withdrawAll(tokenAddress).send({ from: user, gas: 2000000, gasPrice: gasPrice })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * The function used to call borrow from SavingAccount contract.
     * Will throw an error when the transaction is not successful.
     *
     * @param tokenName - The token that we want to borrow.
     * @param amount - The borrow amount.
     * @param user - The user address.
     * @param gasPrice - The gas price of the transaction.
     */
    SavAccInstance.prototype.borrow = function (tokenName, amount, user, gasPrice) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenAddress;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.contract) return [3 /*break*/, 1];
                        throw new Error("Contract Instance is not initialized.");
                    case 1:
                        tokenAddress = address_1.address[this.networkName][tokenName];
                        return [4 /*yield*/, this.contract.methods.borrow(tokenAddress, amount).send({ from: user, gas: 1000000, gasPrice: gasPrice })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * The function used to call withdraw from SavingAccount contract.
     * Will throw an error when the transaction is not successful.
     *
     * @param tokenName - The token that we want to withdraw.
     * @param amount - The withdraw amount.
     * @param to - The address to transfer to.
     * @param gasPrice - The gas price of the transaction.
     * @param user - The user address.
     */
    SavAccInstance.prototype.transfer = function (tokenName, amount, to, gasPrice, user) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenAddress;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.contract) return [3 /*break*/, 1];
                        throw new Error("Contract Instance is not initialized.");
                    case 1:
                        tokenAddress = address_1.address[this.networkName][tokenName];
                        return [4 /*yield*/, this.contract.methods.transfer(to, tokenAddress, amount).send({ from: user, gas: 2000000, gasPrice: gasPrice })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return SavAccInstance;
}(index_1.ContractInstance));
exports.SavAccInstance = SavAccInstance;

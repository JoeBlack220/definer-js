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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var web3_1 = __importDefault(require("web3"));
var DeFiner_1 = require("../../src/app/DeFiner");
var constants_1 = require("../../src/constants");
var PrivateKeyProvider = require("truffle-privatekey-provider");
var BN = require("@openzeppelin/test-helpers").BN;
describe("Contract API tests", function () {
    return __awaiter(this, void 0, void 0, function () {
        var provider, web3, definer;
        var _this = this;
        return __generator(this, function (_a) {
            this.timeout(0);
            provider = new PrivateKeyProvider("850bdc51011cbc33bd72592e494b0127d7755d468a501f50161d96c9a7f4c640", "https://mainnet.infura.io/v3/ea620a48fe584d2297be56bde9d5b451");
            web3 = new web3_1.default(provider);
            definer = new DeFiner_1.DeFiner(web3);
            before(function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this.timeout(0);
                                return [4 /*yield*/, definer.initialize()];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                });
            });
            it("Should call getDepositBalanceCurrent()", function () { return __awaiter(_this, void 0, void 0, function () {
                var res, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = Number;
                            return [4 /*yield*/, definer.getDepositBalanceCurrent(constants_1.Token.DAI, "0xaA817b67d605f45e7759031303b04422734834eD")];
                        case 1:
                            res = _a.apply(void 0, [(_b.sent()).toString()]);
                            chai_1.expect(res).to.equal(0);
                            return [2 /*return*/];
                    }
                });
            }); });
            it("Should call getBorrowBalanceCurrent()", function () { return __awaiter(_this, void 0, void 0, function () {
                var res, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = Number;
                            return [4 /*yield*/, definer.getBorrowBalanceCurrent(constants_1.Token.DAI, "0xaA817b67d605f45e7759031303b04422734834eD")];
                        case 1:
                            res = _a.apply(void 0, [(_b.sent()).toString()]);
                            chai_1.expect(res).to.equal(0);
                            return [2 /*return*/];
                    }
                });
            }); });
            it("Should call userHasAnyDeposit()", function () { return __awaiter(_this, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, definer.userHasAnyDeposit("0xaA817b67d605f45e7759031303b04422734834eD")];
                        case 1:
                            res = _a.sent();
                            chai_1.expect(res).to.equal(false);
                            return [2 /*return*/];
                    }
                });
            }); });
            it("Should call getDepositPrincipal()", function () { return __awaiter(_this, void 0, void 0, function () {
                var res, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = Number;
                            return [4 /*yield*/, definer.getDepositPrincipal(constants_1.Token.DAI, "0xaA817b67d605f45e7759031303b04422734834eD")];
                        case 1:
                            res = _a.apply(void 0, [_b.sent()]);
                            chai_1.expect(res).to.equal(0);
                            return [2 /*return*/];
                    }
                });
            }); });
            it("Should call getBorrowPrincipal()", function () { return __awaiter(_this, void 0, void 0, function () {
                var res, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = Number;
                            return [4 /*yield*/, definer.getBorrowPrincipal(constants_1.Token.DAI, "0xaA817b67d605f45e7759031303b04422734834eD")];
                        case 1:
                            res = _a.apply(void 0, [_b.sent()]);
                            chai_1.expect(res).to.equal(0);
                            return [2 /*return*/];
                    }
                });
            }); });
            it("Should call getLastDepositBlock()", function () { return __awaiter(_this, void 0, void 0, function () {
                var res, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = Number;
                            return [4 /*yield*/, definer.getLastDepositBlock(constants_1.Token.DAI, "0xaA817b67d605f45e7759031303b04422734834eD")];
                        case 1:
                            res = _a.apply(void 0, [_b.sent()]);
                            chai_1.expect(res).to.equal(0);
                            return [2 /*return*/];
                    }
                });
            }); });
            it("Should call getLastBorrowBlock()", function () { return __awaiter(_this, void 0, void 0, function () {
                var res, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = Number;
                            return [4 /*yield*/, definer.getLastBorrowBlock(constants_1.Token.DAI, "0xaA817b67d605f45e7759031303b04422734834eD")];
                        case 1:
                            res = _a.apply(void 0, [_b.sent()]);
                            chai_1.expect(res).to.equal(0);
                            return [2 /*return*/];
                    }
                });
            }); });
            it("Should call getDepositInterest()", function () { return __awaiter(_this, void 0, void 0, function () {
                var res, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = Number;
                            return [4 /*yield*/, definer.getDepositInterest(constants_1.Token.DAI, "0xaA817b67d605f45e7759031303b04422734834eD")];
                        case 1:
                            res = _a.apply(void 0, [_b.sent()]);
                            chai_1.expect(res).to.equal(0);
                            return [2 /*return*/];
                    }
                });
            }); });
            it("Should call getBorrowInterest()", function () { return __awaiter(_this, void 0, void 0, function () {
                var res, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = Number;
                            return [4 /*yield*/, definer.getBorrowInterest(constants_1.Token.DAI, "0xaA817b67d605f45e7759031303b04422734834eD")];
                        case 1:
                            res = _a.apply(void 0, [_b.sent()]);
                            chai_1.expect(res).to.equal(0);
                            return [2 /*return*/];
                    }
                });
            }); });
            it("Should call getBorrowPower()", function () { return __awaiter(_this, void 0, void 0, function () {
                var res, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = Number;
                            return [4 /*yield*/, definer.getBorrowPower("0xaA817b67d605f45e7759031303b04422734834eD")];
                        case 1:
                            res = _a.apply(void 0, [_b.sent()]);
                            chai_1.expect(res).to.equal(0);
                            return [2 /*return*/];
                    }
                });
            }); });
            it("Should call getBorrowETH()", function () { return __awaiter(_this, void 0, void 0, function () {
                var res, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = Number;
                            return [4 /*yield*/, definer.getBorrowETH("0xaA817b67d605f45e7759031303b04422734834eD")];
                        case 1:
                            res = _a.apply(void 0, [_b.sent()]);
                            chai_1.expect(res).to.equal(0);
                            return [2 /*return*/];
                    }
                });
            }); });
            it("Should call getDepositETH()", function () { return __awaiter(_this, void 0, void 0, function () {
                var res, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = Number;
                            return [4 /*yield*/, definer.getDepositETH("0xaA817b67d605f45e7759031303b04422734834eD")];
                        case 1:
                            res = _a.apply(void 0, [_b.sent()]);
                            chai_1.expect(res).to.equal(0);
                            return [2 /*return*/];
                    }
                });
            }); });
            it("Should call isAccountLiquidatable()", function () { return __awaiter(_this, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, definer.isAccountLiquidatable("0xaA817b67d605f45e7759031303b04422734834eD")];
                        case 1:
                            res = _a.sent();
                            chai_1.expect(res).to.equal(false);
                            return [2 /*return*/];
                    }
                });
            }); });
            it("Should call getTotalDepositStore()", function () { return __awaiter(_this, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, definer.getTotalDepositStore(constants_1.Token.DAI)];
                        case 1:
                            res = _a.sent();
                            console.log("DAI deposit amount is: ", res.toString());
                            return [2 /*return*/];
                    }
                });
            }); });
            it("Should call getBorrowRatePerBlock() for DAI", function () { return __awaiter(_this, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, definer.getBorrowRatePerBlock(constants_1.Token.DAI)];
                        case 1:
                            res = _a.sent();
                            console.log("DAI borrow rate per block is: ", res.toString());
                            return [2 /*return*/];
                    }
                });
            }); });
            it("Should call getDepositRatePerBlock() for ETH", function () { return __awaiter(_this, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, definer.getDepositRatePerBlock(constants_1.Token.ETH)];
                        case 1:
                            res = _a.sent();
                            console.log("ETH deposit rate per block is: ", res.toString());
                            return [2 /*return*/];
                    }
                });
            }); });
            it("Should call getCapitalUtilizationRatio() for USDC", function () { return __awaiter(_this, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, definer.getCapitalUtilizationRatio(constants_1.Token.USDC)];
                        case 1:
                            res = _a.sent();
                            console.log("USDC capitial utilization ratio is: ", res.toString());
                            return [2 /*return*/];
                    }
                });
            }); });
            it("Should call getCapitalCompoundRatio() for USDT", function () { return __awaiter(_this, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, definer.getCapitalCompoundRatio(constants_1.Token.USDT)];
                        case 1:
                            res = _a.sent();
                            console.log("USDT capitial compound ratio is: ", res.toString());
                            return [2 /*return*/];
                    }
                });
            }); });
            it("Should call getPoolAmount() for ZRX", function () { return __awaiter(_this, void 0, void 0, function () {
                var res;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, definer.getPoolAmount(constants_1.Token.ZRX)];
                        case 1:
                            res = _a.sent();
                            console.log("ZRX pool amount is: ", res.toString());
                            return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/];
        });
    });
});

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
exports.ContractInstanceStore = void 0;
var index_1 = require("./index");
var ContractInstanceStore = /** @class */ (function () {
    function ContractInstanceStore(web3) {
        this.web3 = web3;
    }
    /**
     * Used to initialize all three wrapper contracts.
     */
    ContractInstanceStore.prototype.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.savAccInstance = new index_1.SavAccInstance(this.web3);
                        this.bankInstance = new index_1.BankInstance(this.web3);
                        this.accountsInstance = new index_1.AccountsInstance(this.web3);
                        return [4 /*yield*/, this.savAccInstance.initialize()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.bankInstance.initialize()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.accountsInstance.initialize()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Used to get the Bank contract wrapper.
     */
    ContractInstanceStore.prototype.getBankInstance = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.bankInstance) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.initialize()];
                    case 1:
                        _a.sent();
                        if (this.bankInstance)
                            return [2 /*return*/, this.bankInstance];
                        else
                            throw new Error("The Bank contract can't be initialized.");
                        return [3 /*break*/, 3];
                    case 2: return [2 /*return*/, this.bankInstance];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Used to get the Bank contract wrapper.
     */
    ContractInstanceStore.prototype.getAccountsInstance = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.accountsInstance) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.initialize()];
                    case 1:
                        _a.sent();
                        if (this.accountsInstance)
                            return [2 /*return*/, this.accountsInstance];
                        else
                            throw new Error("The Bank contract can't be initialized.");
                        return [3 /*break*/, 3];
                    case 2: return [2 /*return*/, this.accountsInstance];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Used to get the Bank contract wrapper.
     */
    ContractInstanceStore.prototype.getSavAccInstance = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.savAccInstance) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.initialize()];
                    case 1:
                        _a.sent();
                        if (this.savAccInstance)
                            return [2 /*return*/, this.savAccInstance];
                        else
                            throw new Error("The Bank contract can't be initialized.");
                        return [3 /*break*/, 3];
                    case 2: return [2 /*return*/, this.savAccInstance];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return ContractInstanceStore;
}());
exports.ContractInstanceStore = ContractInstanceStore;

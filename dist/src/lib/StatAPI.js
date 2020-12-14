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
exports.API = void 0;
var axios_1 = __importDefault(require("axios"));
var api = require('../constants/json/api.json');
var API = /** @class */ (function () {
    function API() {
        this.CN_URL = "https://stat.definer.cn";
        this.ORG_URL = "https://stat.definer.org";
    }
    API.prototype.statusAssests = function (userAddress, unit) {
        if (unit === void 0) { unit = "ETH"; }
        return __awaiter(this, void 0, void 0, function () {
            var route, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        route = api["status_assests"];
                        return [4 /*yield*/, axios_1.default.get("" + this.CN_URL + route, { params: { eth_address: userAddress, unit: unit } })];
                    case 1:
                        res = _a.sent();
                        this.handleError(res);
                        return [2 /*return*/, res.data];
                }
            });
        });
    };
    API.prototype.balances = function (userAddress, tokenAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var route, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        route = api["balances"];
                        return [4 /*yield*/, axios_1.default.get("" + this.CN_URL + route, { params: { eth_address: userAddress, token_address: tokenAddress } })];
                    case 1:
                        res = _a.sent();
                        this.handleError(res);
                        return [2 /*return*/, res.data];
                }
            });
        });
    };
    API.prototype.ltv = function (userAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var route, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        route = api["ltv"];
                        return [4 /*yield*/, axios_1.default.get("" + this.CN_URL + route, { params: { eth_address: userAddress } })];
                    case 1:
                        res = _a.sent();
                        this.handleError(res);
                        return [2 /*return*/, res.data];
                }
            });
        });
    };
    API.prototype.balanceLog = function (userAddress, tokenAddress, limit) {
        return __awaiter(this, void 0, void 0, function () {
            var route, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        route = api["balance_log"];
                        return [4 /*yield*/, axios_1.default.get("" + this.CN_URL + route, { params: { eth_address: userAddress, token_address: tokenAddress, limit: limit } })];
                    case 1:
                        res = _a.sent();
                        this.handleError(res);
                        return [2 /*return*/, res.data];
                }
            });
        });
    };
    API.prototype.getSavingsOrder = function (userAddress, tokenAddress, page, limit) {
        return __awaiter(this, void 0, void 0, function () {
            var route, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        route = api["get_savings_order"];
                        return [4 /*yield*/, axios_1.default.get("" + this.CN_URL + route, { params: { eth_address: userAddress, token_address: tokenAddress, page: page, limit: limit } })];
                    case 1:
                        res = _a.sent();
                        this.handleError(res);
                        return [2 /*return*/, res.data];
                }
            });
        });
    };
    API.prototype.tokenStatus = function (tokenAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var route, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        route = api["token_status"];
                        return [4 /*yield*/, axios_1.default.get("" + this.CN_URL + route, { params: { token_address: tokenAddress } })];
                    case 1:
                        res = _a.sent();
                        this.handleError(res);
                        return [2 /*return*/, res.data];
                }
            });
        });
    };
    API.prototype.tokenStatistical = function (tokenAddress, limit) {
        return __awaiter(this, void 0, void 0, function () {
            var route, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        route = api["token_statistical"];
                        return [4 /*yield*/, axios_1.default.get("" + this.CN_URL + route, { params: { token_address: tokenAddress, limit: limit } })];
                    case 1:
                        res = _a.sent();
                        this.handleError(res);
                        return [2 /*return*/, res.data];
                }
            });
        });
    };
    API.prototype.tokenPrice = function (tokenAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var route, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        route = api["token_prices"];
                        return [4 /*yield*/, axios_1.default.get("" + this.CN_URL + route, { params: { token_address: tokenAddress } })];
                    case 1:
                        res = _a.sent();
                        this.handleError(res);
                        return [2 /*return*/, res.data];
                }
            });
        });
    };
    API.prototype.totalAssets = function () {
        return __awaiter(this, void 0, void 0, function () {
            var route, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        route = api["total_assets"];
                        return [4 /*yield*/, axios_1.default.get("" + this.CN_URL + route)];
                    case 1:
                        res = _a.sent();
                        this.handleError(res);
                        return [2 /*return*/, res.data];
                }
            });
        });
    };
    API.prototype.addressList = function (page, limit) {
        return __awaiter(this, void 0, void 0, function () {
            var route, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        route = api["address_list"];
                        return [4 /*yield*/, axios_1.default.get("" + this.CN_URL + route, { params: { page: page, limit: limit } })];
                    case 1:
                        res = _a.sent();
                        this.handleError(res);
                        return [2 /*return*/, res.data];
                }
            });
        });
    };
    API.prototype.handleError = function (res) {
        var succCode = res.code;
        switch (succCode) {
            case 200:
                return;
            case 401:
                throw new Error("Missing Parameters.");
            case 403:
                throw new Error("Request denied.");
            case 404:
                throw new Error("Requested content doesn't exist.");
            case 500:
                throw new Error("Internal error.");
        }
    };
    return API;
}());
exports.API = API;

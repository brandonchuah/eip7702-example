"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GelatoVRFConsumer__factory = exports.IGelatoVRFConsumer__factory = exports.GelatoVRFConsumerBase__factory = exports.IProxyModule__factory = exports.IGelato1Balance__factory = exports.IGelato__factory = exports.IAutomate__factory = exports.CounterSyncFee__factory = exports.AutomateReady__factory = exports.SmartWallet__factory = exports.GlobalStateLib__factory = exports.IBlastPoints__factory = exports.GelatoBlastPoints__factory = exports.CoingeckoOracle__factory = exports.IOpsProxyFactory__factory = exports.AdvertisingBoard__factory = exports.CustomErrors__factory = exports.Counter__factory = exports.Callback__factory = exports.IERC20__factory = exports.IERC20Permit__factory = exports.factories = void 0;
exports.factories = __importStar(require("./factories"));
var IERC20Permit__factory_1 = require("./factories/@openzeppelin/contracts/token/ERC20/extensions/draft-IERC20Permit.sol/IERC20Permit__factory");
Object.defineProperty(exports, "IERC20Permit__factory", { enumerable: true, get: function () { return IERC20Permit__factory_1.IERC20Permit__factory; } });
var IERC20__factory_1 = require("./factories/@openzeppelin/contracts/token/ERC20/IERC20__factory");
Object.defineProperty(exports, "IERC20__factory", { enumerable: true, get: function () { return IERC20__factory_1.IERC20__factory; } });
var Callback__factory_1 = require("./factories/contracts/callbacks/Callback__factory");
Object.defineProperty(exports, "Callback__factory", { enumerable: true, get: function () { return Callback__factory_1.Callback__factory; } });
var Counter__factory_1 = require("./factories/contracts/Counter__factory");
Object.defineProperty(exports, "Counter__factory", { enumerable: true, get: function () { return Counter__factory_1.Counter__factory; } });
var CustomErrors__factory_1 = require("./factories/contracts/errors/CustomErrors__factory");
Object.defineProperty(exports, "CustomErrors__factory", { enumerable: true, get: function () { return CustomErrors__factory_1.CustomErrors__factory; } });
var AdvertisingBoard__factory_1 = require("./factories/contracts/examples/AdvertisingBoard.sol/AdvertisingBoard__factory");
Object.defineProperty(exports, "AdvertisingBoard__factory", { enumerable: true, get: function () { return AdvertisingBoard__factory_1.AdvertisingBoard__factory; } });
var IOpsProxyFactory__factory_1 = require("./factories/contracts/examples/AdvertisingBoard.sol/IOpsProxyFactory__factory");
Object.defineProperty(exports, "IOpsProxyFactory__factory", { enumerable: true, get: function () { return IOpsProxyFactory__factory_1.IOpsProxyFactory__factory; } });
var CoingeckoOracle__factory_1 = require("./factories/contracts/examples/CoingeckoOracle__factory");
Object.defineProperty(exports, "CoingeckoOracle__factory", { enumerable: true, get: function () { return CoingeckoOracle__factory_1.CoingeckoOracle__factory; } });
var GelatoBlastPoints__factory_1 = require("./factories/contracts/GelatoBlastPoints.sol/GelatoBlastPoints__factory");
Object.defineProperty(exports, "GelatoBlastPoints__factory", { enumerable: true, get: function () { return GelatoBlastPoints__factory_1.GelatoBlastPoints__factory; } });
var IBlastPoints__factory_1 = require("./factories/contracts/GelatoBlastPoints.sol/IBlastPoints__factory");
Object.defineProperty(exports, "IBlastPoints__factory", { enumerable: true, get: function () { return IBlastPoints__factory_1.IBlastPoints__factory; } });
var GlobalStateLib__factory_1 = require("./factories/contracts/node-sale/GlobalState.sol/GlobalStateLib__factory");
Object.defineProperty(exports, "GlobalStateLib__factory", { enumerable: true, get: function () { return GlobalStateLib__factory_1.GlobalStateLib__factory; } });
var SmartWallet__factory_1 = require("./factories/contracts/SmartWallet__factory");
Object.defineProperty(exports, "SmartWallet__factory", { enumerable: true, get: function () { return SmartWallet__factory_1.SmartWallet__factory; } });
var AutomateReady__factory_1 = require("./factories/contracts/syncFee/AutomateReady__factory");
Object.defineProperty(exports, "AutomateReady__factory", { enumerable: true, get: function () { return AutomateReady__factory_1.AutomateReady__factory; } });
var CounterSyncFee__factory_1 = require("./factories/contracts/syncFee/CounterSyncFee__factory");
Object.defineProperty(exports, "CounterSyncFee__factory", { enumerable: true, get: function () { return CounterSyncFee__factory_1.CounterSyncFee__factory; } });
var IAutomate__factory_1 = require("./factories/contracts/syncFee/Types.sol/IAutomate__factory");
Object.defineProperty(exports, "IAutomate__factory", { enumerable: true, get: function () { return IAutomate__factory_1.IAutomate__factory; } });
var IGelato__factory_1 = require("./factories/contracts/syncFee/Types.sol/IGelato__factory");
Object.defineProperty(exports, "IGelato__factory", { enumerable: true, get: function () { return IGelato__factory_1.IGelato__factory; } });
var IGelato1Balance__factory_1 = require("./factories/contracts/syncFee/Types.sol/IGelato1Balance__factory");
Object.defineProperty(exports, "IGelato1Balance__factory", { enumerable: true, get: function () { return IGelato1Balance__factory_1.IGelato1Balance__factory; } });
var IProxyModule__factory_1 = require("./factories/contracts/syncFee/Types.sol/IProxyModule__factory");
Object.defineProperty(exports, "IProxyModule__factory", { enumerable: true, get: function () { return IProxyModule__factory_1.IProxyModule__factory; } });
var GelatoVRFConsumerBase__factory_1 = require("./factories/contracts/vrf/base/GelatoVRFConsumerBase__factory");
Object.defineProperty(exports, "GelatoVRFConsumerBase__factory", { enumerable: true, get: function () { return GelatoVRFConsumerBase__factory_1.GelatoVRFConsumerBase__factory; } });
var IGelatoVRFConsumer__factory_1 = require("./factories/contracts/vrf/base/IGelatoVRFConsumer__factory");
Object.defineProperty(exports, "IGelatoVRFConsumer__factory", { enumerable: true, get: function () { return IGelatoVRFConsumer__factory_1.IGelatoVRFConsumer__factory; } });
var GelatoVRFConsumer__factory_1 = require("./factories/contracts/vrf/GelatoVRFConsumer__factory");
Object.defineProperty(exports, "GelatoVRFConsumer__factory", { enumerable: true, get: function () { return GelatoVRFConsumer__factory_1.GelatoVRFConsumer__factory; } });

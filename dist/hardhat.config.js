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
// PLUGINS
require("@gelatonetwork/web3-functions-sdk/hardhat-plugin");
require("@matterlabs/hardhat-zksync-solc");
require("@matterlabs/hardhat-zksync-verify");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("@typechain/hardhat");
require("hardhat-deploy");
// ================================= TASKS =========================================
// Process Env Variables
const dotenv = __importStar(require("dotenv"));
dotenv.config({ path: __dirname + "/.env" });
// Libraries
// Process Env Variables
// const ALCHEMY_ID = process.env.ALCHEMY_ID;
// assert.ok(ALCHEMY_ID, "no Alchemy ID in process.env");
// const INFURA_ID = process.env.INFURA_ID;
// assert.ok(INFURA_ID, "no Infura ID in process.env");
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_KEY = process.env.ETHERSCAN_KEY;
// ================================= CONFIG =========================================
const config = {
    w3f: {
        rootDir: "./web3-functions",
        debug: false,
        networks: ["mekong"], //(multiChainProvider) injects provider for these networks
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
    },
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {},
        mekong: {
            url: "https://rpc.mekong.ethpandaops.io",
            accounts: [PRIVATE_KEY],
        },
    },
    verify: {
        etherscan: {
            apiKey: ETHERSCAN_KEY ? ETHERSCAN_KEY : "",
        },
    },
    solidity: {
        compilers: [
            {
                version: "0.8.18",
                settings: {
                    optimizer: { enabled: true },
                },
            },
        ],
    },
    typechain: {
        outDir: "typechain",
        target: "ethers-v5",
    },
};
exports.default = config;

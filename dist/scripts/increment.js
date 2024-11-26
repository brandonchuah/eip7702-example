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
Object.defineProperty(exports, "__esModule", { value: true });
const hardhat_1 = require("hardhat");
const viem_1 = require("viem");
const accounts_1 = require("viem/accounts");
const chains_1 = require("viem/chains");
const experimental_1 = require("viem/experimental");
const Counter_json_1 = require("../artifacts/contracts/Counter.sol/Counter.json");
const SmartWallet_json_1 = require("../artifacts/contracts/SmartWallet.sol/SmartWallet.json");
const privateKey = process.env.PRIVATE_KEY;
if (!privateKey) {
    throw new Error("PRIVATE_KEY is not set");
}
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const eoa = (0, accounts_1.privateKeyToAccount)(privateKey);
    const walletClient = (0, viem_1.createWalletClient)({
        account: eoa,
        chain: chains_1.mekong,
        transport: (0, viem_1.http)(),
    }).extend((0, experimental_1.eip7702Actions)());
    const eoaAddress = eoa.address;
    const smartWalletAddress = (yield hardhat_1.ethers.getContract("SmartWallet"))
        .address;
    const counterAddress = (yield hardhat_1.ethers.getContract("Counter"))
        .address;
    const authorization = yield walletClient.signAuthorization({
        account: eoa,
        contractAddress: smartWalletAddress,
    });
    const incrementData = (0, viem_1.encodeFunctionData)({
        abi: Counter_json_1.abi,
        functionName: "increment",
    });
    const increment2Data = (0, viem_1.encodeFunctionData)({
        abi: Counter_json_1.abi,
        functionName: "increment2",
    });
    const hash = yield walletClient.sendTransaction({
        data: (0, viem_1.encodeFunctionData)({
            // encoded data of smart wallet
            abi: SmartWallet_json_1.abi,
            functionName: "batchCall",
            args: [
                [counterAddress, counterAddress],
                [incrementData, increment2Data],
            ],
        }),
        to: eoaAddress,
        authorizationList: [authorization],
    });
    console.log(hash);
});
main();

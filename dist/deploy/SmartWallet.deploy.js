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
const func = (hre) => __awaiter(void 0, void 0, void 0, function* () {
    if (hre.network.name !== "hardhat") {
        console.log(`Deploying SmartWallet to ${hre.network.name}. Hit ctrl + c to abort`);
    }
    const { deploy } = hardhat_1.deployments;
    const { deployer } = yield (0, hardhat_1.getNamedAccounts)();
    yield deploy("SmartWallet", {
        from: deployer,
        log: hre.network.name !== "hardhat",
        args: [],
    });
});
exports.default = func;
func.tags = ["SmartWallet"];

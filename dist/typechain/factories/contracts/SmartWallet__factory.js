"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartWallet__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address[]",
                name: "targets",
                type: "address[]",
            },
            {
                internalType: "bytes[]",
                name: "data",
                type: "bytes[]",
            },
        ],
        name: "batchCall",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50610346806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063ff08e07b14610030575b600080fd5b61004361003e3660046101e0565b610045565b005b33301461008a5760405162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b60448201526064015b60405180910390fd5b60005b8381101561018d5760008585838181106100a9576100a961024c565b90506020020160208101906100be9190610262565b6001600160a01b03168484848181106100d9576100d961024c565b90506020028101906100eb9190610292565b6040516100f99291906102d9565b6000604051808303816000865af19150503d8060008114610136576040519150601f19603f3d011682016040523d82523d6000602084013e61013b565b606091505b505090508061017a5760405162461bcd60e51b815260206004820152600b60248201526a10d85b1b0819985a5b195960aa1b6044820152606401610081565b5080610185816102e9565b91505061008d565b5050505050565b60008083601f8401126101a657600080fd5b50813567ffffffffffffffff8111156101be57600080fd5b6020830191508360208260051b85010111156101d957600080fd5b9250929050565b600080600080604085870312156101f657600080fd5b843567ffffffffffffffff8082111561020e57600080fd5b61021a88838901610194565b9096509450602087013591508082111561023357600080fd5b5061024087828801610194565b95989497509550505050565b634e487b7160e01b600052603260045260246000fd5b60006020828403121561027457600080fd5b81356001600160a01b038116811461028b57600080fd5b9392505050565b6000808335601e198436030181126102a957600080fd5b83018035915067ffffffffffffffff8211156102c457600080fd5b6020019150368190038213156101d957600080fd5b8183823760009101908152919050565b60006001820161030957634e487b7160e01b600052601160045260246000fd5b506001019056fea2646970667358221220c0a7548f6c7f9d82c2cf27b7c6c9a047a5a9510fd8489fcb1da3d632ea2407fc64736f6c63430008120033";
const isSuperArgs = (xs) => xs.length > 1;
class SmartWallet__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.SmartWallet__factory = SmartWallet__factory;
SmartWallet__factory.bytecode = _bytecode;
SmartWallet__factory.abi = _abi;

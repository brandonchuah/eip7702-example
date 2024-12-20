"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Counter__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "count",
                type: "uint256",
            },
        ],
        name: "Increment",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "count",
                type: "uint256",
            },
        ],
        name: "Increment2",
        type: "event",
    },
    {
        inputs: [],
        name: "count",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "count2",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "increment",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "increment2",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b5061016e806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806306661abd146100515780631d63e24d1461006c578063ab57b12814610075578063d09de08a1461007f575b600080fd5b61005a60005481565b60405190815260200160405180910390f35b61005a60015481565b61007d610087565b005b61007d6100cc565b60018060008282546100999190610111565b90915550506001546040517f0335b51418df6ad87c7638414b2dd16910635533ebf9090fab3f0fdd07a5150890600090a2565b60016000808282546100de9190610111565b90915550506000805460405190917f51af157c2eee40f68107a47a49c32fbbeb0a3c9e5cd37aa56e88e6be92368a8191a2565b8082018082111561013257634e487b7160e01b600052601160045260246000fd5b9291505056fea2646970667358221220d8a237dd860597e2d6137cad13256db06e7a1f1011884acd5f5d97b5737208cd64736f6c63430008120033";
const isSuperArgs = (xs) => xs.length > 1;
class Counter__factory extends ethers_1.ContractFactory {
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
exports.Counter__factory = Counter__factory;
Counter__factory.bytecode = _bytecode;
Counter__factory.abi = _abi;

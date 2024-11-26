import { HardhatUserConfig } from "hardhat/config";

// PLUGINS
import "@gelatonetwork/web3-functions-sdk/hardhat-plugin";
import "@matterlabs/hardhat-zksync-solc";
import "@matterlabs/hardhat-zksync-verify";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-deploy";

// ================================= TASKS =========================================

// Process Env Variables
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });

// Libraries

// Process Env Variables
// const ALCHEMY_ID = process.env.ALCHEMY_ID;
// assert.ok(ALCHEMY_ID, "no Alchemy ID in process.env");
// const INFURA_ID = process.env.INFURA_ID;
// assert.ok(INFURA_ID, "no Infura ID in process.env");

const PRIVATE_KEY = process.env.PRIVATE_KEY as string;
const ETHERSCAN_KEY = process.env.ETHERSCAN_KEY;

// ================================= CONFIG =========================================
const config: HardhatUserConfig = {
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

export default config;

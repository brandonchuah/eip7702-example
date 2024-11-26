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
import assert from "assert";

// Process Env Variables
const ALCHEMY_ID = process.env.ALCHEMY_ID;
assert.ok(ALCHEMY_ID, "no Alchemy ID in process.env");
const INFURA_ID = process.env.INFURA_ID;
assert.ok(INFURA_ID, "no Infura ID in process.env");

const PRIVATE_KEY = process.env.PRIVATE_KEY as string;
const W3F_DEV_KEY = process.env.W3F_DEV_KEY as string;
const ETHERSCAN_KEY = process.env.ETHERSCAN_KEY;

// ================================= CONFIG =========================================
const config: HardhatUserConfig = {
  w3f: {
    rootDir: "./web3-functions",
    debug: false,
    networks: ["mumbai", "goerli", "baseGoerli", "reyacronos"], //(multiChainProvider) injects provider for these networks
  },

  namedAccounts: {
    deployer: {
      default: 0,
    },
  },

  defaultNetwork: "hardhat",

  networks: {
    hardhat: {
      forking: {
        url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_ID}`,
        blockNumber: 8664000,
      },
    },

    mekong: {
      url: "https://rpc.mekong.ethpandaops.io",
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },

    // Prod
    alephzero: {
      url: `https://rpc.alephzero.raas.gelato.cloud`,
      chainId: 41455,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    avalanche: {
      url: "https://api.avax.network/ext/bc/C/rpc",
      chainId: 43114,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    arbitrum: {
      chainId: 42161,
      url: "https://arb1.arbitrum.io/rpc",
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    astarzkevm: {
      url: "https://rpc.astar-zkevm.gelato.digital",
      chainId: 3776,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    base: {
      url: `https://mainnet.base.org`,
      chainId: 8453,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    blast: {
      url: `https://blastl2-mainnet.public.blastapi.io`,
      chainId: 81457,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    bsc: {
      chainId: 56,
      url: "https://bsc-dataseed.binance.org/",
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    coredao: {
      url: `https://rpc.coredao.org`,
      chainId: 1116,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    ethereum: {
      chainId: 1,
      url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_ID}`,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    fantom: {
      chainId: 250,
      url: `https://rpcapi.fantom.network/`,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    filecoin: {
      chainId: 314,
      url: `https://filecoin.chainup.net/rpc/v1`,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    flow: {
      chainId: 747,
      url: `https://mainnet.evm.nodes.onflow.org`,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    gnosis: {
      chainId: 100,
      url: `https://gnosis-mainnet.public.blastapi.io`,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    linea: {
      url: `https://linea-mainnet.infura.io/v3/${INFURA_ID}`,
      chainId: 59144,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    lisk: {
      url: `https://rpc.api.lisk.com`,
      chainId: 1135,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    metis: {
      chainId: 1088,
      url: "https://metis-mainnet.public.blastapi.io",
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    mode: {
      url: `https://mainnet.mode.network`,
      chainId: 34443,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    optimism: {
      chainId: 10,
      url: "https://mainnet.optimism.io",
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    playblock: {
      chainId: 1829,
      url: `https://rpc.playblock.io`,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    polygon: {
      chainId: 137,
      url: `https://polygon-mainnet.g.alchemy.com/v2/${ALCHEMY_ID}`,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    polygonzk: {
      url: "https://zkevm-rpc.com",
      chainId: 1101,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    prism: {
      chainId: 994873017,
      url: `https://mainnet-rpc.lumia.org`,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    real: {
      url: "https://rpc.realforreal.gelato.digital/",
      chainId: 111188,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    reyanetwork: {
      url: "https://rpc.reya.network",
      chainId: 1729,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    rootstock: {
      url: `https://public-node.rsk.co`,
      chainId: 30,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    zksync: {
      zksync: true,
      url: "https://mainnet.era.zksync.io",
      chainId: 324,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
      verifyURL:
        "https://zksync2-mainnet-explorer.zksync.io/contract_verification",
    },

    // Staging
    alephzerotestnet: {
      url: `https://rpc.alephzero-testnet.gelato.digital`,
      chainId: 2039,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    amoy: {
      chainId: 80002,
      url: `https://rpc-amoy.polygon.technology`,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    anomalyandromeda: {
      chainId: 241120,
      url: `https://rpc.anomaly-andromeda.anomalygames.io`,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    arbgoerli: {
      chainId: 421613,
      url: `https://arb-goerli.g.alchemy.com/v2/${ALCHEMY_ID}`,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    arbsepolia: {
      chainId: 421614,
      url: `https://sepolia-rollup.arbitrum.io/rpc`,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    arbsepoliadynamic: {
      chainId: 421614,
      url: `https://sepolia-rollup.arbitrum.io/rpc`,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    astarzkyoto: {
      url: `https://rpc.zkyoto.gelato.digital`,
      chainId: 6038361,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    basesepolia: {
      url: `https://sepolia.base.org`,
      chainId: 84532,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    berachainbartio: {
      url: `https://bartio.rpc.berachain.com/`,
      chainId: 80084,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    blackberry: {
      url: `https://rpc.polygon-blackberry.gelato.digital`,
      chainId: 94204209,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    blastsepolia: {
      chainId: 168587773,
      url: `https://sepolia.blast.io`,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    bonito: {
      url: `https://rpc.bonito-testnet.t.raas.gelato.cloud`,
      chainId: 69658185,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    campnetworktestnet: {
      url: `https://rpc.camp-network-testnet.gelato.digital`,
      chainId: 325000,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    carvtestnet: {
      url: `https://rpc.managed-longer-ship.t.raas.gelato.cloud`,
      chainId: 123_420_000_567,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    connextsepolia: {
      url: `https://rpc.connext-sepolia.gelato.digital`,
      chainId: 6398,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    baseGoerli: {
      chainId: 84531,
      url: "https://goerli.base.org",
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    gelopcelestiatestnet: {
      chainId: 123420111,
      url: "https://rpc.opcelestia-raspberry.gelato.digital",
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    gelatoorbittestnet: {
      url: `https://rpc.arb-blueberry.gelato.digital`,
      chainId: 88153591557,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    geloptestnet: {
      chainId: 42069,
      url: `https://rpc.op-testnet.gelato.digital`,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    goerli: {
      chainId: 5,
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_ID}`,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    inksepolia: {
      chainId: 763_373,
      url: `https://rpc-gel-sepolia.inkonchain.com`,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    lisksepolia: {
      chainId: 4202,
      url: `https://rpc.sepolia-api.lisk.com`,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    mumbai: {
      chainId: 80001,
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_ID}`,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    mumbaiDev: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_ID}`,
      chainId: 80001,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    opencampuscodex: {
      url: `https://rpc.open-campus-codex.gelato.digital`,
      chainId: 656476,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    novastrotestnet: {
      url: `https://rpc.novastro-testnet.gelato.digital`,
      chainId: 560098,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    popberry: {
      url: `https://rpc.popberry.t.raas.gelato.cloud`,
      chainId: 1233,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    reyacronos: {
      chainId: 89346162,
      url: `https://rpc.reya-cronos.gelato.digital`,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    ludicotetromino: {
      url: `https://rpc.ludico-tetromino.gelato.digital`,
      chainId: 4444,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    sepolia: {
      chainId: 11155111,
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_ID}`,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    storytestnet: {
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
      chainId: 1513,
      url: "https://testnet.storyrpc.io/",
    },
    storyodysseytestnet: {
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
      chainId: 1516,
      url: "https://rpc.odyssey.storyrpc.io/",
    },
    volmex: {
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
      chainId: 123_420_000_588,
      url: "https://rpc.volmex.t.raas.gelato.cloud",
    },
    osepolia: {
      chainId: 11155420,
      url: `https://sepolia.optimism.io`,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    unreal: {
      chainId: 18231,
      url: `https://rpc.unreal.gelato.digital`,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    unrealorbit: {
      chainId: 18233,
      url: `https://rpc.unreal-orbit.gelato.digital`,
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
    },
    zkatana: {
      chainId: 1261120,
      url: "https://rpc.zkatana.gelato.digital",
      accounts: [PRIVATE_KEY, W3F_DEV_KEY],
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

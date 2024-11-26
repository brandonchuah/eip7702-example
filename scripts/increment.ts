import { ethers } from "hardhat";
import {
  Address,
  createWalletClient,
  encodeFunctionData,
  Hex,
  http,
} from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { mekong } from "viem/chains";
import { eip7702Actions } from "viem/experimental";
import { abi as CounterAbi } from "../artifacts/contracts/Counter.sol/Counter.json";
import { abi as SmartWalletAbi } from "../artifacts/contracts/SmartWallet.sol/SmartWallet.json";

const privateKey = process.env.PRIVATE_KEY as Hex;
if (!privateKey) {
  throw new Error("PRIVATE_KEY is not set");
}

const main = async () => {
  const eoa = privateKeyToAccount(privateKey);

  const walletClient = createWalletClient({
    account: eoa,
    chain: mekong,
    transport: http(),
  }).extend(eip7702Actions());

  const eoaAddress = eoa.address;
  const smartWalletAddress = (await ethers.getContract("SmartWallet"))
    .address as Address;
  const counterAddress = (await ethers.getContract("Counter"))
    .address as Address;

  const authorization = await walletClient.signAuthorization({
    account: eoa,
    contractAddress: smartWalletAddress,
  });

  const incrementData = encodeFunctionData({
    abi: CounterAbi,
    functionName: "increment",
  });

  const increment2Data = encodeFunctionData({
    abi: CounterAbi,
    functionName: "increment2",
  });

  const hash = await walletClient.sendTransaction({
    data: encodeFunctionData({
      // encoded data of smart wallet
      abi: SmartWalletAbi,
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
};

main();

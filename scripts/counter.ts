import { ethers } from "hardhat";
import { Counter } from "../typechain";

const main = async () => {
  const counter = (await ethers.getContract("Counter")) as Counter;

  const count = await counter.count();
  const count2 = await counter.count2();

  console.log(`count: ${count.toString()}`);
  console.log(`count2: ${count2.toString()}`);
};

main();

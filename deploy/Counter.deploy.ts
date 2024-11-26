import { deployments, getNamedAccounts } from "hardhat";
import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  if (hre.network.name !== "hardhat") {
    console.log(
      `Deploying Counter to ${hre.network.name}. Hit ctrl + c to abort`,
    );
  }

  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("Counter", {
    from: deployer,
    log: hre.network.name !== "hardhat",
    args: [],
  });
};

export default func;

func.tags = ["Counter"];

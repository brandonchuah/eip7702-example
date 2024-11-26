import hre from "hardhat";
import { before } from "mocha";
const { deployments } = hre;

describe("HelloWorld Tests", function () {
  this.timeout(0);

  before(async function () {
    await deployments.fixture();
  });

  it("hello world", async () => {
    console.log("hello world");
  });
});

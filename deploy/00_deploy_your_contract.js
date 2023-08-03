// deploy/00_deploy_your_contract.js
const { ethers } = require("hardhat");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const TestNFT = await deploy("TestNFT", {
    args: [],
    from: deployer,
    log: true,
    waitConfirmations: 2
  });

  await run(`verify:verify`, {
    address: TestNFT.address,
    constructorArguments: [],
  });
};
module.exports.tags = ["TestNFT"];

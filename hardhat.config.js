require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require("hardhat-deploy-ethers");
require("@nomicfoundation/hardhat-verify");
require("dotenv").config();

module.exports = {
  solidity:
  {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: false,
        runs: 200,
      },
    }
  },
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545/",
    },
    polygonMumbai: {
      url: "https://rpc.ankr.com/polygon_mumbai",
      accounts: ["c1380462079abaf7998e206407df8c762c54fc86c7bff5fd649364b5923b576c"],
    },
  },

  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  etherscan: {
    apiKey: {
      mainnet: process.env.ETHSCAN_API_KEY,
      goerli: process.env.ETHSCAN_API_KEY,
      sepolia: process.env.ETHSCAN_API_KEY,
      polygonMumbai: process.env.MUMBAI_API_KEY
    },
  },
};
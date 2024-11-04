require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.0",
  networks:{
    sepolia:{
      url: "https://eth-sepolia.g.alchemy.com/v2/olNdBeHGds26VN4iBw2kVHdJXKZQICvJ",
      accounts: [`PrivateKey`]
    }
  }
};

// https://eth-sepolia.g.alchemy.com/v2/olNdBeHGds26VN4iBw2kVHdJXKZQICvJ
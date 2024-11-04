const hre = require("hardhat");

const main = async () => {
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();
  console.log(transactions);
  console.log("Deploying Transactions...");
  await transactions.deployed();
  console.log("Transactions deployed to:", transactions.address);
};

runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
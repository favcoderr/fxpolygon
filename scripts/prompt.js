const hre = require("hardhat");
const contractJSON = require("../artifacts/contracts/GidToken.sol/GidToken.json");
require("dotenv").config();

const contractAddress = "0x3bc6F757E29Fc12791fC3F57971bf9964A912dBF";
const contractABI = contractJSON.abi;

async function main() {
  const contract = await hre.ethers.getContractAt(contractABI, contractAddress);
  const totalNFTs = await contract.totalSupply();

  for (let i = 0; i < totalNFTs; i++) {
    console.log(`prompts ${i + 1}: ${await contract.prompts(i)}`);
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

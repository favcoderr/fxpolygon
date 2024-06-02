const hre = require("hardhat");
const contractJSON = require("../artifacts/contracts/GidToken.sol/GidToken.json");

const contractAddress = "0xcontract";
const contractABI = contractJSON.abi;
const walletAddress = "0x5bB94AF4324e4A0232cD6475716A34bf198F5F80";
let noOfNFTs = 5;
async function main() {
  const contract = await hre.ethers.getContractAt(contractABI, contractAddress);

  const tx = await contract.mint(walletAddress, noOfNFTs);
  await tx.wait();

  console.log(
    walletAddress +
      " now has: " +
      (await contract.balanceOf(walletAddress)) +
      " NFTs"
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

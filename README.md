# NFT Bridge

This repository provides a practical guide for creating NFTs based on the ERC721 standard and bridging them seamlessly from Ethereum (ETH) to Polygon (Matic). The core contract is an ERC721A extension named `GidToken`, which facilitates NFT minting on both Ethereum and Polygon networks.

---

## Technologies Used

- **Solidity:** For writing the GidToken ERC721 contract.
- **Hardhat:** For compiling, deploying, and testing smart contracts.
- **Midjourney:** AI image generator used to create NFT images from textual descriptions.
- **Pinata (IPFS):** Decentralized storage system for hosting NFT images.
- **FxPortal:** Enables interoperability between Ethereum and Polygon networks for asset bridging.

---

## Steps to Mint and Bridge NFTs

0. **Setup:** Clone the repository and run `npm install` to install dependencies.

1. **Mint NFTs:** 
    - Deploy the GidToken contract on the Sepolia Ethereum testnet: 
      ```sh
      npx hardhat run scripts/deploy.js --network sepolia
      ```
    - Mint NFTs: 
      ```sh
      npx hardhat run scripts/mintAll.js --network sepolia
      ```
    - Adjust the number of NFTs minted by modifying the `noOfNFTs` variable in `mintAll.js`.

2. **Upload Images to IPFS:** 
    - Use [Pinata](https://www.pinata.cloud/) to upload NFT images to IPFS.
    - Obtain the `_baseURI_` of your IPFS directory.

3. **Approve and Deposit:** 
    - Approve and deposit NFTs to the Polygon network via the FxERC721RootTunnel contract: 
      ```sh
      npx hardhat run scripts/approveDeposit.js --network sepolia
      ```

4. **Wait for Completion:** 
    - Allow 20-30 minutes for tokens to appear in your Polygon account after depositing.
    - Learn more about FxPortal [here](https://wiki.polygon.technology/docs/pos/design/bridge/l1-l2-communication/fx-portal/#how-does-it-work).

5. **Verify Balance:**
  - Verify the successful transfer of NFTs by employing npx hardhat run scripts/getBalance.js --network sepolia to check the number of NFTs associated with an address on Polygon.

---

## Accessing Image Descriptions

To explore textual descriptions linked with NFT images, run:
```sh
npx hardhat run scripts/prompts.js --network sepolia
```

---

This guide aims to facilitate the creation and bridging of NFTs, leveraging the capabilities of various technologies to ensure a smooth process.
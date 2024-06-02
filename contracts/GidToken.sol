// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GidToken is ERC721A, Ownable {
    constructor() Ownable(msg.sender) ERC721A("GidToken", "BTN") {}

    uint256 private limit = 5;
    string[] private descriptions = [
        "A contemporary scene of a woman tending to a rooftop garden in a bustling city",
        "A photorealistic image of the interior of an art gallery with white walls, featuring abstract neon-colored paintings on the walls.",
        "outer space, outer ring, planet, asteroids",
        "donuts with angel wings illustration, minimalist style, ux, ui, uxui",
        "two people having lunch at a table in a hospital cafeteria,"
    ];
    mapping(uint256 => string) private _tokenURIs;

    function _baseURI() internal pure override returns (string memory) {
        return "QmTXWymK7JNpASEhDibGsJULRQJkcY1MA6vk2fbNmp9nQS";
    }

    function mint(address reciever, uint256 quantity) external onlyOwner {
        require(reciever != address(0), "Invalid address");
        require(totalSupply() < limit, "NFTs minted exceeds maximum");
        _safeMint(reciever, quantity);
    }

    function prompts(uint256 tokenId) public view returns (string memory) {
        return descriptions[tokenId];
    }
}

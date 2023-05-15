// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
// import "openzeppelin/contracts/token/ERC20/ERC20.sol";
import "openzeppelin/token/ERC20/ERC20.sol";

contract Token is ERC20("TOKEN", "TKN") {
    constructor() {
        _mint(msg.sender, 1000000e18);
    }

    function mint() public {
        _mint(msg.sender, 1000000e18);
    }

    function mintAmount(address user, uint256 amount) public {
        _mint(user, amount);
    }
}

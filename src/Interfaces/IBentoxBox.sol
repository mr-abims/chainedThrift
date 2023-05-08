// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import "openzeppelin/token/ERC20/utils/SafeERC20.sol";
interface IBentoxBox {
    function balanceOf(address, address) external view returns (uint256);

    function deposit(
        IERC20 token_,
        address from,
        address to,
        uint256 amount,
        uint256 share
    ) external payable returns (uint256 amountOut, uint256 shareOut);

    function withdraw(
        IERC20 token_,
        address from,
        address to,
        uint256 amount,
        uint256 share
    ) external returns (uint256 amountOut, uint256 shareOut);
}
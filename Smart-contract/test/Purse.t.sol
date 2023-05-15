// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "../src/Purse.sol";
import "./TestToken.sol";

contract CounterTest is Test {
    PurseContract public purse;
    Token public token;
    address public creator = addr("creator");
    address public user1 = addr("user1");
    address public user2 = addr("user2");
    address public user3 = addr("user3");

    function setUp() public {
        token = new Token();
        purse = new PurseContract(creator, 10, 5, 60, address(token), 0);
    }

    function addr(string memory _name) internal view returns (address) {
        return address(bytes20(keccak256(abi.encodePacked(this, _name))));
    }

    function testJoin() public {
        vm.startPrank(user1);
        token.mint();

        token.approve(address(purse), 50);
        purse.joinPurse(1);
        purse.depositDonation(user2);
        vm.stopPrank();
        vm.startPrank(user2);
        token.mint();
        token.approve(address(purse), 50);
        purse.joinPurse(2);
        vm.stopPrank();
        
    }

    function testLeave() public {
        vm.startPrank(user1);
        purse.leavePurse();
        
    }
}

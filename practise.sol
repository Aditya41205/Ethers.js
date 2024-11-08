// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

contract ethers{

    //0xb54817bf0dae103ca560abc55c94d95d289dacb6
 

 uint256 public num;
 uint256 public balance= address(this).balance;

 function storevalues(uint256 _num) public {
    num=_num;
 }

 function call() payable public {

 }

 constructor() {
        balance = address(this).balance;
    }


    function updateBalance() public {
        balance = address(this).balance;
    }



}
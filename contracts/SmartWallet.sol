// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract SmartWallet {
    function batchCall(
        address[] calldata targets,
        bytes[] calldata data
    ) external {
        require(msg.sender == address(this), "Not authorized");

        for (uint256 i = 0; i < targets.length; i++) {
            (bool success, ) = targets[i].call(data[i]);
            require(success, "Call failed");
        }
    }
}

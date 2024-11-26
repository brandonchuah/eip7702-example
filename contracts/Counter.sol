pragma solidity 0.8.18;

contract Counter {
    uint256 public count;
    uint256 public count2;

    event Increment(uint256 indexed count);
    event Increment2(uint256 indexed count);

    function increment() external {
        count += 1;
        emit Increment(count);
    }

    function increment2() external {
        count2 += 1;
        emit Increment2(count2);
    }
}

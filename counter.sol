pragma solidity ^0.5.0;

contract Counter {
    int count;

    event CounterEvent(int _count);

    function decrement() public {
        count -= 1;
        emit CounterEvent(count);
    }

    function increment() public {
        count += 1;
        emit CounterEvent(count);
    }

    function getCount() public view returns (int) {
        return count;
    }
}
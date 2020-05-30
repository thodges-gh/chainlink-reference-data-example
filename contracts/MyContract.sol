pragma solidity 0.4.24;

import "@chainlink/contracts/src/v0.4/interfaces/AggregatorInterface.sol";

contract MyContract {

  AggregatorInterface public ref;

  constructor(address _ref) public {
    ref = AggregatorInterface(_ref);
  }

  function latestAnswer() external view returns (int256) {
    return ref.latestAnswer();
  }

}

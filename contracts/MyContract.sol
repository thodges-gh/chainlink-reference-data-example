pragma solidity 0.6.10;

import "@chainlink/contracts/src/v0.6/interfaces/AggregatorInterface.sol";

contract MyContract {

  AggregatorInterface public ref;

  constructor(address _ref) public {
    ref = AggregatorInterface(_ref);
  }

  function latestAnswer() external view returns (int256) {
    return ref.latestAnswer();
  }

}

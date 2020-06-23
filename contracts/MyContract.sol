pragma solidity 0.6.10;

import "@chainlink/contracts/src/v0.6/interfaces/AggregatorV3Interface.sol";

contract MyContract {

  AggregatorV3Interface public ref;

  constructor(address _ref) public {
    ref = AggregatorV3Interface(_ref);
  }

  function latestAnswer() external view returns (int256 answer) {
    ( , answer, , , ) = ref.latestRoundData();
  }

}

/* eslint-disable @typescript-eslint/no-var-requires */
const { BN } = require('openzeppelin-test-helpers')

contract('MyContract', accounts => {
  const MockAggregator = artifacts.require('MockAggregator')
  const MyContract = artifacts.require('MyContract')

  const initialAnswer = new BN(42)
  const decimals = new BN(8)

  let cc, agg

  beforeEach(async () => {
    agg = await MockAggregator.new(decimals, initialAnswer)
    cc = await MyContract.new(agg.address)
  })

  it('deploys with the specified address', async () => {
    assert.equal(agg.address, await cc.ref())
  })

  describe('#latestAnswer', () => {
    it('returns the answer from the aggregator', async () => {
      assert.isTrue(initialAnswer.eq(await cc.latestAnswer()))
    })
  })
})

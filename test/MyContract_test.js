/* eslint-disable @typescript-eslint/no-var-requires */
const { BN } = require('openzeppelin-test-helpers')

contract('MyContract', accounts => {
  const { MockV3Aggregator } = require('@chainlink/contracts/truffle/v0.6/MockV3Aggregator')
  const MyContract = artifacts.require('MyContract')

  const defaultAccount = accounts[0]

  const initialAnswer = new BN(42)
  const decimals = new BN(8)

  let cc, ref

  beforeEach(async () => {
    ref = await MockV3Aggregator.new(decimals, initialAnswer, { from: defaultAccount })
    cc = await MyContract.new(ref.address, { from: defaultAccount })
  })

  it('deploys with the specified address', async () => {
    assert.equal(ref.address, await cc.ref())
  })

  describe('#latestAnswer', () => {
    it('returns the answer from the aggregator', async () => {
      assert.isTrue(initialAnswer.eq(await cc.latestAnswer()))
    })
  })
})

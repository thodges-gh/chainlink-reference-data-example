const MyContract = artifacts.require('MyContract')

module.exports = async callback => {
  const address = process.argv[4]
  const mc = address
           ? await MyContract.at(address)
           : await MyContract.deployed()
  console.log('Reading answer at address', mc.address)
  const answer = await mc.latestAnswer.call()
  callback(answer)
}

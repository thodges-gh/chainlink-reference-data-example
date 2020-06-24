const MyContract = artifacts.require('MyContract')

module.exports = async callback => {
  const address = process.argv[4]
  let mc
  if (address) {
    mc = await MyContract.at(address)
  } else {
    mc = await MyContract.deployed()
  }
  console.log('Reading answer at address', mc.address)
  const answer = await mc.latestAnswer.call()
  callback(answer)
}

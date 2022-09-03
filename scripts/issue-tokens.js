const decentralbank =artifacts.require('Decentralbank')
module.exports =async function issueRewards(){
    let decentralbank =await decentralbank.deplpoyed()
    await decentralbank.issueTokens()
    console.log('Tokens have been issued')
    callback()
}
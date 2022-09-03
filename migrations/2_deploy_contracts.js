const Tether=artifacts.require('Tether');
const RWD=artifacts.require('RWD');
const Decentralbank=artifacts.require('Decentralbank');

module.exports= async function(deployer,network,accounts){
    await deployer.deploy(Tether)
    const tether=await Tether.deployed()
    await deployer.deploy(RWD)  
    const rwd=await RWD.deployed()
    await deployer.deploy(Decentralbank,rwd.address,tether.address)
    const decentralbank=await Decentralbank.deployed()
    await rwd.transfer(decentralbank.address,'1000000000000000000000000')
    await tether.transfer(accounts[1],'100000000000000000000')
};
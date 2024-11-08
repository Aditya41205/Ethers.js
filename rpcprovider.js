const  ethers  = require("ethers");
console.log(ethers);


const provider = new ethers.providers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/v350ExJlycdQnLUTLyAp_S_AQTVOp4Ii");

const queryBlockchain = async () => {
    const blockNumber = await provider.getBlockNumber();
    console.log("Current block number:", blockNumber);
};

queryBlockchain();

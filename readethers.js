const { ethers } = require("ethers"); // Correctly import ethers

const provider = new ethers.providers.JsonRpcProvider(`https://eth-sepolia.g.alchemy.com/v2/M06AWGKf0O7c1ccjx61enrNnDJ9J0yt4`);

const queryBlockchain = async () => { 
  try {
    const block = await provider.getBlockNumber();
    console.log(block);
    const balance = await provider.getBalance(""); // Get balance for an address
    console.log("balance in hex", balance);
    const etherBalance = ethers.utils.formatEther(balance); 
    console.log(etherBalance);
  } catch (error) {
    console.error("Error fetching block number:", error);
  }
};

queryBlockchain();
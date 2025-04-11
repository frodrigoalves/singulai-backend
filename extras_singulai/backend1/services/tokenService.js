const { ethers } = require("ethers");
require("dotenv").config();
const abi = require("../abi/SingulAIToken.json");

const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
const contract = new ethers.Contract(process.env.CONTRACT_SGL, abi, provider);

module.exports = {
  async getBalance(wallet) {
    const raw = await contract.balanceOf(wallet);
    return ethers.utils.formatEther(raw);
  }
};

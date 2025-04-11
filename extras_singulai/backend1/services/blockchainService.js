const { ethers } = require("ethers");
require("dotenv").config();
const abi = require("../abi/AvatarBase.json");

const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contract = new ethers.Contract(process.env.CONTRACT_ADDRESS, abi, signer);

module.exports = {
  createAvatarOnChain: async (name, role, energy) => {
    const tx = await contract.createAvatar(name, role, energy);
    await tx.wait();
    return tx.hash;
  }
};

const Avatar = require('../models/avatarModel');

const getAllAvatars = async () => {
  return await Avatar.find({});
};

const createAvatar = async (data) => {
  const avatar = new Avatar(data);
  return await avatar.save();
};

module.exports = { getAllAvatars, createAvatar };

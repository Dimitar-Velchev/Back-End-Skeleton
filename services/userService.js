const User = require("../models/User");

async function createUser(username, hashedPassword) {
  const user = new User({
    username,
    hashedPassword,
    //to change later if email?
  });

  await user.save();
  return user;
}

async function getUserByUsername(username){
    const pattern = new RegExp(`^${username}$`, "i");
    const user = await User.findOne({
      username: { $regex: pattern },
    });
    return user;
}

// to add more functions (getUserByEmail)

module.exports = {
    createUser,
    getUserByUsername
}
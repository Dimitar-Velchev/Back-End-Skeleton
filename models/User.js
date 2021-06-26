const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: { type: String, required: true },
  hashedPassword: { type: String, required: true },
  //to add??
});


module.exports = model('User',userSchema)
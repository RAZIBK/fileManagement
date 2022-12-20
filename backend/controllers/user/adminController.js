const expressAsyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");

const { generateToken } = require("../../config/token/token");
const User = require("../../model/User/userModel");

const registerAdminCtrl = expressAsyncHandler(async (req, res) => {
  const userExists = await User.findOne({ email: req?.body?.email });
  if (userExists) throw new Error("User already exists");
  try {
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;
    const newuser = await User.create({
      name: req?.body?.name,
      email: req?.body?.email,
      isAdmin: true,
      password: req?.body?.password,
    });
    res.json({
      data: newuser,
      success: true,
      message: "Registration successful",
    });
  } catch (error) {
    console.log(error);
    res.json(error.message);
  }
});

module.exports = {
  registerAdminCtrl,
};

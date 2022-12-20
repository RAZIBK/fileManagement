const expressAsyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../../config/token/token");
const User = require("../../model/User/userModel");

const registerUserCtrl = expressAsyncHandler(async (req, res) => {
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
      password: req?.body?.password,
    });
    res.json({ message: "Registration successful", success: true });
  } catch (error) {
    res.json(error.message);
  }
});

const loginUserCtrl = expressAsyncHandler(async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    res.status(401);
    throw new Error("Your Email or password is incorrect");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    res.status(401);
    throw new Error("Your Email or password is incorrect");
  } else {
    let token = generateToken(user?._id);
    res.json({
      message: "Login successful",
      success: true,
      token: token,
      data: user,
    });
  }
});

// const getUserDataCtrl = expressAsyncHandler(async (req, res) => {
//   console.log(req.user);
//   try {
//    const userData=await User.findById(req.user._id)
//    res.json(userData)
//   } catch (error) {

//   }
// });

module.exports = {
  registerUserCtrl,
  loginUserCtrl,
  // getUserDataCtrl
};

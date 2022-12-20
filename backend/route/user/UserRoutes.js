const express = require("express");
const {
  registerUserCtrl,
  loginUserCtrl,
} = require("../../controllers/User/userController");

const UserRoutes = express.Router();

UserRoutes.post("/register", registerUserCtrl);
UserRoutes.post("/login", loginUserCtrl);

module.exports = UserRoutes;

const express = require("express");
const { registerAdminCtrl } = require("../../controllers/user/adminController");

const adminRoutes = express.Router();

adminRoutes.post("/register", registerAdminCtrl);

module.exports = adminRoutes;

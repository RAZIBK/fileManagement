const express = require("express");
const storage = require("../../middlewares/uploads/imageUpload");
const {
  uploadPdfCtrl,
  getAllPdfCtrl,
} = require("../../controllers/pdfControllers/pdfControllers");
const authmidlewarres = require("../../middlewares/auth/auth");

const pdfRoutes = express.Router();

pdfRoutes.post("/", authmidlewarres, storage.single("File"), uploadPdfCtrl);
pdfRoutes.get("/", authmidlewarres, getAllPdfCtrl);

module.exports = pdfRoutes;

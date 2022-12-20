const Pdf = require("../../model/File/File");
const cloudinary = require("../../utils/cloudinary");

const uploadPdfCtrl = async (req, res) => {
  console.log(req.body);
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
console.log(req.user);
    const data = await Pdf.create({
      pdfId: result?.url,
      UserId: req?.user?._id,
      pdfName: req?.body?.pdfName,
    });
    res.json({ message: "New file Added", success: true,data});
  } catch (error) {}
};

const getAllPdfCtrl = async (req, res) => {
  try {
    if (req.user.isAdmin) {
      const data = await Pdf.find().sort({_id:-1}).populate("UserId");
      res.json(data);
    } else {
      const data = await Pdf.find({UserId:req.user._id}).sort({_id:-1}).populate("UserId");
      res.json(data); 
    }
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  uploadPdfCtrl,
  getAllPdfCtrl,
};

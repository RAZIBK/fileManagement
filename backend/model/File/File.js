const mongoose = require("mongoose");

const pdfSchema = new mongoose.Schema(
  {
    pdfId: {
      type: String,
      required: true,
    },
    UserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    pdfName: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Pdf = mongoose.model("Pdf", pdfSchema);

module.exports = Pdf;

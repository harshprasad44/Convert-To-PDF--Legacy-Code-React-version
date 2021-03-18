import asyncHandler from "express-async-handler";
import ConvertAPI from "convertapi";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const __dirname = path.resolve();

const CONVERT_API_SECRET = process.env.CONVERT_API_SECRET;
const convertapi = new ConvertAPI(CONVERT_API_SECRET);

// @desc    PDF - PPT
// @route   POST /api/pdf-pptx
// @access  Public
const toPdf = asyncHandler(async (req, res) => {
  convertapi
    .convert(
      "pdf",
      {
        File: `https://v2.convertapi.com/d/${req.params.id}`,
        FileName: req.params.FileName,
      },
      "docx"
    )
    .then(function (result) {
      console.log("Conversion done");
      console.log(result.file.url);
      res.send(result.file.url);
    })
    .catch((error) => {
      console.log(error);
    });
});

export { toPdf };

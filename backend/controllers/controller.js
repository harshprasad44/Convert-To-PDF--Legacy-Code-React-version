import asyncHandler from "express-async-handler";
import ConvertAPI from "convertapi";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const __dirname = path.resolve();

const CONVERT_API_SECRET = process.env.CONVERT_API_SECRET;
const convertapi = new ConvertAPI(CONVERT_API_SECRET);

///////////////////////////

const testing = asyncHandler(async (req, res) => {
  console.log(__dirname);
});

//////////////////////////

// @desc    PDF - PPT
// @route   POST /api/pdf-pptx
// @access  Public
const toPdf = asyncHandler(async (req, res) => {
  convertapi
    .convert("pdf", { File: `${__dirname}/uploads/exp5.docx` })
    .then(function (result) {
      // get converted file url
      console.log("Converted file url: " + result.file.url);

      res.send(result.file.url);
    })
    .then(function (file) {
      console.log("File converted");
    })
    .catch(function (e) {
      console.error(e.toString());
    });
});

export { toPdf, testing };

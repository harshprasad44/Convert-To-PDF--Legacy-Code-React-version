import asyncHandler from "express-async-handler";
import ConvertAPI from "convertapi";
import fs from "fs";
import https from "https";
import dotenv from "dotenv";

dotenv.config();

const CONVERT_API_SECRET = process.env.CONVERT_API_SECRET;
const convertapi = new ConvertAPI(CONVERT_API_SECRET);

// @desc    PDF - PPT
// @route   POST /api/pdf-pptx
// @access  Public
const pdfToPpt = asyncHandler(async (req, res) => {
  convertapi
    .convert("pdf", { File: "/path/to/tobedel.pptx" })
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

export { pdfToPpt };

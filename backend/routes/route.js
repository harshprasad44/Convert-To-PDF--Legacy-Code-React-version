import express from "express";
const router = express.Router();
import { pdfToPpt } from "../controllers/controller.js";

router.route("/pdf-pptx").get(pdfToPpt);

export default router;

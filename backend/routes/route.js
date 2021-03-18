import express from "express";
const router = express.Router();
import { toPdf } from "../controllers/controller.js";

router.route("/docx-pdf/:id/:FileName").get(toPdf);

export default router;

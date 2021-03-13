import express from "express";
const router = express.Router();
import { toPdf } from "../controllers/controller.js";

router.route("/to-pdf/:id").get(toPdf);

export default router;

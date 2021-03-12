import express from "express";
const router = express.Router();
import { toPdf, testing } from "../controllers/controller.js";

router.route("/to-pdf/:id").get(toPdf);
router.route("/test").get(testing);

export default router;

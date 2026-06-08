import { Router } from "express";
import ctrlWrapper from "../utils/ctrlWrapper.js";
import { fetchReviewsController } from "../controller/reviews.js";

const router = Router();

router.get("/", ctrlWrapper(fetchReviewsController));

export default router;

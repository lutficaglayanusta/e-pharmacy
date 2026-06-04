import { Router } from "express";
import {
  fetchProductsController,
  fetchProductByIdController,
} from "../controller/products.js";
import ctrlWrapper from "../utils/ctrlWrapper.js";

const router = Router();

router.get("/", ctrlWrapper(fetchProductsController));
router.get("/:id", ctrlWrapper(fetchProductByIdController));


export default router;
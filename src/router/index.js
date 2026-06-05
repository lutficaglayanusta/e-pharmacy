import { Router } from "express";
import authRoute from "./auth.js";
import storeRoute from "./store.js";
import productRoute from "./products.js";
import cartRoute from "./cart.js";

const router = Router();

router.use("/auth", authRoute)
router.use("/stores", storeRoute)
router.use("/products", productRoute)
router.use("/cart", cartRoute)

export default router;
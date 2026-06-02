import { Router } from "express";
import authRoute from "./auth.js";
import storeRoute from "./store.js";


const router = Router();

router.use("/auth", authRoute)
router.use("/stores", storeRoute)

export default router;
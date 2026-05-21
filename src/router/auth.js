import { Router } from "express";
import { loginController, logoutController, registerController } from "../controller/auth.js";
import ctrlWrapper from "../utils/ctrlWrapper.js";

const router = Router();


router.post("/register", ctrlWrapper(registerController))
router.post("/login", ctrlWrapper(loginController))
router.get("/logout", ctrlWrapper(logoutController))


export default router;
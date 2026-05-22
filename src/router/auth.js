import { Router } from "express";
import {
  loginController,
  logoutController,
  refreshController,
  registerController,
} from "../controller/auth.js";
import ctrlWrapper from "../utils/ctrlWrapper.js";
import { validateBody } from "../middleware/validateBody.js";
import { createUserSchema, loginSchema } from "../validation/auth.js";

const router = Router();

router.post(
  "/register",
  validateBody(createUserSchema),
  ctrlWrapper(registerController),
);
router.post("/login", validateBody(loginSchema), ctrlWrapper(loginController));
router.get("/logout", ctrlWrapper(logoutController));
router.get("/refresh", ctrlWrapper(refreshController));

export default router;

import { Router } from 'express';
import ctrlWrapper from '../utils/ctrlWrapper.js';
import { authenticate } from '../middleware/authenticate.js';
import {
  addToCartController,
  fetchCartController,
  removeFromCartController,
  deleteByOneController,
  checkoutController,
} from "../controller/cart.js";

const router = Router();

router.use(authenticate);

router.post("/", ctrlWrapper(addToCartController))
router.get("/", ctrlWrapper(fetchCartController))
router.delete("/:cartId", ctrlWrapper(removeFromCartController))
router.delete("/cart-one/:id", ctrlWrapper(deleteByOneController));
router.post("/checkout",ctrlWrapper(checkoutController))


export default router;
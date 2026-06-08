import {
  addToCartService,
  fetchCartService,
  removeFromCartService,
  deleteByOneService,
  checkoutService
} from "../service/cart.js";

export const addToCartController = async (req, res) => {
  const userId = req.user._id;

  const cart = await addToCartService(userId, req.body);

  res.status(201).json({
    message: "Product added to cart successfully",
    data: cart,
  });
};
export const fetchCartController = async (req, res) => {
  const userId = req.user._id;
  const cart = await fetchCartService(userId);
  res.status(200).json({
    message: "Cart fetched successfully",
    data: cart,
  });
};
export const removeFromCartController = async (req, res) => {
  const userId = req.user._id;

  await removeFromCartService(userId, req.params.cartId);
  res.status(200).json({
    message: "Product removed from cart successfully",
  });
};
export const deleteByOneController = async (req, res) => {
  const userId = req.user._id;

  const cart = await deleteByOneService(userId, req.params.id);

  res.status(200).json({
    message: "Product removed from cart successfully",
    data: cart,
  });
};
export const checkoutController = async (req, res) => {
  const order = await checkoutService(req.body,req.user._id);

  res.status(201).json({
    message: "Added successfully order",
    data: order,
  });
};

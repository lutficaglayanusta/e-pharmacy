import Cart from "../db/models/cart.js";
import Order from "../db/models/order.js";

export const addToCartService = async (userId, payload) => {
  const cart = await Cart.findOne({ name: payload.name, userId });

  if (cart) {
    cart.quantity += 1;
    await cart.save();
    return cart;
  }
  const newCart = await Cart.create({
    userId,
    ...payload,
  });

  return newCart;
};
export const fetchCartService = async (userId) => {
  const cart = await Cart.find({ userId });
  return cart;
};
export const removeFromCartService = async (userId, cartId) => {
  const cart = await Cart.findOne({ _id: cartId, userId });
  if (!cart) {
    throw new Error("Cart not found");
  }
  await Cart.deleteOne({ _id: cartId, userId });
  return;
};
export const deleteByOneService = async (userId, cartId) => {
  const cart = await Cart.findOne({ _id: cartId, userId });
  if (!cart) {
    throw new Error("Cart not found");
  }
  if (cart.quantity > 1) {
    cart.quantity -= 1;
    await cart.save();
    return cart;
  }
  await Cart.deleteOne({ _id: cartId, userId });
  return;
};
export const checkoutService = async (payload, id) => {
  const order = await Order.create({
    userId: id,
    ...payload,
  });
  await Cart.deleteMany({ userId: id });

  return order;
};

import { model, Schema } from "mongoose";

const orderSchema = new Schema({
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

const Order = model("Order", orderSchema);

export default Order;

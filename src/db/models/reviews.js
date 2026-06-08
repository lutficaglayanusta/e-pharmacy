import { model, Schema } from "mongoose";

const reviewSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  testimonial: {
    type: String,
    required: true,
  },
});

const Review = model("Review", reviewSchema)

export default Review

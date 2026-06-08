import Review from "../db/models/reviews.js";

export const fetchReviewsService = async (req, res) => {
  const reviews = await Review.find();

  return reviews;
};

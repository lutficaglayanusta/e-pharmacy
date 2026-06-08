import { fetchReviewsService } from "../service/reviews.js";

export const fetchReviewsController = async (req, res) => {
  const reviews = await fetchReviewsService();

  res.status(200).json({
    message: "fetched successfully reviews",
    data: reviews,
  });
};

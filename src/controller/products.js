import { parsePaginationParams } from "../utils/parsePaginationParams.js";
import { parseFilterParams } from "../utils/parseFilterParams.js";
import {
  fetchProductsService,
  fetchProductByIdService,
} from "../service/products.js";
import createHttpError from "http-errors";

export const fetchProductsController = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const filter = parseFilterParams(req.query);

  const products = await fetchProductsService({ page, perPage, filter });

  res.status(200).json({
    message: "Products fetched successfully",
    data: products,
  });
};
export const fetchProductByIdController = async (req, res) => {
  const { id } = req.params;
  const product = await fetchProductByIdService(id);

  if (!product) {
    return createHttpError(404, "Product not found");
  }
  res.status(200).json({
    message: "Product fetched successfully",
    data: product,
  });
};
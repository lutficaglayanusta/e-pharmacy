import { calculatePaginationData } from "../utils/calculatePaginationData.js";
import Product from "../db/models/product.js";

export const fetchProductsService = async ({ page, perPage, filter = {} }) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const productsQuery = Product.find();

  if (filter.category) {
    productsQuery.where("category").equals(filter.category);
  }

  if (filter.name) {
    
    const nameRegex = new RegExp(filter.name, "i");
    productsQuery.where("name").regex(nameRegex);
  }

  const productsCount = await Product.find()
    .merge(productsQuery)
    .countDocuments();

  const products = await productsQuery.skip(skip).limit(limit).exec();

  const paginationData = calculatePaginationData(productsCount, perPage, page);

  return {
    products,
    ...paginationData,
  };
};

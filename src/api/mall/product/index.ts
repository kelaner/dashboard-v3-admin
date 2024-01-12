import fetchApi from "@/api/mdapi/fetchApi";
import type * as Product from "./types/product";

/** 增 */
export function createProductDataApi(data: Product.CreateProductRequestData) {
  return null;
}

/** 删 */
export function deleteProductDataApi(id: string) {
  return null;
}

/** 改 */
export function updateProductDataApi(data: Product.UpdateProductRequestData) {
  return null;
}

/** 查 */
export function getProductDataApi(params?: Product.GetProductRequestData) {
  return fetchApi({
    model: "product",
    limit: params?.size,
    offset: params?.currentPage ? (params.currentPage - 1) * 10 : null,
    fields: "id name price inventory status",
    // where: {
    //   name: { _like: params.name },
    // },
  });
}

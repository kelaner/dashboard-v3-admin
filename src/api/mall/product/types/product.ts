export interface CreateProductRequestData {
  name: string;
}

export interface UpdateProductRequestData {
  id: string;
  name: string;
}

export interface GetProductRequestData {
  /** 当前页码 */
  currentPage: number;
  /** 查询条数 */
  size: number;
  /** 查询参数：商品名 */
  name?: string;
}

export interface GetProductData {
  id: string;
  name: string;
  price?: number;
  inventory?: number;
  status?: boolean;
}

export type GetProductResponseData = ApiResponseData<{
  list: GetProductData[];
  total: number;
}>;

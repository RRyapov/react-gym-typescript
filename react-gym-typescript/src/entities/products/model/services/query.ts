import { useQuery } from "@tanstack/react-query";
import { primaryApi } from '@shared/config/ky/index';

import { type ProductsForMainPageResponse } from "../types/types";

interface IGetProducts {
  productsForMainPage: ProductsForMainPageResponse[];
}

const PRODUCTS_FOR_MAIN_PAGE = "products-for-main-page" as const;


export const useQueryProductsForMainPage = () =>
  useQuery<IGetProducts[]>({
    queryKey: [PRODUCTS_FOR_MAIN_PAGE],
    queryFn: () => primaryApi.get("products").json(),
  });
import { ProductType } from "./ProductType";

export type CategoryType = {
  id: string;
  name: string;
  slug: string;
  products: ProductType[]
}
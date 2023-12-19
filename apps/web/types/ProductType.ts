export type ProductType = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  imageUrls: string[];
  price: number | null;
  color: string;
  sizes: number[];
  quantity?: number | 1;
  currency?: string;
}
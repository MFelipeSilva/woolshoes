export type ProductType = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  imageUrls: string[];
  price: number | null;
  quantity?: number | 1;
  currency?: string;
}
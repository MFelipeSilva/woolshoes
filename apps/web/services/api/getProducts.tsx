import Stripe from "stripe";

import { ProductType } from "@/types/ProductType";

export async function getProducts(): Promise<ProductType[]> {
  const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!, {
    apiVersion: "2023-10-16",
  });

  const products = await stripe.products.list();

  const formatedProducts = await Promise.all(
    products.data.map(async (product) => {
      const price = await stripe.prices.list({
        product: product.id,
      });
      return {
        id: product.id,
        price: price.data[0].unit_amount,
        name: product.name,
        image: product.images[0],
        description: product.description,
        currency: price.data[0].currency,
      };
    })
  );

  return formatedProducts;
}

export async function getProduct(id: string) {
  const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!, {
    apiVersion: "2023-10-16",
  });

  const product = await stripe.products.retrieve(id);

  const price = await stripe.prices.list({
    product: product.id,
  });

  return {
    id: product.id,
    price: price.data[0].unit_amount,
    name: product.name,
    image: product.images[0],
    description: product.description,
    currency: price.data[0].currency,
  };
}

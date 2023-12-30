import { prisma } from "@lib/prisma";

import { NextApiRequest, NextApiResponse } from "next";

export default async function productsSlug(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { slug } = req.query;

  const slugValue = Array.isArray(slug) ? slug[0] : slug;

  try {
    const product = await prisma.product.findFirst({
      where: {
        slug: {
          equals: slugValue,
        },
      },
    });

    if (!product) {
      res.status(404).json({ error: "Product not found." });
      return;
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Error when finding product." });
  }
}

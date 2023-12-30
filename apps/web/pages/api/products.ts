import { prisma } from "@lib/prisma";

import { NextApiRequest, NextApiResponse } from "next";

export default async function products(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Error when finding products." });
  }
}

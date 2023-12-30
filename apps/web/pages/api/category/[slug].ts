import { prisma } from "@lib/prisma";

import { NextApiRequest, NextApiResponse } from "next";

export default async function category(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { slug } = req.query;

  const slugValue = Array.isArray(slug) ? slug[0] : slug;

  try {
    const category = await prisma.category.findFirst({
      where: {
        slug: {
          equals: slugValue,
        },
      },
      include: {
        products: true,
      },
    });

    if (!category) {
      res.status(404).json({ error: "Category not found." });
    }
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: "Error when finding category." });
  }
}

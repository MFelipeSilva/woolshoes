import express from "express";
import { prisma } from "../helpers/prisma";

import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/products", async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Error when finding products." });
  }
});

app.get("/products/:slug", async (req, res) => {
  const { slug } = req.params;
  try {
    const product = await prisma.product.findFirst({
      where: {
        slug,
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
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>
  console.log(`🚀 HTTP server running on http://localhost:${PORT}/products`)
);

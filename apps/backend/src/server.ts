import fastify from "fastify";

import cors from "@fastify/cors";

import { prisma } from "../lib/prisma";

const app = fastify();

app.register(cors);

app.get("/category/:slug", async (request, reply) => {
  const { slug }: any = request.params;
  try {
    const category = await prisma.category.findFirst({
      where: {
        slug,
      },
      include: {
        products: true,
      },
    });
    if (!category) {
      reply.status(404).send({ error: "Category not found." });
      return;
    }
    reply.send(category);
  } catch (error) {
    reply.status(500).send(error);
  }
});

app.get("/product/:slug", async (request, reply) => {
  const { slug }: any = request.params;
  try {
    const product = await prisma.product.findFirst({
      where: {
        slug,
      },
    });

    if (!product) {
      reply.status(404).send({ error: "Product not found." });
      return;
    }
    reply.send(product);
  } catch (error) {
    reply.status(500).send(error);
  }
});

app
  .listen({
    host: "0.0.0.0",
    port: process.env.PORT ? Number(process.env.PORT) : 3001,
  })
  .then(() => console.log("HTTP Server Running 🚀"));

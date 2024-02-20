import fastify from "fastify";

import * as dotenv from "dotenv";

import axios from "axios";

import cors from "@fastify/cors";

import cron from "node-cron";

import { hash, compare } from "bcrypt";

import jwt, { Secret } from "jsonwebtoken";

import { prisma } from "../lib/prisma";

import {
  LoginUserType,
  RegisterUserType,
  UserType,
} from "../../web/types/UserType";

const app = fastify();
dotenv.config();
app.register(cors);

const secretKey: Secret = process.env.JWT_SECRET_KEY as Secret;

app.get("/category/:slug1/:slug2?", async (request, reply) => {
  const { slug1, slug2 }: any = request.params;

  try {
    const category1 = await prisma.category.findFirst({
      where: {
        slug: slug1,
      },
      include: {
        products: true,
      },
    });

    if (!category1) {
      reply.status(404).send({ error: "Category not found." });
      return;
    }

    if (slug2) {
      const category2 = await prisma.category.findFirst({
        where: {
          slug: slug2,
        },
        include: {
          products: true,
        },
      });

      if (!category1 || !category2) {
        reply.status(404).send({ error: "Category not found." });
        return;
      }

      category1.products = [...category1.products, ...category2.products];

      reply.send(category1);
    } else {
      return reply.send(category1);
    }
  } catch (error) {
    reply.status(500).send({ error: "Error when finding category." });
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
    reply.status(500).send({ error: "Error when finding product." });
  }
});

app.post("/register", async (request, reply) => {
  try {
    const body = (await request.body) as RegisterUserType;
    const { email, name, password, confirmPassword } = body;

    const existingUserEmail = await prisma.user.findUnique({
      where: { email: email },
    });
    if (existingUserEmail) {
      return reply
        .status(409)
        .send({ user: null, message: "This email is alredy used" });
    }

    if (password !== confirmPassword) {
      return reply.status(409).send({
        user: null,
        message: "Check your password, a problem occurred!",
      });
    }

    const hashPassword = await hash(password, 10);

    const createUser = await prisma.user.create({
      data: { name, email, password: hashPassword },
    });

    const { password: newUserPassword, ...rest } = createUser;

    return reply
      .status(201)
      .send({ user: rest, message: "User created successfully" });
  } catch (error) {
    reply.status(500).send(error);
  }
});

app.post("/login", async (request, reply) => {
  try {
    const body = (await request.body) as LoginUserType;
    const { email, password } = body;

    const existingUser = await prisma.user.findFirst({
      where: { email: email },
    });

    if (!existingUser) {
      return reply.status(400).send({
        success: false,
        error: "Email ou senha incorretos.",
        fieldWithError: "email",
      });
    }

    const passwordMatch = await compare(password, existingUser.password);

    if (passwordMatch) {
      const user: UserType = {
        id: existingUser.id,
        name: existingUser.name,
        email: existingUser.email,
      };
      const token = jwt.sign(user, secretKey);

      return reply.status(200).send({ success: true, accessToken: token });
    } else {
      return reply.status(400).send({
        success: false,
        error: "Email ou senha incorretos.",
        fieldWithError: "password",
      });
    }
  } catch (error) {
    reply.status(500).send({ success: false, error: error });
  }
});

app.get("/keep-alive", async (request, reply) => {
  reply.send("Server is alive");
});

cron.schedule("*/5 * * * *", async () => {
  try {
    await axios.get("https://woolshoes-api.onrender.com/keep-alive");
  } catch (error) {
    console.error("Error sending keep-alive request:", error);
  }
});

app
  .listen({
    host: "0.0.0.0",
    port: process.env.PORT ? Number(process.env.PORT) : 3001,
  })
  .then(() => console.log("HTTP Server Running 🚀"));

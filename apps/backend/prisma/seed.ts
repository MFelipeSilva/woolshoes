import { prisma } from "../lib/prisma";

async function main() {
  try {
    const menCategory = await prisma.category.create({
      data: {
        name: "Men",
        slug: "men",
      },
    });

    const menProducts = [
      {
        name: "Tênis SuperLight Runners - Masculino",
        slug: "tênis-light-runners-masculino",
        description: "Confortável e bonito para se utilizar no seu dia a dia.",
        imageUrls: [
          "https://i.ibb.co/3dG8FSC/01-superlight-runners.png",
          "https://i.ibb.co/0tpdRqg/02-superlight-runners.png",
          "https://i.ibb.co/xYryR0N/03-superlight-runners.png",
          "https://i.ibb.co/71ZsMH1/04-superlight-runners.png",
        ],
        price: 25700,
        color: "Preto (Sola Cinza)",
        sizes: [37, 38, 39, 40, 41, 42, 43],
        categoryId: menCategory.id,
      },
      {
        name: "Tênis Tree Flyer 2 - Masculino",
        slug: "tênis-tree-flyer-2-masculino",
        description:
          "Totalmente confortável e resistente, feito para caminhadas.",
        imageUrls: [
          "https://i.ibb.co/YD3jgx5/01-tree-flyer-02.png",
          "https://i.ibb.co/7pHWmz2/02-tree-flyer-02.png",
          "https://i.ibb.co/Y3z1CCH/03-tree-flyer-02.png",
          "https://i.ibb.co/QfQhbD5/04-tree-flyer-02.png",
        ],
        price: 33000,
        color: "Preto/Azul (Sola Cinza)",
        sizes: [37, 38, 39, 40, 41, 42, 43, 44],
        categoryId: menCategory.id,
      },
      {
        name: "Tênis Dasher Mizzles - Masculino",
        slug: "tênis-dasher-mizzles-masculino",
        description:
          "Bonito e resistente, utilizado para caminhadas e corridas.",
        imageUrls: [
          "https://i.ibb.co/BBqp6tv/01-dasher-mizzles.png",
          "https://i.ibb.co/cvgY7sn/02-dasher-mizzles.png",
          "https://i.ibb.co/mcrHYKM/03-dasher-mizzles.png",
          "https://i.ibb.co/9sBnCWH/04-dasher-mizzles.png",
        ],
        price: 25500,
        color: "Cinza (Sola Bege)",
        sizes: [37, 38, 39, 40, 41, 42, 43, 44],
        categoryId: menCategory.id,
      },
      {
        name: "Tênis Golf Dashers - Masculino",
        slug: "tênis-golf-dashers-masculino",
        description: "Muito estiloso e resistente para praticar esportes.",
        imageUrls: [
          "https://i.ibb.co/qJwCFDp/01-golf-dashers.png",
          "https://i.ibb.co/y0V5MVq/02-golf-dashers.png",
          "https://i.ibb.co/Dzz1fxz/03-golf-dashers.png",
          "https://i.ibb.co/2NqDYvd/04-golf-dashers.png",
        ],
        price: 24400,
        color: "Preto (Sola Branca)",
        sizes: [37, 38, 39, 40, 41, 42, 43],
        categoryId: menCategory.id,
      },
      {
        name: "Tênis Tree Dasher Relay - Masculino",
        slug: "tênis-tree-dasher-relay-masculino",
        description: "Resistente e confortável, utilizado para caminhada.",
        imageUrls: [
          "https://i.ibb.co/kDp09Nn/01-tree-dasher-relay.png",
          "https://i.ibb.co/5kqT1f7/02-tree-dasher-relay.png",
          "https://i.ibb.co/dprNq8L/03-tree-dasher-relay.png",
          "https://i.ibb.co/d23qsJv/04-tree-dasher-relay.png",
        ],
        price: 24700,
        color: "Preto (Sola Preta)",
        sizes: [37, 38, 39, 40, 41, 42, 43],
        categoryId: menCategory.id,
      },
      {
        name: "Tênis Dasher Fluffs - Masculino",
        slug: "tênis-dasher-fluffs-masculino",
        description:
          "Tênis com uma enorme resistência, utilizado para esportes e caminhadas.",
        imageUrls: [
          "https://i.ibb.co/VC08qm0/01-dasher-fluffs.png",
          "https://i.ibb.co/PYSR6wj/02-dasher-fluffs.png",
          "https://i.ibb.co/KqLRkCM/03-dasher-fluffs.png",
          "https://i.ibb.co/WGN2cS9/04-dasher-fluffs.png",
        ],
        price: 34000,
        color: "Preto (Sola Preta)",
        sizes: [37, 38, 39, 40, 41, 42, 43],
        categoryId: menCategory.id,
      },
      {
        name: "Tênis Tree Dasher 2 - Masculino",
        slug: "tênis-tree-dasher-2-masculino",
        description:
          "Moderno e estiloso, utilizado para caminhadas e esportes.",
        imageUrls: [
          "https://i.ibb.co/LknzdkN/01-tree-dasher-02.png",
          "https://i.ibb.co/Ns12ZbW/02-tree-dasher-02.png",
          "https://i.ibb.co/0BKFwfw/03-tree-dasher-02.png",
          "https://i.ibb.co/PGz6wrv/04-tree-dasher-02.png",
        ],
        price: 37500,
        color: "Cinza (Sola Cinza)",
        sizes: [37, 38, 39, 40, 41, 42, 43],
        categoryId: menCategory.id,
      },
      {
        name: "Tênis Tree Runners - Masculino",
        slug: "tênis-tree-runners-masculino",
        description: "Tênis utilizado para caminhadas, e para o dia a dia.",
        imageUrls: [
          "https://i.ibb.co/vZ5fWyq/01-tree-runners.png",
          "https://i.ibb.co/ggyF1n7/02-tree-runners.png",
          "https://i.ibb.co/VwTVYmd/03-tree-runners.png",
          "https://i.ibb.co/RCW67PZ/04-tree-runners.png",
        ],
        price: 22000,
        color: "Cinza (Sola Branca)",
        sizes: [37, 38, 39, 40, 41, 42, 43],
        categoryId: menCategory.id,
      },
      {
        name: "Tênis Flyer Mizzles - Masculino",
        slug: "tênis-flyer-mizzles-masculino",
        description:
          "Tem enorme conforto e durabilidade, utilizado para praticar esportes e no dia a dia",
        imageUrls: [
          "https://i.ibb.co/JpMD0qB/01-flyer-mizzles.png",
          "https://i.ibb.co/hLLfTYs/02-flyer-mizzles.png",
          "https://i.ibb.co/XFzXb00/03-flyer-mizzles.png",
          "https://i.ibb.co/QHhy8wT/04-flyer-mizzles.png",
        ],
        price: 30000,
        color: "Azul (Sola Branca)",
        sizes: [38, 39, 40, 41, 42, 43, 44, 45],
        categoryId: menCategory.id,
      },
    ];

    await prisma.product.createMany({ data: menProducts });

    const womenCategory = await prisma.category.create({
      data: {
        name: "Women",
        slug: "women",
      },
    });

    const womenProducts = [
      {
        name: "Tênis Tree Runners - Feminino",
        slug: "tênis-tree-runners-feminino",
        description:
          "Tênis bonito e estiloso, utilizado para caminhadas e no dia a dia",
        imageUrls: [
          "https://i.ibb.co/6ybDfSJ/01-tree-runners-women.png",
          "https://i.ibb.co/rHQRdB4/02-tree-runners-women.png",
          "https://i.ibb.co/2j3yGyH/03-tree-runners-women.png",
          "https://i.ibb.co/yXXmQns/04-tree-runners-women.png",
        ],
        price: 24500,
        color: "Vermelho Vinho (Sola Branca)",
        sizes: [34, 35, 36, 37, 38, 39, 40],
        categoryId: womenCategory.id,
      },
      {
        name: "Tênis Tree Dasher 2 - Feminino",
        slug: "tênis-tree-dasher-2-feminino",
        description:
          "Tênis estiloso e resistente, utilizado nos esportes e para caminhar.",
        imageUrls: [
          "https://i.ibb.co/Y0Tq791/01-tree-dasher-02-women.png",
          "https://i.ibb.co/NtL7jXP/02-tree-dasher-02-women.png",
          "https://i.ibb.co/RTcz3rQ/03-tree-dasher-02-women.png",
          "https://i.ibb.co/qnwjRb6/04-tree-dasher-02-women.png",
        ],
        price: 27500,
        color: "Branco (Sola Branca)",
        sizes: [34, 35, 36, 37, 38, 39],
        categoryId: womenCategory.id,
      },
      {
        name: "Tênis Runner-up Mizzles - Feminino",
        slug: "tênis-runner-up-mizzles-feminino",
        description: "Tênis confortável para usar no dia a dia.",
        imageUrls: [
          "https://i.ibb.co/yVyRQW5/01-runner-up-mizzles-women.png",
          "https://i.ibb.co/8xLM5NJ/02-runner-up-mizzles-women.png",
          "https://i.ibb.co/4jmwFp3/03-runner-up-mizzles-women.png",
          "https://i.ibb.co/pn4wz0n/04-runner-up-mizzles-women.png",
        ],
        price: 23500,
        color: "Vermelho Vinho (Sola Vinho)",
        sizes: [34, 35, 36, 37, 38, 39],
        categoryId: womenCategory.id,
      },
      {
        name: "Tênis Runner Fluffs - Feminino",
        slug: "tênis-runner-fluffs-feminino",
        description:
          "Confortável e com um estilo diferenciado, para se usar no dia a dia.",
        imageUrls: [
          "https://i.ibb.co/NYpbwPY/01-runner-fluffs-women.png",
          "https://i.ibb.co/YPRgRQn/02-runner-fluffs-women.png",
          "https://i.ibb.co/S6hfxVq/03-runner-fluffs-women.png",
          "https://i.ibb.co/b2L73TT/04-runner-fluffs-women.png",
        ],
        price: 26700,
        color: "Preto (Sola Branca)",
        sizes: [34, 35, 36, 37, 38],
        categoryId: womenCategory.id,
      },
      {
        name: "Tênis Tree Loungers - Feminino",
        slug: "tênis-tree-loungers-feminino",
        description:
          "Com estilo simples, porém confortável para sair e usar no seu dia.",
        imageUrls: [
          "https://i.ibb.co/2kg0ktD/01-tree-loungers-women.png",
          "https://i.ibb.co/nPqQTRw/02-tree-loungers-women.png",
          "https://i.ibb.co/4trPSbR/03-tree-loungers-women.png",
          "https://i.ibb.co/5LDL0Ct/04-tree-loungers-women.png",
        ],
        price: 22500,
        color: "Rosa (Sola Branca)",
        sizes: [34, 35, 36, 37, 38, 39, 40],
        categoryId: womenCategory.id,
      },
      {
        name: "Tênis Wool Pipers - Feminino",
        slug: "tênis-wool-flakes-feminino",
        description: "Estilo sofisticado, moderno e confortável.",
        imageUrls: [
          "https://i.ibb.co/yQFF5m1/01-wool-pipers-women.png",
          "https://i.ibb.co/nCDrJ8G/02-wool-pipers-women.png",
          "https://i.ibb.co/WtBcb25/03-wool-pipers-women.png",
          "https://i.ibb.co/j3GctLc/04-wool-pipers-women.png",
        ],
        price: 23700,
        color: "Cinza (Sola Branca)",
        sizes: [34, 35, 36, 37, 38, 39, 40],
        categoryId: womenCategory.id,
      },
      {
        name: "Tênis SuperLight Tree Runners - Feminino",
        slug: "tênis-superlight-tree-runners-feminino",
        description: "Resistente e estiloso, utilizado para caminhadas.",
        imageUrls: [
          "https://i.ibb.co/JH8dNxM/01-superlight-tree-runners-women.png",
          "https://i.ibb.co/ypnkYLZ/02-superlight-tree-runners-women.png",
          "https://i.ibb.co/TrJSMyK/03-superlight-tree-runners-women.png",
          "https://i.ibb.co/4sqYCy6/04-superlight-tree-runners-women.png",
        ],
        price: 28000,
        color: "Rosa (Sola Rosa)",
        sizes: [34, 35, 36, 37, 38, 39],
        categoryId: womenCategory.id,
      },
      {
        name: "Tênis Golf Dashers - Feminino",
        slug: "tênis-golf-dashers-feminino",
        description:
          "Muito estiloso e resistente, feito para praticar esportes.",
        imageUrls: [
          "https://i.ibb.co/d2T4Mty/01-golf-dashers-women.png",
          "https://i.ibb.co/JjV0s7N/02-golf-dashers-women.png",
          "https://i.ibb.co/PgdwR91/03-golf-dashers-women.png",
          "https://i.ibb.co/3CbGG66/04-golf-dashers-women.png",
        ],
        price: 30000,
        color: "Branco (Sola Branca)",
        sizes: [34, 35, 36, 37, 38, 39],
        categoryId: womenCategory.id,
      },
      {
        name: "Tênis Runner Mizzles - Feminino",
        slug: "tênis-runner-mizzles-feminino",
        description: "Confortável e aconchegante para se usar no dia a dia.",
        imageUrls: [
          "https://i.ibb.co/p67JHM8/01-runner-mizzles-women.png",
          "https://i.ibb.co/3mY8pp2/02-runner-mizzles-women.png",
          "https://i.ibb.co/XsnDcKb/03-runner-mizzles-women.png",
          "https://i.ibb.co/JRgV35q/04-runner-mizzles-women.png",
        ],
        price: 24900,
        color: "Vermelho Vinho (Sola Branca)",
        sizes: [34, 35, 36, 37, 38, 39, 40],
        categoryId: womenCategory.id,
      },
    ];

    await prisma.product.createMany({
      data: womenProducts,
    });

    const kidsCategory = await prisma.category.create({
      data: {
        name: "Kids",
        slug: "kids",
      },
    });

    const kidsProducts = [
      {
        name: "Tênis Wool Loungers - Infantil",
        slug: "tênis-wool-loungers-infantil",
        description: "Trás conforto e aconchego para os pés da criança.",
        imageUrls: [
          "https://i.ibb.co/Hnx7hN8/01-wool-loungers-kids.png",
          "https://i.ibb.co/nRkV9qv/02-wool-loungers-kids.png",
          "https://i.ibb.co/SVsZcPF/03-wool-loungers-kids.png",
          "https://i.ibb.co/mDJYHfd/04-wool-loungers-kids.png",
        ],
        price: 26900,
        color: "Preto (Sola Branca)",
        sizes: [25, 26, 27],
        categoryId: kidsCategory.id,
      },
      {
        name: "Tênis Wool Runners - Infantil",
        slug: "tênis-wool-runners-infantil",
        description:
          "Confortável e resistente, as crianças podem brincar a vontade",
        imageUrls: [
          "https://i.ibb.co/ydC20mM/01-wool-runners-kids.png",
          "https://i.ibb.co/Wn5g8L7/02-wool-runners-kids.png",
          "https://i.ibb.co/MNVLCkq/03-wool-runners-kids.png",
          "https://i.ibb.co/VDPwPLn/04-wool-runners-kids.png",
        ],
        price: 27600,
        color: "Vermelho (Sola Branca)",
        sizes: [24, 25, 26],
        categoryId: kidsCategory.id,
      },
    ];

    await prisma.product.createMany({
      data: kidsProducts,
    });

    console.log("Seed completed successfully");
  } catch (error) {
    console.error("Error adding database", error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });

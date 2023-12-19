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
          "https://woolshoes.s3.amazonaws.com/01-superlight-runners.png",
          "https://woolshoes.s3.amazonaws.com/02-superlight-runners.png",
          "https://woolshoes.s3.amazonaws.com/03-superlight-runners.png",
          "https://woolshoes.s3.amazonaws.com/04-superlight-runners.png",
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
          "https://woolshoes.s3.amazonaws.com/01-tree-flyer-02.png",
          "https://woolshoes.s3.amazonaws.com/02-tree-flyer-02.png",
          "https://woolshoes.s3.amazonaws.com/03-tree-flyer-02.png",
          "https://woolshoes.s3.amazonaws.com/04-tree-flyer-02.png",
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
          "https://woolshoes.s3.amazonaws.com/01-dasher-mizzles.png",
          "https://woolshoes.s3.amazonaws.com/02-dasher-mizzles.png",
          "https://woolshoes.s3.amazonaws.com/03-dasher-mizzles.png",
          "https://woolshoes.s3.amazonaws.com/04-dasher-mizzles.png",
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
          "https://woolshoes.s3.amazonaws.com/01-golf-dashers.png",
          "https://woolshoes.s3.amazonaws.com/02-golf-dashers.png",
          "https://woolshoes.s3.amazonaws.com/03-golf-dashers.png",
          "https://woolshoes.s3.amazonaws.com/04-golf-dashers.png",
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
          "https://woolshoes.s3.amazonaws.com/01-tree-dasher-relay.png",
          "https://woolshoes.s3.amazonaws.com/02-tree-dasher-relay.png",
          "https://woolshoes.s3.amazonaws.com/03-tree-dasher-relay.png",
          "https://woolshoes.s3.amazonaws.com/04-tree-dasher-relay.png",
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
          "https://woolshoes.s3.amazonaws.com/01-dasher-fluffs.png",
          "https://woolshoes.s3.amazonaws.com/02-dasher-fluffs.png",
          "https://woolshoes.s3.amazonaws.com/03-dasher-fluffs.png",
          "https://woolshoes.s3.amazonaws.com/04-dasher-fluffs.png",
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
          "https://woolshoes.s3.amazonaws.com/01-tree-dasher-02.png",
          "https://woolshoes.s3.amazonaws.com/02-tree-dasher-02.png",
          "https://woolshoes.s3.amazonaws.com/03-tree-dasher-02.png",
          "https://woolshoes.s3.amazonaws.com/04-tree-dasher-02.png",
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
          "https://woolshoes.s3.amazonaws.com/01-tree-runners.png",
          "https://woolshoes.s3.amazonaws.com/02-tree-runners.png",
          "https://woolshoes.s3.amazonaws.com/03-tree-runners.png",
          "https://woolshoes.s3.amazonaws.com/04-tree-runners.png",
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
          "https://woolshoes.s3.amazonaws.com/01-flyer-mizzles.png",
          "https://woolshoes.s3.amazonaws.com/02-flyer-mizzles.png",
          "https://woolshoes.s3.amazonaws.com/03-flyer-mizzles.png",
          "https://woolshoes.s3.amazonaws.com/04-flyer-mizzles.png",
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
          "https://woolshoes.s3.amazonaws.com/01-tree-runners-women.png",
          "https://woolshoes.s3.amazonaws.com/02-tree-runners-women.png",
          "https://woolshoes.s3.amazonaws.com/03-tree-runners-women.png",
          "https://woolshoes.s3.amazonaws.com/04-tree-runners-women.png",
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
          "https://woolshoes.s3.amazonaws.com/01-tree-dasher-02-women.png",
          "https://woolshoes.s3.amazonaws.com/02-tree-dasher-02-women.png",
          "https://woolshoes.s3.amazonaws.com/03-tree-dasher-02-women.png",
          "https://woolshoes.s3.amazonaws.com/04-tree-dasher-02-women.png",
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
          "https://woolshoes.s3.amazonaws.com/01-runner-up-mizzles-women.png",
          "https://woolshoes.s3.amazonaws.com/02-runner-up-mizzles-women.png",
          "https://woolshoes.s3.amazonaws.com/03-runner-up-mizzles-women.png",
          "https://woolshoes.s3.amazonaws.com/04-runner-up-mizzles-women.png",
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
          "https://woolshoes.s3.amazonaws.com/01-runner-fluffs-women.png",
          "https://woolshoes.s3.amazonaws.com/02-runner-fluffs-women.png",
          "https://woolshoes.s3.amazonaws.com/03-runner-fluffs-women.png",
          "https://woolshoes.s3.amazonaws.com/04-runner-fluffs-women.png",
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
          "https://woolshoes.s3.amazonaws.com/01-tree-loungers-women.png",
          "https://woolshoes.s3.amazonaws.com/02-tree-loungers-women.png",
          "https://woolshoes.s3.amazonaws.com/03-tree-loungers-women.png",
          "https://woolshoes.s3.amazonaws.com/04-tree-loungers-women.png",
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
          "https://woolshoes.s3.amazonaws.com/01-wool-pipers-women.png",
          "https://woolshoes.s3.amazonaws.com/02-wool-pipers-women.png",
          "https://woolshoes.s3.amazonaws.com/03-wool-pipers-women.png",
          "https://woolshoes.s3.amazonaws.com/04-wool-pipers-women.png",
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
          "https://woolshoes.s3.amazonaws.com/01-superlight-tree-runners-women.png",
          "https://woolshoes.s3.amazonaws.com/02-superlight-tree-runners-women.png",
          "https://woolshoes.s3.amazonaws.com/03-superlight-tree-runners-women.png",
          "https://woolshoes.s3.amazonaws.com/04-superlight-tree-runners-women.png",
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
          "https://woolshoes.s3.amazonaws.com/01-golf-dashers-women.png",
          "https://woolshoes.s3.amazonaws.com/02-golf-dashers-women.png",
          "https://woolshoes.s3.amazonaws.com/03-golf-dashers-women.png",
          "https://woolshoes.s3.amazonaws.com/04-golf-dashers-women.png",
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
          "https://woolshoes.s3.amazonaws.com/01-runner-mizzles-women.png",
          "https://woolshoes.s3.amazonaws.com/02-runner-mizzles-women.png",
          "https://woolshoes.s3.amazonaws.com/03-runner-mizzles-women.png",
          "https://woolshoes.s3.amazonaws.com/04-runner-mizzles-women.png",
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
          "https://woolshoes.s3.amazonaws.com/01-wool-loungers-kids.png",
          "https://woolshoes.s3.amazonaws.com/02-wool-loungers-kids.png",
          "https://woolshoes.s3.amazonaws.com/03-wool-loungers-kids.png",
          "https://woolshoes.s3.amazonaws.com/04-wool-loungers-kids.png",
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
          "https://woolshoes.s3.amazonaws.com/01-wool-runners-kids.png",
          "https://woolshoes.s3.amazonaws.com/02-wool-runners-kids.png",
          "https://woolshoes.s3.amazonaws.com/03-wool-runners-kids.png",
          "https://woolshoes.s3.amazonaws.com/04-wool-runners-kids.png",
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

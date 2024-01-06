"use client";

import Link from "next/link";

import { useQuery } from "react-query";

import { IoAlertCircleOutline } from "react-icons/io5";

import { Layout } from "@layout";

import { getCategory, getProduct } from "@lib/api";

import { ProductType } from "@/types/ProductType";
import { CategoryType } from "@/types/CategoryType";

import { formatPrice } from "@helpers/formatPrice";
import { assessments } from "@helpers/assessments";

import { useCart } from "@providers/cart";

import { Stars } from "@components/Stars";

import { PrimaryButton } from "ui";

import {
  CardsProductsSkeleton,
  ImagesContainerSkeleton,
  ButtonSkeleton,
  DescriptionSkeleton,
  ImageSkeleton,
  ImagesSkeleton,
  TitleSkeleton,
} from "@components/Skeletons/ProductSkeleton";

import {
  Container,
  MainImage,
  ProductImage,
  Title,
  Price,
  SelectSize,
  SubTitle,
  ButtonSize,
  Buttons,
  ProductColor,
  ButtonColor,
  ProductImages,
  ContentImages,
  ReviewsContainer,
  ReviewsCard,
  CommentTitle,
  CommentDescription,
  ReviewsContent,
  ReviewsTitle,
  SizeAlert,
  ProductPath,
  CardContent,
  ContentMain,
  ImagesAndDescription,
  ImagesContainer,
  DescriptionContainer,
  DescriptionTitle,
  DescriptionText,
  Rows,
  DescriptionSubTitle,
  DetailsAndRecommendations,
  RecommendationsContainer,
  CardProducts,
  Image,
  MetaProducts,
  DetailsContainer,
  RecommendationsTitle,
  Recommendations,
  DetailsHeader,
  StarsContent,
  FreeShippingContainer,
  TextFreeShipping,
  Color,
  Size,
} from "./styles";

type ProductIdParams = {
  params: {
    slug: string;
  };
};

export default function ProductId({ params: { slug } }: ProductIdParams) {
  const { data: product, isLoading } = useQuery(
    ["product", slug],
    () => getProduct(slug),
    {
      enabled: !!slug,
    }
  ) as { data: ProductType; isLoading: boolean };

  const { data: category } = useQuery(["products"], () =>
    getCategory("men")
  ) as { data: CategoryType; isLoading: boolean };

  const { addProductToCart } = useCart();

  return (
    <Layout>
      <Container>
        <ContentMain>
          <ImagesAndDescription>
            {isLoading || !product ? (
              <ImagesContainerSkeleton>
                <ProductImages>
                  {[1, 2, 3, 4].map((_, index) => (
                    <ImagesSkeleton key={index} />
                  ))}
                </ProductImages>
                <MainImage>
                  <ImageSkeleton />
                </MainImage>
              </ImagesContainerSkeleton>
            ) : (
              <ImagesContainer>
                <ProductImages>
                  {product?.imageUrls?.map((image: any, index) => (
                    <ContentImages key={index} src={image} />
                  ))}
                </ProductImages>
                <MainImage>
                  <ProductImage src={product.imageUrls[0]} />
                </MainImage>
              </ImagesContainer>
            )}
            {isLoading || !product ? (
              <DescriptionSkeleton />
            ) : (
              <DescriptionContainer>
                <DescriptionTitle>Descrição do produto</DescriptionTitle>
                <Rows>
                  <DescriptionText>
                    Estiloso e sofisticado, produzido pensando no seu conforto
                    ao utiliza-lo para praticar esportes físicos ou no seu dia a
                    dia. Com materiais na parte superior 100% algodão orgânico e
                    solas de borracha para permitir uma enorme leveza e
                    resistência.
                  </DescriptionText>
                </Rows>
                <Rows>
                  <DescriptionSubTitle>Nome:&nbsp;</DescriptionSubTitle>
                  <DescriptionText>{product.name}</DescriptionText>
                </Rows>
                <Rows>
                  <DescriptionSubTitle>Marca:&nbsp;</DescriptionSubTitle>
                  <DescriptionText>Allbirds</DescriptionText>
                </Rows>
                <Rows>
                  <DescriptionSubTitle>Gênero:&nbsp;</DescriptionSubTitle>
                  <DescriptionText>
                    {product.name.split(" ").pop()}
                  </DescriptionText>
                </Rows>
                <Rows>
                  <DescriptionSubTitle>Origem:&nbsp;</DescriptionSubTitle>
                  <DescriptionText>Internacional</DescriptionText>
                </Rows>
              </DescriptionContainer>
            )}
          </ImagesAndDescription>
          <DetailsAndRecommendations>
            <DetailsContainer>
              <DetailsHeader>
                <ProductPath>
                  <Link href="/">Home</Link> /{" "}
                  <Link href="/products/men">Products</Link> /
                </ProductPath>
                <Title>{product?.name}</Title>
                <StarsContent>
                  <Stars rating={4.5} /> ({assessments.length}) avaliações.
                </StarsContent>
              </DetailsHeader>
              <Price>
                Por apenas: <span>{formatPrice(product?.price)}</span>
              </Price>
              <ProductColor>
                {isLoading || !product ? (
                  <TitleSkeleton active size="large" />
                ) : (
                  <SubTitle>
                    Cor do produto: <span>{product.color}</span>
                  </SubTitle>
                )}
                <Buttons>
                  <ButtonColor type="button" aria-label="product color">
                    {isLoading || !product ? (
                      <ButtonSkeleton active shape="circle" />
                    ) : (
                      <Color color={product.color} />
                    )}
                  </ButtonColor>
                </Buttons>
              </ProductColor>
              <SelectSize>
                <SubTitle>Selecione o tamanho:</SubTitle>
                <Buttons>
                  {product?.sizes?.map((size: number, index) => (
                    <ButtonSize
                      type="button"
                      aria-label="product color"
                      key={index}
                    >
                      <Size>{size}</Size>
                    </ButtonSize>
                  ))}
                </Buttons>
              </SelectSize>
              <SizeAlert>
                Caso tenha problemas com tamanho de tênis, recomendamos pegar
                uma <span>numeração maior</span>.
              </SizeAlert>
              <PrimaryButton onClick={() => addProductToCart(product)}>
                Adicionar ao carrinho
              </PrimaryButton>
            </DetailsContainer>
            <FreeShippingContainer>
              <IoAlertCircleOutline />
              <TextFreeShipping>
                Todas as compras acima de R$299 são elegíveis para frete grátis.
              </TextFreeShipping>
            </FreeShippingContainer>
            <RecommendationsContainer>
              <RecommendationsTitle>Recomendações</RecommendationsTitle>
              <Recommendations>
                {isLoading || !product
                  ? [1, 2].map((_, index) => (
                      <CardsProductsSkeleton key={index} />
                    ))
                  : category?.products
                      ?.slice(2, 4)
                      .map((product: ProductType) => (
                        <Link
                          key={product.id}
                          href={`/product/${product.slug}`}
                        >
                          <CardProducts
                            cover={
                              <Image
                                src={product.imageUrls[0]}
                                alt="product images"
                              />
                            }
                          >
                            <MetaProducts title={product.name} />
                          </CardProducts>
                        </Link>
                      ))}
              </Recommendations>
            </RecommendationsContainer>
          </DetailsAndRecommendations>
        </ContentMain>
        <ReviewsContainer>
          <ReviewsContent>
            <ReviewsTitle>{assessments.length} comentários</ReviewsTitle>
            <CardContent>
              {assessments.map((assessment) => (
                <ReviewsCard key={assessment.id}>
                  <Stars rating={assessment.rating} text={assessment.stars} />
                  <CommentTitle>{assessment.title}</CommentTitle>
                  <CommentDescription>
                    {assessment.description}
                  </CommentDescription>
                </ReviewsCard>
              ))}
            </CardContent>
          </ReviewsContent>
        </ReviewsContainer>
      </Container>
    </Layout>
  );
}

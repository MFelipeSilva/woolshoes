"use client";

import Link from "next/link";

import { useQuery } from "react-query";

import { IoAlertCircleOutline } from "react-icons/io5";

import { getProductSlug, getProducts } from "@app/(shop)/services/apiFunctions";

import { ProductType } from "@/types/ProductType";

import { formatPrice } from "@helpers/formatPrice";
import { assessments } from "@helpers/assessments";

import { useCart } from "@providers/cart";

import { Layout } from "@/layout";

import { Stars } from "@components/Stars";
import { PrimaryButton } from "@/components/Buttons/PrimaryButton";

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
} from "./styles";

interface ProductIdProps {
  params: {
    slug: string;
  };
}

export default function ProductId({ params: { slug } }: ProductIdProps) {
  const {
    data: product,
    isLoading,
    error,
  } = useQuery(["product", slug], () => getProductSlug(slug), {
    enabled: !!slug,
  });

  const { data: products } = useQuery(["products"], getProducts);

  const { addProductToCart } = useCart();

  return (
    <Layout>
      <Container>
        {product ? (
          <ContentMain>
            <ImagesAndDescription>
              <ImagesContainer>
                <ProductImages>
                  {product.imageUrls.map((image: any) => (
                    <ContentImages key={product.id} src={image} />
                  ))}
                </ProductImages>
                <MainImage>
                  <ProductImage src={product.imageUrls[0]} />
                </MainImage>
              </ImagesContainer>
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
            </ImagesAndDescription>
            <DetailsAndRecommendations>
              <DetailsContainer>
                <DetailsHeader>
                  <ProductPath>
                    <Link href="/">Home</Link> /{" "}
                    <Link href="/products">Products</Link> /
                  </ProductPath>
                  <Title>{product.name}</Title>
                  <StarsContent>
                    <Stars rating={4.5} /> ({assessments.length}) avaliações.
                  </StarsContent>
                </DetailsHeader>
                <Price>
                  Por apenas: <h2>{formatPrice(product.price)}</h2>
                </Price>
                <ProductColor>
                  <SubTitle>
                    Cor do produto: <span>{product.color}</span>
                  </SubTitle>
                  <Buttons>
                    <ButtonColor color={product.color}/>
                  </Buttons>
                </ProductColor>
                <SelectSize>
                  <SubTitle>Selecione o tamanho:</SubTitle>
                  <Buttons>
                    {product.sizes.map((size: number) => (
                      <ButtonSize key={product.id}>{size}</ButtonSize>
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
                  Todas as compras acima de R$299 são elegíveis para frete
                  grátis.
                </TextFreeShipping>
              </FreeShippingContainer>
              <RecommendationsContainer>
                <RecommendationsTitle>Recomendações</RecommendationsTitle>
                <Recommendations>
                  {products?.slice(2, 4).map((product: ProductType) => (
                    <Link key={product.id} href={`/products/${product.slug}`}>
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
        ) : (
          ""
        )}
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

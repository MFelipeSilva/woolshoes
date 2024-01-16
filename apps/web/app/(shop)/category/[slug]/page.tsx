"use client";

import { ReactNode, useEffect, useState } from "react";

import { useQuery } from "react-query";

import Link from "next/link";

import { LuSettings2, LuChevronLeft } from "react-icons/lu";

import { Layout } from "@layout";

import { getCategory } from "@lib/api";

import { ProductType } from "@/types/ProductType";
import { CategoryType } from "@/types/CategoryType";

import { formatPrice } from "@helpers/formatPrice";

import {
  DescriptionSkeleton,
  CardMetaSkeleton,
  ProductsCardSkeleton,
  TitleSkeleton,
} from "@components/Skeletons/ProductsSkeleton";
import { Advantages } from "@components/Advantages";

import {
  Container,
  ProductsContent,
  ProductsCard,
  MetaProducts,
  ProductImage,
  Sidebar,
  SwitchContainer,
  SwitchLink,
  ProductsHeader,
  ProductPath,
  Title,
  Filter,
  Categories,
  ButtonSize,
  SizeGroup,
  FilterTitle,
  CategoryTitle,
  Header,
  Genres,
  Gender,
  Material,
  Materials,
  Shoes,
  ProductsRow,
  ProductsCol,
  FilterButton,
  Content,
  FilterDrawer,
  CheckboxAndText,
} from "./styles";

type CategoryProductsParams = {
  params: {
    slug: string;
  };
};

type ContentSidebarProps = {
  display: boolean;
  children?: ReactNode;
};

export default function CategoryProducts({
  params: { slug },
}: CategoryProductsParams) {
  const [open, setOpen] = useState(false);

  const initialGender = localStorage.getItem("@woolshoes/gender") || "men";
  const [chosenGender, setChosenGender] = useState(initialGender);

  const { data: category, isLoading } = useQuery(
    ["category", slug],
    () => getCategory(slug),
    {
      enabled: !!slug,
    }
  ) as { data: CategoryType; isLoading: boolean };

  useEffect(() => {
    localStorage.setItem("@woolshoes/gender", chosenGender);
  }, [chosenGender]);

  const ContentSidebar = ({ children, display }: ContentSidebarProps) => {
    return (
      <Sidebar display={display}>
        {children}
        <Filter>
          <FilterTitle>Filtro:</FilterTitle>
          <Categories>
            <CategoryTitle>Tamanhos</CategoryTitle>
            <SizeGroup>
              {[24, 25, 26, 27, 28, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43].map(
                (size, index) => (
                  <ButtonSize key={index}>{size}</ButtonSize>
                )
              )}
            </SizeGroup>
          </Categories>
          <Categories>
            <CategoryTitle>Material</CategoryTitle>
            <Materials>
              <Material>
                <CheckboxAndText>Leve & Arejado</CheckboxAndText>
              </Material>
              <Material>
                <CheckboxAndText>Lã Macia & Aconchegante</CheckboxAndText>
              </Material>
              <Material>
                <CheckboxAndText>Algodão Confortável & Durável</CheckboxAndText>
              </Material>
            </Materials>
          </Categories>
          <Categories>
            <CategoryTitle>Genêro</CategoryTitle>
            <Genres>
              <Gender>
                <CheckboxAndText checked>Masculino</CheckboxAndText>
              </Gender>
              <Gender>
                <CheckboxAndText>Feminino</CheckboxAndText>
              </Gender>
              <Gender>
                <CheckboxAndText>Unissex</CheckboxAndText>
              </Gender>
            </Genres>
          </Categories>
        </Filter>
      </Sidebar>
    );
  };

  return (
    <Layout>
      <Container>
        <Content>
          <ContentSidebar display={open}>
            <Header>
              <ProductPath>
                <Link href="/">Home</Link> /
              </ProductPath>
              <Title>
                {slug === "men"
                  ? "Calçados masculinos"
                  : slug === "women"
                    ? "Calçados femininos"
                    : slug === "kids"
                      ? "Calçados infantis"
                      : "Calçados"}
              </Title>
              <Shoes>
                <Link href="/category/women">Calçados femininos</Link>
              </Shoes>
              <Shoes>
                <Link href="/category/kids">Calçados infantis</Link>
              </Shoes>
            </Header>
          </ContentSidebar>
          <ProductsContent>
            <ProductsHeader>
              <FilterButton onClick={() => setOpen(true)}>
                Filtro <LuSettings2 />
              </FilterButton>
              <SwitchContainer>
                <SwitchLink
                  onClick={() => setChosenGender("men")}
                  active={chosenGender === "men"}
                  href="/category/men"
                >
                  Homem
                </SwitchLink>
                <SwitchLink
                  onClick={() => setChosenGender("women")}
                  active={chosenGender === "women"}
                  href="/category/women"
                >
                  Mulher
                </SwitchLink>
              </SwitchContainer>
            </ProductsHeader>
            <ProductsRow gutter={40}>
              {isLoading || !category?.products
                ? [1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, index) => (
                    <ProductsCol
                      xxl={8}
                      xl={8}
                      lg={12}
                      md={12}
                      sm={12}
                      xs={12}
                      key={index}
                    >
                      <ProductsCardSkeleton>
                        <CardMetaSkeleton>
                          <TitleSkeleton />
                          <DescriptionSkeleton />
                        </CardMetaSkeleton>
                      </ProductsCardSkeleton>
                    </ProductsCol>
                  ))
                : category?.products.slice(0, 9).map((product: ProductType) => (
                    <ProductsCol
                      xxl={8}
                      xl={8}
                      lg={12}
                      md={12}
                      sm={12}
                      xs={12}
                      key={product.id}
                    >
                      <Link href={`/product/${product.slug}`}>
                        <ProductsCard
                          cover={
                            <ProductImage
                              src={product.imageUrls[0]}
                              alt="product images"
                            />
                          }
                        >
                          <MetaProducts
                            title={product.name}
                            description={formatPrice(product.price)}
                          />
                        </ProductsCard>
                      </Link>
                    </ProductsCol>
                  ))}
            </ProductsRow>
          </ProductsContent>
        </Content>
        <FilterDrawer
          closeIcon={<LuChevronLeft />}
          placement="left"
          width="300px"
          onClose={() => setOpen(false)}
          open={open}
        >
          <ContentSidebar display={open} />
        </FilterDrawer>
      </Container>
      <Advantages />
    </Layout>
  );
}

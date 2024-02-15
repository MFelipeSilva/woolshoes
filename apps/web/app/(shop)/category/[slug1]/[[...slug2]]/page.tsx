"use client";

import { ReactNode, useEffect, useState } from "react";

import { useQuery } from "react-query";

import { useRouter, usePathname } from "next/navigation";

import Link from "next/link";

import { LuSettings2, LuChevronLeft } from "react-icons/lu";

import { Layout } from "@layout";

import { getCategory } from "@lib/api";

import { ProductType } from "@/types/ProductType";
import { CategoryType } from "@/types/CategoryType";

import { formatPrice } from "@helpers/formatPrice";

import {
  DescriptionSkeleton,
  ProductsCardSkeleton,
  TitleSkeleton,
  ProductsCardMetaSkeleton,
} from "@components/Skeletons/ProductsSkeleton";

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
  NotFindText,
} from "./styles";

type CategoryProductsParams = {
  params: {
    slug1: string;
    slug2?: string;
  };
};

type ContentSidebarProps = {
  display: boolean;
  children?: ReactNode;
};

export default function CategoryProducts({
  params: { slug1, slug2 },
}: CategoryProductsParams) {
  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [chosenGender, setChosenGender] = useState(slug1);
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>();

  const { data: category, isLoading } = useQuery(
    ["category", slug1],
    () => getCategory(slug1, slug2),
    {
      enabled: !!slug1,
      cacheTime: 0,
    }
  ) as { data: CategoryType; isLoading: boolean };

  useEffect(() => {
    localStorage.setItem("@woolshoes/gender", chosenGender);
  }, [chosenGender]);

  const handleSizeFilter = (size: number) => {
    const filterProducts = category?.products?.filter((product: any) =>
      product.sizes.includes(size)
    );

    setFilteredProducts(filterProducts);
  };

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
                  <ButtonSize
                    onClick={() => handleSizeFilter(size)}
                    key={index}
                  >
                    {size}
                  </ButtonSize>
                )
              )}
            </SizeGroup>
          </Categories>
          <Categories>
            <CategoryTitle>Material</CategoryTitle>
            <Materials>
              <Material>
                <CheckboxAndText disabled>Leve & Arejado</CheckboxAndText>
              </Material>
              <Material>
                <CheckboxAndText checked>
                  Lã Macia & Aconchegante
                </CheckboxAndText>
              </Material>
              <Material>
                <CheckboxAndText disabled>
                  Algodão Confortável & Durável
                </CheckboxAndText>
              </Material>
            </Materials>
          </Categories>
          <Categories>
            <CategoryTitle>Genêro</CategoryTitle>
            <Genres>
              <Gender>
                <CheckboxAndText
                  onClick={() => router.push("/category/women")}
                  defaultChecked={pathname === "/category/women" ? true : false}
                >
                  Feminino
                </CheckboxAndText>
              </Gender>
              <Gender>
                <CheckboxAndText
                  onClick={() => router.push("/category/men/women")}
                  defaultChecked={
                    pathname === "/category/men/women" ? true : false
                  }
                >
                  Unissex
                </CheckboxAndText>
              </Gender>
              <Gender>
                <CheckboxAndText
                  onClick={() => router.push("/category/men")}
                  defaultChecked={pathname === "/category/men" ? true : false}
                >
                  Masculino
                </CheckboxAndText>
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
                {slug1 === "men"
                  ? "Calçados masculinos"
                  : slug1 === "women"
                    ? "Calçados femininos"
                    : slug1 === "kids"
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
              {isLoading || !category?.products ? (
                [...Array(9)].map((_, index) => (
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
                      <ProductsCardMetaSkeleton>
                        <TitleSkeleton />
                        <DescriptionSkeleton />
                      </ProductsCardMetaSkeleton>
                    </ProductsCardSkeleton>
                  </ProductsCol>
                ))
              ) : !filteredProducts ? (
                category?.products.map((product: ProductType) => (
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
                ))
              ) : filteredProducts.length === 0 ? (
                <NotFindText>
                  Desculpe, não encontramos resultados. :|
                </NotFindText>
              ) : (
                filteredProducts?.map((product: ProductType) => (
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
                ))
              )}
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
    </Layout>
  );
}

import styled from "styled-components";
import { MEDIA_QUERY, H1, H3, H5, BodyLarge } from "../../../constants/style";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { scrollToAnchor } from "../../../components/Anchor";

const Content = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 60px;

  ${MEDIA_QUERY} {
    padding: 20px;
  }
`;

const Category = styled.div`
  display: flex;
`;

const CategoryName = styled(H5)`
  cursor: pointer;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.neutralBlack};
  }
  & {
    margin-right: 20px;
  }
`;

const CategorySection = styled.div`
  ＆ {
    margin: 80px 0;
  }
`;
const CategoryTitle = styled(H3)``;
const ProductList = styled.div`
  text-align: center;
  ${MEDIA_QUERY} {
    flex-direction: column;
  }
`;
const Product = styled.div`
  width: 260px;
  position: relative;
  display: inline-block;
  background: ${(props) => props.theme.colors.neutralWhite};
  margin: 20px;
  border-radius: 5px;

  :hover {
    box-shadow: 0 3px 22px 1px rgba(100, 100, 100, 0.32);
  }
  ${MEDIA_QUERY} {
    width: 300px;
  }
`;

const BlankCard = styled.div`
  width: 260px;
  position: relative;
  display: inline-block;
  margin: 20px;
  ${MEDIA_QUERY} {
    width: 300px;
  }
`;

const Pointer = styled.div`
  display: none;
  position: absolute;
  z-index: 1;
  width: 46px;
  height: 46px;
  font-size: ${(props) => props.theme.fontSize.h4};
  font-weight: bold;
  top: 70%;
  border-radius: 50%;
  left: 76%;
  color: ${(props) => props.theme.colors.neutralWhite};
  background: ${(props) => props.theme.colors.mainPrimary};
  ${MEDIA_QUERY} {
    width: 60px;
    height: 60px;
    font-size: ${(props) => props.theme.fontSize.h3};
  }
`;

const ProductLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.neutralBlack};
  &:hover {
    ${Pointer} {
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2;
    }
  }
`;

const ProductImage = styled.div`
  width: 260px;
  height: 260px;
  border-radius: 5px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;

  ${MEDIA_QUERY} {
    width: 300px;
    height: 300px;
  }
`;

const ProductName = styled(BodyLarge)`
  padding: 15px 20px;
  background: ${(props) => props.theme.colors.neutralWhite};
  z-index: 1;
  position: relative;
  top: -10px;
  text-align: left;
`;

const Products = ({ products }) => {
  return products.map((product) => (
    <Product>
      <ProductLink to={"/product/" + product.id}>
        <ProductImage
          style={{ backgroundImage: `url(${product.image})` }}
        ></ProductImage>
        <Pointer>
          <span>➜</span>
        </Pointer>
        <ProductName>{product.name}</ProductName>
      </ProductLink>
    </Product>
  ));
};

const getCategory = () => {
  return fetch(`/api/category/product`).then((res) => res.json());
};

export default function ProductListPage() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategory().then((res) => {
      setCategories(res.data);
    });
  }, []);

  return (
    <Content>
      <H1>MENU</H1>
      <Category>
        {categories.map((category) => (
          <CategoryName onClick={() => scrollToAnchor(category.id)}>
            {category.name}
          </CategoryName>
        ))}
      </Category>

      {categories.map((category) => (
        <CategorySection>
          <CategoryTitle id={category.id}>{category.name}</CategoryTitle>
          <ProductList>
            <Products products={category.Products} />
            <BlankCard />
            <BlankCard />
          </ProductList>
        </CategorySection>
      ))}
    </Content>
  );
}

import styled from "styled-components";
import {
  MEDIA_QUERY,
  H1,
  H3,
  H5,
  BodyLarge,
  Body,
} from "../../../constants/style";
import { Link } from "react-router-dom";
import { useState } from "react";


const Content = styled.div`
  max-width: 1280px;
  margin: 40px 80px;
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
  :hover {
    box-shadow: 0 3px 22px 1px rgba(90, 92, 102, 0.06);
  }
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
  top: 67%;
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

const Up = styled(Pointer)`
  width: 55px;
  height: 55px;
  cursor: pointer;
  text-align: center;
  display: flex;
  position: fixed;
  top: 80%;
  left: 90%;
  justify-content: center;
  align-items: center;
`;

const ProductLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.neutralBlack};
  &:hover {
    ${Pointer} {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const ProductImage = styled.img`
  width: 100%;
`;
const ProductName = styled(BodyLarge)`
  margin: 15px 20px;
  text-align: left;
`;

const ProductPrices = styled.div`
  display: flex;
  margin: 15px 20px;
`;
const ProductPromoPrice = styled(Body)`
  text-align: left;
  font-weight: 500;
`;
const ProductPrice = styled(Body)`
  text-align: left;
  margin-left: 10px;
  text-decoration: line-through;
  color: ${(props) => props.theme.colors.neutralGrey};
`;

const Products = ({ product }) => {
  return (
    <Product>
      <ProductLink to={"/product/" + product.id}>
        <ProductImage src={product.img}></ProductImage>
        <Pointer>
          <span>➜</span>
        </Pointer>
        <ProductName>{product.name}</ProductName>
        <ProductPrices>
          <ProductPromoPrice>${product.promoPrice}</ProductPromoPrice>
          <ProductPrice>${product.price}</ProductPrice>
        </ProductPrices>
      </ProductLink>
    </Product>
  );
};
export default function ProductListPage() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "可麗露",
      price: "280",
      promoPrice: "180",
      img: "https://imgur.com/lxWa1BS.png",
    },
    {
      id: 1,
      name: "可麗露",
      price: "280",
      promoPrice: "180",
      img: "https://imgur.com/lxWa1BS.png",
    },
    {
      id: 1,
      name: "可麗露",
      price: "280",
      promoPrice: "180",
      img: "https://imgur.com/lxWa1BS.png",
    },
    {
      id: 1,
      name: "可麗露",
      price: "280",
      promoPrice: "180",
      img: "https://imgur.com/lxWa1BS.png",
    },
  ]);

  const scrollToAnchor = (anchorName) => {
    if (anchorName) {
      let anchorElement = document.getElementById(anchorName);
      if (anchorElement) {
        anchorElement.scrollIntoView();
      }
    }
  };

  return (
    <Content>
      <H1 id="top">MENU</H1>
      <Up onClick={() => scrollToAnchor("top")}>
        <span>⇧</span>
      </Up>
      <Category>
        <CategoryName onClick={() => scrollToAnchor("cake")}>
          常溫蛋糕
        </CategoryName>
        <CategoryName onClick={() => scrollToAnchor("pie")}>
          家常塔派
        </CategoryName>
        <CategoryName onClick={() => scrollToAnchor("house")}>
          招牌蛋糕
        </CategoryName>
      </Category>
      <CategorySection>
        <CategoryTitle id="cake">常溫蛋糕</CategoryTitle>
        <ProductList>
          {products.map((product) => (
            <Products product={product} />
          ))}

        </ProductList>
      </CategorySection>
      <CategorySection>
        <CategoryTitle id="pie">家常塔派</CategoryTitle>
        <ProductList>
          {products.map((product) => (
            <Products product={product} />
          ))}
        </ProductList>
      </CategorySection>
      <CategorySection>
        <CategoryTitle id="house">招牌蛋糕</CategoryTitle>
        <ProductList>
          {products.map((product) => (
            <Products product={product} />
          ))}
        </ProductList>
      </CategorySection>
    </Content>
  );
}

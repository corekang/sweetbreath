import styled from "styled-components";
import {
  MEDIA_QUERY,
  Caption1,
  Caption2,
  H2,
  H3,
  H5,
  BodyLarge,
  Body,
} from "../../../constants/style";
import { Link } from "react-router-dom";

const Content = styled.div`
  max-width: 1280px;
  margin: 40px 80px;
  font-family: Inter-Regular;
`;

const CategoryBar = styled.div`
  display: flex;
`;
const Product = styled.div`
  display: flex;
  margin: 40px 0;
`;
const ProductImage = styled.img`
  flex: 5;
  margin-right: 40px;
  border-radius: 4px;
`;
const ProductDesc = styled.div`
  flex: 5;
`;
const ProductTitle = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralLightGrey};
`;
const ProductName = styled(H3)`
  margin-top: 0;
`;
const ProductPrice = styled(H2)``;

export default function ProductPage() {
  return (
    <Content>
      <CategoryBar>
        <Caption1>常溫蛋糕 / </Caption1>
        <Caption2>可麗露</Caption2>
      </CategoryBar>
      <Product>
        <ProductImage src="https://imgur.com/lxWa1BS.png"></ProductImage>
        <ProductDesc>
          <ProductTitle>
            <ProductName>可麗露</ProductName>
            <ProductPrice>$180</ProductPrice>
          </ProductTitle>
        </ProductDesc>
      </Product>
    </Content>
  );
}

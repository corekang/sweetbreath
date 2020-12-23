import styled from "styled-components";
import { MEDIA_QUERY, H1, H3, H4, H5 } from "../../../constants/style";
import { Link } from "react-router-dom";
import { useState } from "react";
import { scrollToAnchor } from "../../../components/Anchor";

const Content = styled.div`
  max-width: 1280px;
  margin: 40px auto;
  padding: 0 40px;
`;

const Category = styled.div`
  display: flex;
  justify-content: space-between;

  ${MEDIA_QUERY} {
    display: block;
    justify-content: center;
  }
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
  ${MEDIA_QUERY} {
    margin: 10px;
    justify-content: center;
  }
`;

const CategorySection = styled.div`
  & + & {
    margin: 80px 0;
  }
`;
const CategoryTitle = styled(H3)`
  margin: 60px 0 20px 0;
`;
const ProductList = styled.div`
  text-align: center;
  ${MEDIA_QUERY} {
    flex-direction: column;
  }
`;
const ProductSetting = styled.div`
  display: none;

  ${MEDIA_QUERY} {
    display: grid;
  }
`;
const Product = styled.div`
  display: flex;
  padding: 5px;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralGrey};
  background: ${(props) => props.theme.colors.neutralWhite};
  & {
    margin: 15px 0;
  }

  :hover {
    box-shadow: 0 3px 22px 1px rgba(90, 92, 102, 0.06);
    ${ProductSetting} {
      display: flex;
      ${MEDIA_QUERY} {
        display: grid;
      }
    }
  }
`;

const ProductItem = styled.div`
  display: flex;
  ${MEDIA_QUERY} {
    display: block;
  }
`;

const ProductName = styled(H4)`
  margin: 15px 20px;
  text-align: left;
`;
const ProductDesc = styled(H5)`
  margin: 15px 20px;
  text-align: left;
  color: ${(props) => props.theme.colors.neutralDarkGrey};
`;

const SettingButton = styled(Link)`
  display: flex;
  margin: auto 10px;
  align-items: center;
  font-size: ${(props) => props.theme.fontSize.button};
  line-height: 1.21;
  font-weight: 500;
  text-decoration: none;
  text-align: center;
  padding: 15px 20px;
  border: none;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.neutralWhite};
  background: ${(props) => props.theme.colors.neutralDarkGrey};
  cursor: pointer;
  :hover {
    background: ${(props) => props.theme.colors.neutralGrey};
  }
  ${MEDIA_QUERY} {
    margin: 15px;
    font-size: ${(props) => props.theme.fontSize.h5};
  }
`;

const AddBtn = styled(SettingButton)`
  background: ${(props) => props.theme.colors.uiWarning};
  color: ${(props) => props.theme.colors.neutralBlack};
  font-weight: bold;
  justify-content: center;
  :hover {
    color: ${(props) => props.theme.colors.neutralWhite};
  }
`;

const CategoryList = styled.div`
  display: flex;
  ${MEDIA_QUERY} {
    justify-content: center;
  }
`;

const Products = ({ product }) => {
  return (
    <Product>
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductItem>
          <ProductDesc>原價：${product.price}</ProductDesc>
          <ProductDesc>特價：${product.promoPrice}</ProductDesc>
          <ProductDesc>庫存：{product.stock}</ProductDesc>
          <ProductDesc>規格：{product.style}</ProductDesc>
        </ProductItem>
      </div>
      <ProductSetting>
        <SettingButton to={"/admin/product/" + product.id}>編輯</SettingButton>
        <SettingButton>刪除</SettingButton>
      </ProductSetting>
    </Product>
  );
};
export default function AdminProductListPage() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "可麗露",
      price: "280",
      promoPrice: "180",
      stock: "10",
      style: "2",
    },
    {
      id: 1,
      name: "可麗露",
      price: "280",
      promoPrice: "180",
      stock: "10",
      style: "2",
    },
    {
      id: 1,
      name: "可麗露",
      price: "280",
      promoPrice: "180",
      stock: "10",
      style: "2",
    },
  ]);

  return (
    <Content>
      <H1>商品管理</H1>
      <Category>
        <CategoryList>
          <CategoryName onClick={() => scrollToAnchor("cake")}>
            常溫蛋糕
          </CategoryName>
          <CategoryName onClick={() => scrollToAnchor("pie")}>
            家常塔派
          </CategoryName>
          <CategoryName onClick={() => scrollToAnchor("house")}>
            招牌蛋糕
          </CategoryName>
        </CategoryList>
        <AddBtn to="/admin/product">新增商品</AddBtn>
      </Category>
      <CategorySection>
        <CategoryTitle id="cake">常溫蛋糕</CategoryTitle>
        <ProductList>
          {products.map((product) => (
            <Products product={product} />
          ))}
        </ProductList>
        <CategoryTitle id="pie">家常塔派</CategoryTitle>
        <ProductList>
          {products.map((product) => (
            <Products product={product} />
          ))}
        </ProductList>
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

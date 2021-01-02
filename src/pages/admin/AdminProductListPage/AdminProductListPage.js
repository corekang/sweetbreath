import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { MEDIA_QUERY, H1, H3, H4, H5 } from "../../../constants/style";
import { scrollToAnchor } from "../../../components/Anchor";
import { getAuthToken } from "../../../utils";

const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px;
`;

const CategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;

  ${MEDIA_QUERY} {
    justify-content: center;
  }
`;

const CategoryList = styled.div`
  display: flex;
  align-items: center;
  ${MEDIA_QUERY} {
    justify-content: center;
  }
`;

const CategoryName = styled(H5)`
  margin: 10px 0;
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
    margin: 60px 0;
  }
`;
const CategoryTitle = styled(H3)`
  margin: 30px 0;
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
    display: flex;
  }
`;

const ProductContainer = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralGrey};

  :hover {
    ${ProductSetting} {
      display: flex;
      align-items: center;
    }
  }
`;

const ProductTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductName = styled(H4)`
  margin: 20px 0;
  text-align: left;
`;

const ProductItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 20px;

  ${MEDIA_QUERY} {
    display: block;
  }
`;

const ProductDescContainer = styled.div`
  display: flex;
`;

const ProductDesc = styled(H5)`
  margin: 10px;
  text-align: left;
  color: ${(props) => props.theme.colors.neutralDarkGrey};
`;

const SettingButton = styled(Link)`
  font-size: ${(props) => props.theme.fontSize.button};
  line-height: 1.21;
  font-weight: 500;
  text-decoration: none;
  padding: 12px 18px;
  margin-left: 10px;
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

  :hover {
    color: ${(props) => props.theme.colors.neutralWhite};
  }
`;

const ErrorMessage = styled(H4)`
  margin: 0;
  padding: 0 20px;
  text-align: right;
  font-weight: 700;
  color: ${(props) => props.theme.colors.uiNegative};
`;

// 以分類撈取所有產品 API
const getCategory = () => {
  return fetch(`/api/category/product`).then((res) => res.json());
};

// 撈取單一商品規格 API
const getProduct = (productId) => {
  return fetch(`/api/product/${productId}`).then((res) => res.json());
};

// 刪除商品 API
const deleteProduct = (productId) => {
  const token = getAuthToken();
  return fetch(`/api/product/${productId}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
  }).then((res) => res.json());
};

const ProductItems = ({
  productId,
  setErrorMessage,
  getCategory,
  setCategories,
}) => {
  const [features, setFeatures] = useState([]);

  // 從 productId 撈取商品規格: 回傳 Features 陣列
  useEffect(() => {
    getProduct(productId).then((res) => {
      if (!res.data.Features) return;
      const features = res.data.Features.map((feature) => {
        return feature;
      });
      setFeatures(features);
    });
  }, []);

  return features.map((feature) => (
    <ProductItemContainer key={feature.id}>
      <ProductDescContainer>
        <ProductDesc>原價：$ {feature.price}</ProductDesc>
        <ProductDesc>特價：$ {feature.promo_price}</ProductDesc>
        <ProductDesc>庫存：{feature.stock}</ProductDesc>
        <ProductDesc>規格：{feature.name}</ProductDesc>
      </ProductDescContainer>
    </ProductItemContainer>
  ));
};

const Products = ({
  products,
  setErrorMessage,
  getCategory,
  setCategories,
}) => {
  // 刪除分類
  const handleDeleteClick = (id) => {
    deleteProduct(id).then((res) => {
      if (res.ok === 0) {
        setErrorMessage(res.message);
        return;
      }
      getCategory().then((ans) => {
        setCategories(ans.data);
      });
    });
  };

  return products.map((product) => (
    <ProductContainer>
      <ProductTitle>
        <ProductName>{product.name}</ProductName>
        <ProductSetting>
          <SettingButton to={"/admin/product/" + product.id}>
            編輯
          </SettingButton>
          <SettingButton onClick={() => handleDeleteClick(product.id)}>
            刪除
          </SettingButton>
        </ProductSetting>
      </ProductTitle>
      <ProductItems
        key={product.id}
        productId={product.id}
        setErrorMessage={setErrorMessage}
        getCategory={getCategory}
        setCategories={setCategories}
      />
    </ProductContainer>
  ));
};

export default function AdminProductListPage() {
  const [categories, setCategories] = useState([]);
  const [errorMessage, setErrorMessage] = useState();

  // 撈取所有分類
  useEffect(() => {
    getCategory().then((ans) => {
      setCategories(ans.data);
    });
  }, []);

  return (
    <Content>
      <H1>商品管理</H1>
      <CategoryHeader>
        <CategoryList>
          {categories.map((category) => (
            <CategoryName
              key={category.id}
              onClick={() => scrollToAnchor(category.id)}
            >
              {category.name} ({category.Products.length})
            </CategoryName>
          ))}
        </CategoryList>
        <AddBtn to="/admin/product">新增商品</AddBtn>
      </CategoryHeader>
      <ErrorMessage>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </ErrorMessage>
      {categories.map((category) => (
        <CategorySection>
          <CategoryTitle id={category.id}>
            {category.name}({category.Products.length})
          </CategoryTitle>
          <ProductList>
            <Products
              products={category.Products}
              setErrorMessage={setErrorMessage}
              getCategory={getCategory}
              setCategories={setCategories}
            />
          </ProductList>
        </CategorySection>
      ))}
    </Content>
  );
}

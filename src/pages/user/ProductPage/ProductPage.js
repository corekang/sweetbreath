import { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import plusCircleOutlined from "@iconify-icons/ant-design/plus-circle-outlined";
import minusCircleOutlined from "@iconify-icons/ant-design/minus-circle-outlined";

import {
  MEDIA_QUERY,
  Caption1,
  Caption2,
  H5,
  H4,
  H3,
  Button,
  Body,
} from "../../../constants/style";

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
`;

const CategoryBar = styled.div`
  display: flex;
  div {
    margin-right: 10px;
  }

  ${MEDIA_QUERY} {
    div {
      font-size: ${(props) => props.theme.fontSize.h4};
    }
  }
`;
const Product = styled.div`
  display: flex;
  width: 100%;
  margin: 40px 0;
  ${MEDIA_QUERY} {
    display: block;
  }
`;

const ProductImage = styled.div`
  flex: 5.5;
  margin-right: 40px;
  border-radius: 4px;

  img {
    width: 100%;
    border-radius: 4px;
    box-shadow: 0 3px 22px 1px rgba(100, 100, 100, 0.32);
  }
  ${MEDIA_QUERY} {
    margin: 0;
  }
`;
const ProductDesc = styled.div`
  flex: 4.5;
  ${MEDIA_QUERY} {
    margin: 20px 0;
  }
`;
const ProductHead = styled.div``;
const FeatureList = styled.div`
  margin-top: 10px;
  padding: 5px 20px;
  border-radius: 10px;

  :hover {
    border: 1px solid ${(props) => props.theme.colors.neutralLightGrey};
  }
`;
const Feature = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProductName = styled(H3)`
  margin: 0;
`;

const FeatureName = styled(H4)``;

const AddToLove = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  span {
    color: ${(props) => props.theme.colors.neutralLightGrey};
    font-size: ${(props) => props.theme.fontSize.h2};
    font-weight: bold;
    text-shadow: 1.5px 1.5px 1.5px rgba(90, 92, 102, 0.4);
  }
  :hover {
    span {
      color: ${(props) => props.theme.colors.uiNegative};
    }
  }
  ${MEDIA_QUERY} {
    span {
      font-size: ${(props) => props.theme.fontSize.h1};
    }
  }
`;

const ProductPrices = styled.div`
  display: flex;
  align-items: center;
`;

const ProductPromoPrice = styled(H3)``;

const ProductPrice = styled(H4)`
  margin-left: 20px;
  color: ${(props) => props.theme.colors.neutralDarkGrey};
  text-decoration: line-through;
`;

const ProductContent = styled(Body)`
  word-break: break-all;
  white-space: pre-line;
  line-height: 2;
  padding: 40px 0 20px 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralLightGrey};

  ${MEDIA_QUERY} {
    font-size: ${(props) => props.theme.fontSize.h5};
  }
`;

const ProductStorage = styled.div`
  font-size: ${(props) => props.theme.fontSize.h5};
  text-align: right;
`;

const ProductCounter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 25px;
  font-size: ${(props) => props.theme.fontSize.h4};
`;

const CounterArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    width: 40px;
    height: 40px;
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CounterIcon = styled(Icon)`
  width: 32px;
  height: 32px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.mainPrimary};
`;

const AddToCart = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  button {
    cursor: pointer;
    padding: 20px 100px;
    border: none;
    border-radius: 4px;
    color: ${(props) => props.theme.colors.neutralWhite};
    background: ${(props) => props.theme.colors.mainPrimary};
    font-size: ${(props) => props.theme.fontSize.bodyLarge};
  }
`;

const Error = styled(H4)`
  display: flex;
  font-weight: bold;
  margin: 10px 0;
  visibility: ${(props) => (props.errorMessage ? "visible" : "hidden")};
  color: ${(props) => props.theme.colors.uiWarning};
  justify-content: center;
`;

const getProduct = (productId) => {
  return fetch(`/api/product/${productId}`).then((res) => res.json());
};

const getCategory = () => {
  return fetch(`/api/category`).then((res) => res.json());
};
export default function ProductPage() {
  const history = useHistory();
  const { id } = useParams();
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState();
  const [cart, setCart] = useState([]);
  const [feature, setFeature] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    getCategory().then((ans) => {
      setCategories(ans.data);
    });
    getProduct(id).then((res) => {
      const features = res.data.Features.map((feature) => {
        feature.number = 0;
        return feature;
      });
      const { CategoryId, id, image, info, name } = res.data;
      setProduct({ CategoryId, id, image, info, name });
      setFeature(features);
    });
  }, []);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("cart")) || [];
    if (data) {
      setCart(data);
    }
  }, []);

  const handleClickDown = (id) => {
    const newFeature = feature.map((item) => {
      let newItem = item;
      if (newItem.id === id) {
        if (newItem.number !== 0) {
          newItem.number = newItem.number - 1;
        }
      }
      return newItem;
    });
    setFeature(newFeature);
  };

  const handleClickUp = (id, stock) => {
    const newFeature = feature.map((item) => {
      let newItem = item;
      if (newItem.id === id) {
        if (newItem.number < stock) {
          newItem.number = newItem.number + 1;
        }
      }
      return newItem;
    });
    setFeature(newFeature);
  };

  const handleAddToCart = () => {
    let newCart = cart;
    let featureList = feature.filter((item) => item.number !== 0);
    if (featureList.length !== 0) {
      featureList.map((item) => {
        newCart.push({
          id: product.id,
          productName: product.name,
          feature: item.name,
          count: item.number,
          price: item.promo_price ? item.promo_price : item.price,
          subTotal: item.promo_price
            ? item.number * item.promo_price
            : item.number * item.price,
          image: product.image,
          stock: item.stock,
        });
        return newCart;
      });
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(cart));
      history.push("/cart");
    } else {
      return setErrorMessage(true);
    }
  };

  return (
    <Content>
      {product && (
        <CategoryBar>
          <Caption1>
            {categories.length > 0 &&
              categories.filter(
                (category) => category.id === product.CategoryId
              )[0].name}
          </Caption1>
          <Caption2>{product.name}</Caption2>
        </CategoryBar>
      )}
      {product && (
        <Product>
          <ProductImage>
            <img src={product.image} alt="product"></img>
          </ProductImage>
          <ProductDesc>
            <ProductHead>
              <ProductTitle>
                <ProductName>{product.name}</ProductName>
                <AddToLove>
                  <span>❤</span>
                </AddToLove>
              </ProductTitle>
              <ProductContent>{product.info}</ProductContent>
            </ProductHead>
            {feature.map((featureItem) => (
              <FeatureList>
                <Feature>
                  <FeatureName>{featureItem.name}</FeatureName>
                  <ProductPrices>
                    <ProductPromoPrice>
                      {featureItem.promo_price
                        ? "$" + featureItem.promo_price
                        : "$" + featureItem.price}
                    </ProductPromoPrice>
                    {featureItem.promo_price ? (
                      <ProductPrice>${featureItem.price} </ProductPrice>
                    ) : (
                      ""
                    )}
                  </ProductPrices>
                </Feature>
                <ProductCounter>
                  <ProductStorage>庫存：{featureItem.stock}</ProductStorage>
                  <CounterArea>
                    <CounterIcon
                      icon={minusCircleOutlined}
                      onClick={() => {
                        handleClickDown(featureItem.id);
                      }}
                    ></CounterIcon>
                    <span>{featureItem.number}</span>
                    <CounterIcon
                      icon={plusCircleOutlined}
                      onClick={() => {
                        console.log(featureItem.id);
                        handleClickUp(featureItem.id, featureItem.stock);
                      }}
                    ></CounterIcon>
                  </CounterArea>
                </ProductCounter>
              </FeatureList>
            ))}
            <Error errorMessage={errorMessage}>請輸入數量</Error>
            <AddToCart>
              <Button onClick={handleAddToCart}>加入購物車</Button>
            </AddToCart>
          </ProductDesc>
        </Product>
      )}
    </Content>
  );
}

import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import plusCircleOutlined from "@iconify-icons/ant-design/plus-circle-outlined";
import minusCircleOutlined from "@iconify-icons/ant-design/minus-circle-outlined";
import { getProduct, getCategory } from "../../../webAPI/productAPI";
import {
  Content,
  CategoryBar,
  Caption1,
  Caption2,
  Product,
  ProductImage,
  ProductDesc,
  ProductHead,
  ProductTitle,
  ProductName,
  AddToLove,
  ProductContent,
  FeatureList,
  Feature,
  FeatureName,
  ProductPrices,
  ProductPromoPrice,
  ProductPrice,
  ProductCounter,
  ProductStorage,
  CounterArea,
  CounterIcon,
  Error,
  AddToCart,
  Button,
} from "./style";
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
    let addFeatureList = feature.filter((item) => item.number !== 0);

    // 判斷新增商品數量是否為 0
    if (addFeatureList.length === 0) return setErrorMessage(true);

    addFeatureList.map((newItem) => {
      // 判斷是否有相同商品
      let sameItem = cart.find((cartItem) => {
        return (
          cartItem.id === newItem.ProductId && cartItem.feature === newItem.name
        );
      });

      if (sameItem) {
        // true: 詢問要不要前往 CartPage
        if (
          window.confirm("您的購物車已經有相同物品囉！要前往購物車頁面修改嗎？")
        )
          history.push("/cart");
      } else {
        // false: 直接新增
        setCart(
          cart.push({
            id: product.id,
            productName: product.name,
            feature: newItem.name,
            count: newItem.number,
            price: newItem.promo_price ? newItem.promo_price : newItem.price,
            subTotal: newItem.promo_price
              ? newItem.number * newItem.promo_price
              : newItem.number * newItem.price,
            image: product.image,
            stock: newItem.stock,
          })
        );
        localStorage.setItem("cart", JSON.stringify(cart));
        history.push("/cart");
      }
    });
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
              <FeatureList key={featureItem.id}>
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

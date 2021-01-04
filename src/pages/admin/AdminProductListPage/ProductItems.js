import { useState, useEffect } from "react";
import {
  ProductItemContainer,
  ProductDescContainer,
  ProductDesc,
} from "./style";
import PropTypes from "prop-types";
import { getProduct } from "../../../webAPI/productAPI";

export default function ProductItems({ productId }) {
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
        <ProductDesc>規格：{feature.name}</ProductDesc>
        <ProductDesc>原價：$ {feature.price}</ProductDesc>
        <ProductDesc>特價：$ {feature.promo_price}</ProductDesc>
        <ProductDesc>庫存：{feature.stock}</ProductDesc>
      </ProductDescContainer>
    </ProductItemContainer>
  ));
}

ProductItems.propTypes = {
  productId: PropTypes.number,
};

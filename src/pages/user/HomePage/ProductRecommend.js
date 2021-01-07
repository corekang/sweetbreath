import { useState } from "react";
import PropTypes from "prop-types";
import {
  Product,
  ProductLink,
  ProductImage,
  Pointer,
  ProductName,
  RecommendContent,
  BlankCard,
} from "./style";

function getRecommendProduct() {
  return fetch("/api/category/product", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => {
      const recommendProducts = res.data.filter(
        (category) => category.name === "人氣商品"
      );
      return recommendProducts;
    })
    .then((res) => {
      return res[0].Products;
    });
}

function RecommendItem(props) {
  return (
    <Product>
      <ProductLink to={props.itemLink}>
        <ProductImage src={props.itemImg}></ProductImage>
        <Pointer>
          <span>➜</span>
        </Pointer>
        <ProductName>{props.itemName}</ProductName>
      </ProductLink>
    </Product>
  );
}

export default function ProductRecommend() {
  const [products, setProducts] = useState([]);

  getRecommendProduct().then((res) => {
    setProducts(res);
  });

  return (
    <RecommendContent>
      {products &&
        products.map((product) => (
          <RecommendItem
            itemLink={`/product/${product.id}`}
            itemImg={product.image}
            itemName={product.name}
            key={product.id}
          />
        ))}
      <BlankCard />
      <BlankCard />
    </RecommendContent>
  );
}

RecommendItem.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
};

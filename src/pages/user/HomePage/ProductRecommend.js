import { useState, useEffect, useContext } from "react";
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
import { getCategoryAndLaunchedProducts } from "../../../webAPI/productAPI";
import { LoadingContext } from "../../../contexts";
import Loading from "../../../components/Loading";

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
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getCategoryAndLaunchedProducts()
      .then((res) => {
        const recommendProducts = res.data.filter(
          (category) => category.name === "人氣商品"
        );
        return recommendProducts;
      })
      .then((res) => {
        return res[0].Products;
      })
      .then((res) => {
        setProducts(res);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, [setIsLoading]);

  return (
    <RecommendContent>
      {isLoading ? (
        <Loading />
      ) : (
        <>
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
        </>
      )}
    </RecommendContent>
  );
}

RecommendItem.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
};

import { useState, useEffect, useContext } from "react";
import { scrollToAnchor } from "../../../components/Anchor";
import { getCategoryAndProducts } from "../../../webAPI/productAPI";
import Products from "./Products";
import {
  Content,
  H1,
  CategoryHeader,
  CategoryList,
  CategoryName,
  AddBtn,
  ErrorMessage,
  CategorySection,
  CategoryTitle,
  ProductList,
} from "./style";
import { LoadingContext } from "../../../contexts";
import Loading from "../../../components/Loading";

export default function AdminProductListPage() {
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const [categories, setCategories] = useState([]);
  const [errorMessage, setErrorMessage] = useState();

  // 撈取所有分類
  useEffect(() => {
    setIsLoading(true);
    getCategoryAndProducts().then((res) => {
      setIsLoading(false);
      let newCategory = res.data.filter(
        (category) => category.Products.length !== 0
      );
      setCategories(newCategory);
    });
  }, []);

  return (
    <Content>
      <H1>商品管理</H1>
      {isLoading ? (
        <Loading />
      ) : (
        <>
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
            <CategorySection key={category.id}>
              <CategoryTitle id={category.id}>
                {category.name}({category.Products.length})
              </CategoryTitle>
              <ProductList>
                <Products
                  products={category.Products}
                  setErrorMessage={setErrorMessage}
                  setCategories={setCategories}
                  setIsLoading={setIsLoading}
                />
              </ProductList>
            </CategorySection>
          ))}
        </>
      )}
    </Content>
  );
}

import { useState, useEffect, useContext } from "react";
import { scrollToAnchor } from "../../../components/Anchor";
import { LoadingContext } from "../../../contexts";
import Loading from "../../../components/Loading";
import {
  Content,
  H1,
  Category,
  CategoryName,
  CategorySection,
  CategoryTitle,
  ProductList,
  BlankCard,
} from "./style";
import Products from "./Products";
import { getCategoryAndLaunchedProducts } from "../../../webAPI/productAPI";

export default function ProductListPage() {
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getCategoryAndLaunchedProducts().then((res) => {
      setCategories(res.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <Content>
      <H1>MENU</H1>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Category>
            {categories.map((category) => (
              <CategoryName
                key={category.id}
                onClick={() => scrollToAnchor(category.id)}
              >
                {category.name}
              </CategoryName>
            ))}
          </Category>

          {categories.map((category) => (
            <CategorySection key={category.id}>
              <CategoryTitle id={category.id}>{category.name}</CategoryTitle>
              <ProductList>
                <Products products={category.Products} />
                <BlankCard />
                <BlankCard />
              </ProductList>
            </CategorySection>
          ))}
        </>
      )}
    </Content>
  );
}

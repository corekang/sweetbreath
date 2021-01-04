import { useState, useEffect } from "react";
import { scrollToAnchor } from "../../../components/Anchor";
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
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategoryAndLaunchedProducts().then((res) => {
      setCategories(res.data);
    });
  }, []);

  return (
    <Content>
      <H1>MENU</H1>
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
    </Content>
  );
}

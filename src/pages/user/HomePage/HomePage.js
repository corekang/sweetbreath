import Banner from "./Banner";
import ProductRecommend from "./ProductRecommend";
import { HomePageContent, SubTitle } from "./style";

export default function HomePage() {
  return (
    <HomePageContent>
      <Banner />
      <SubTitle>人氣商品</SubTitle>
      <ProductRecommend />
    </HomePageContent>
  );
}

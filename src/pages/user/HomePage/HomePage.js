import Slider from "react-slick";
import styled from "styled-components";
import { BodyLarge, MEDIA_QUERY, H2 } from "../../../constants/style";
import { Link } from "react-router-dom";

const SubTitle = styled(H2)`
  width: 80%;
  margin: 80px auto 11px;
  text-align: center;
  padding-bottom: 20px;
  color: ${(props) => props.theme.colors.neutralDarkGrey};
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralLightGrey};
`;

const BannerContent = styled.div`
  box-sizing: border-box;
  margin: 0px auto;
  width: 100%;
  max-height: 500px;
  overflow: hidden;
`;

const BannerImgContent = styled.div`
  max-height: 500px;
`;

const BannerImg = styled.img`
  box-sizing: border-box;
  margin: auto;
  width: 100%;
  min-height: 100%;
`;

function SliderItem(props) {
  return (
    <BannerImgContent>
      <BannerImg src={props.src} alt={props.alt} />
    </BannerImgContent>
  );
}

const ProductRecommend = styled.div`
  text-align: center;
  ${MEDIA_QUERY} {
    flex-direction: column;
  }
`;

const Product = styled.div`
  width: 260px;
  position: relative;
  display: inline-block;
  margin: 20px;
  background: ${(props) => props.theme.colors.neutralWhite};
  border-radius: 5px;
  :hover {
    box-shadow: 0 3px 22px 1px rgb(100 100 100 / 32%);
  }
  ${MEDIA_QUERY} {
    width: 300px;
  }
`;

const Pointer = styled.div`
  display: none;
  position: absolute;
  z-index: 2;
  width: 46px;
  height: 46px;
  font-size: ${(props) => props.theme.fontSize.h4};
  font-weight: bold;
  top: 72%;
  border-radius: 50%;
  left: 76%;
  color: ${(props) => props.theme.colors.neutralWhite};
  background: ${(props) => props.theme.colors.mainPrimary};
  ${MEDIA_QUERY} {
    width: 60px;
    height: 60px;
    font-size: ${(props) => props.theme.fontSize.h3};
  }
`;

const ProductLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.neutralBlack};
  &:hover {
    ${Pointer} {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const ProductImage = styled.img`
  width: 100%;
  border-radius: 5px;
`;

const ProductName = styled(BodyLarge)`
  position: relative;
  top: -10px;
  padding: 15px 20px;
  text-align: left;
  z-index: 1;
  background-color: white;
  text-align: left;
`;

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

const HomePageContent = styled.div`
  margin: 0px;
`;

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    pauseOnHover: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 2500,
  };
  return (
    <HomePageContent>
      <BannerContent>
        <Slider {...settings}>
          <SliderItem
            src={
              "https://images.unsplash.com/photo-1562007908-69cf18a6da04?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
            }
            alt="pic1"
          />
          <SliderItem src={"https://imgur.com/HB8fY8K.jpg"} alt="pic2" />
          <SliderItem
            src={
              "https://images.unsplash.com/photo-1601000937859-3031d1be1caa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
            }
            alt="pic3"
          />
        </Slider>
      </BannerContent>
      <SubTitle>人氣商品</SubTitle>
      <ProductRecommend>
        <RecommendItem
          itemLink="/product/1"
          itemImg="https://imgur.com/lxWa1BS.png"
          itemName="可麗露"
        />
        <RecommendItem
          itemLink="/product/1"
          itemImg="https://imgur.com/lxWa1BS.png"
          itemName="可麗露"
        />
        <RecommendItem
          itemLink="/product/1"
          itemImg="https://imgur.com/lxWa1BS.png"
          itemName="可麗露"
        />
        <RecommendItem
          itemLink="/product/1"
          itemImg="https://imgur.com/lxWa1BS.png"
          itemName="可麗露"
        />
      </ProductRecommend>
    </HomePageContent>
  );
}

export default function HomePage() {
  return <Banner />;
}

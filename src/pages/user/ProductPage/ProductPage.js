import styled from "styled-components";
import {
  MEDIA_QUERY,
  Caption1,
  Caption2,
  H2,
  H4,
  H3,
  H5,
  Button,
  Body,
} from "../../../constants/style";

const Content = styled.div`
  margin: 40px 80px;
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
const ProductHead = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralLightGrey};
`;

const ProductTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProductName = styled(H3)`
  margin: 0;
`;

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
const ProductPromoPrice = styled(H2)``;
const ProductPrice = styled(H4)`
  margin-left: 20px;
  color: ${(props) => props.theme.colors.neutralDarkGrey};
  text-decoration: line-through;
`;
const ProductContent = styled(Body)`
  word-break: break-all;
  white-space: pre-line;
  margin: 20px 0;
  ${MEDIA_QUERY} {
    font-size: ${(props) => props.theme.fontSize.h4};
  }
`;

const ProductCounter = styled.div`
  margin: 30px 0;
`;
const CounterArea = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  ${MEDIA_QUERY} {
    font-size: ${(props) => props.theme.fontSize.h2};
  }
`;
const Counter = styled.div`
  margin-right: 10px;
  text-align: center;
  width: 35px;
  height: 35px;
  cursor: pointer;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: ${(props) => props.theme.fontSize.h3};
  color: ${(props) => props.theme.colors.mainPrimary};
  background: ${(props) => props.theme.colors.neutralPaleGrey};
  & + & {
    margin-left: 10px;
    ${MEDIA_QUERY} {
      margin: 0 20px;
      font-size: ${(props) => props.theme.fontSize.h1};
    }
  }
  ${MEDIA_QUERY} {
    margin-right: 20px;
    width: 60px;
    height: 60px;
  }
`;

const AddToCart = styled(Button)`
  margin: 20px 0;
  cursor: pointer;
  padding: 20px 100px;
  border: none;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.neutralWhite};
  background: ${(props) => props.theme.colors.mainPrimary};
  ${MEDIA_QUERY} {
    width: 100%;
    font-size: ${(props) => props.theme.fontSize.h3};
  }
`;

export default function ProductPage() {
  return (
    <Content>
      <CategoryBar>
        <Caption1>常溫蛋糕 /</Caption1>
        <Caption2>可麗露</Caption2>
      </CategoryBar>
      <Product>
        <ProductImage>
          <img src="https://imgur.com/lxWa1BS.png" alt="product"></img>
        </ProductImage>
        <ProductDesc>
          <ProductHead>
            <ProductTitle>
              <ProductName>可麗露</ProductName>
              <AddToLove>
                <span>❤</span>
              </AddToLove>
            </ProductTitle>
            <ProductPrices>
              <ProductPromoPrice>$180</ProductPromoPrice>
              <ProductPrice>$200</ProductPrice>
            </ProductPrices>
          </ProductHead>
          <ProductContent>
            <p>濃郁抹茶派皮, 搭配新鮮抹茶生巧克力 等待熟成的時間到來</p>
            <p>
              在嘴裡化開,空氣中飄著陣陣茶香 看似單純的結合卻營造出有深度的層次感
            </p>
            <p>/保存方式/ 蛋糕可常溫保存14天</p>
            <p>/優惠/ 滿50盒打95折+免運一個地址</p>
            <p>
              滿100盒打9折+免運兩個地址 建議可以統一寄送到同一個地址在分送喔！
            </p>
          </ProductContent>
          <ProductCounter>
            <H5>數量：</H5>
            <CounterArea>
              <Counter>
                <span>−</span>
              </Counter>
              1
              <Counter>
                <span>＋</span>
              </Counter>
            </CounterArea>
            <H5>庫存：10</H5>
          </ProductCounter>
          <AddToCart>加入購物車</AddToCart>
        </ProductDesc>
      </Product>
    </Content>
  );
}

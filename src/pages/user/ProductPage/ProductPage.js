import { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import plusCircleOutlined from "@iconify-icons/ant-design/plus-circle-outlined";
import minusCircleOutlined from "@iconify-icons/ant-design/minus-circle-outlined";

import {
  MEDIA_QUERY,
  Caption1,
  Caption2,
  H2,
  H4,
  H3,
  Button,
  Body,
} from "../../../constants/style";

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
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
const ProductHead = styled.div``;

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
  line-height: 2;
  padding: 20px 0;
  border-top: 1px solid ${(props) => props.theme.colors.neutralLightGrey};
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralLightGrey};

  ${MEDIA_QUERY} {
    font-size: ${(props) => props.theme.fontSize.h5};
  }
`;

const ProductStorage = styled.div`
  text-align: right;
`;

const ProductCounter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  font-size: ${(props) => props.theme.fontSize.h4};
`;

const CounterArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    width: 40px;
    height: 40px;
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CounterIcon = styled(Icon)`
  width: 32px;
  height: 32px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.mainPrimary};
`;

const AddToCart = styled.div`
  display: flex;
  justify-content: center;

  button {
    cursor: pointer;
    padding: 20px 100px;
    border: none;
    border-radius: 4px;
    color: ${(props) => props.theme.colors.neutralWhite};
    background: ${(props) => props.theme.colors.mainPrimary};
    font-size: ${(props) => props.theme.fontSize.bodyLarge};
  }
`;

export default function ProductPage() {
  const history = useHistory();
  const { id } = useParams();

  const [itemCount, setItemCount] = useState(1);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "可麗露",
      CategoryId: 1,
      info: `濃郁抹茶派皮，搭配新鮮抹茶生巧克力，等待熟成的時間到來在嘴裡化開，空氣中飄著陣陣茶香，看似單純的結合卻營造出有深度的層次感，您一定不能錯過！
            
            /保存方式/
            蛋糕可常溫保存 14 天
            /優惠/
            滿 50 盒打 95 折+免運一個地址
            滿 100 盒打 9 折+免運兩個地址，建議可以統一寄送到同一個地址再分送喔！
       `,
      price: "280",
      promoPrice: "180",
      img: "https://imgur.com/lxWa1BS.png",
    },
    {
      id: 2,
      name: "經典草莓蛋糕聖誕特別版",
      CategoryId: 3,
      info: `冬天來臨，又到了一年一度的草莓季，鮮嫩欲滴的草莓搭配柔軟滑順的蛋糕體，送禮自用兩相宜，您一定要來好好品嚐！

              /保存方式/
              蛋糕需冷藏，請在 3 天內食用風味最佳
              /優惠/
              滿 50 盒打 95 折+免運一個地址
              滿 100 盒打 9 折+免運兩個地址，建議可以統一寄送到同一個地址再分送喔！
        `,
      price: "1888",
      promoPrice: "666",
      img:
        "https://images.unsplash.com/photo-1589119908995-c6837fa14848?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      name: "滿滿的草莓塔",
      CategoryId: 2,
      info: `冬天來臨，又到了一年一度的草莓季，鮮嫩欲滴的草莓搭配柔軟滑順的蛋糕體，送禮自用兩相宜，您一定要來好好品嚐！

              /保存方式/
              蛋糕需冷藏，請在 3 天內食用風味最佳
              /優惠/
              滿 50 盒打 95 折+免運一個地址
              滿 100 盒打 9 折+免運兩個地址，建議可以統一寄送到同一個地址再分送喔！
        `,
      price: "350",
      promoPrice: "288",
      img:
        "https://images.unsplash.com/photo-1558231728-b4e138755840?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=673&q=80",
    },
    {
      id: 4,
      name: "可不可麗露",
      CategoryId: 1,
      info: `濃郁抹茶派皮，搭配新鮮抹茶生巧克力，等待熟成的時間到來在嘴裡化開，空氣中飄著陣陣茶香，看似單純的結合卻營造出有深度的層次感，您一定不能錯過！
            
            /保存方式/
            蛋糕可常溫保存 14 天
            /優惠/
            滿 50 盒打 95 折+免運一個地址
            滿 100 盒打 9 折+免運兩個地址，建議可以統一寄送到同一個地址再分送喔！
       `,
      price: "380",
      promoPrice: "250",
      img: "https://imgur.com/lxWa1BS.png",
    },
  ]);
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "常溫蛋糕",
    },
    {
      id: 2,
      name: "家常塔派",
    },
    {
      id: 3,
      name: "招牌蛋糕",
    },
  ]);

  const [product, setProduct] = useState(products[id - 1]);
  const [cart, setCart] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("cart")) || [];
    if (data) {
      setCart(data);
    }
  }, []);

  const handleClickDown = () => {
    if (itemCount === 1) return;
    setItemCount((preCount) => preCount - 1);
  };

  const handleClickUp = () => {
    setItemCount((preCount) => preCount + 1);
  };

  const handleAddToCart = () => {
    let cartItem = {
      id: product.id,
      productName: product.name,
      count: itemCount,
      promoPrice: product.promoPrice,
      subTotal: itemCount * product.promoPrice,
      img: product.img,
    };
    setCart([...cart, cartItem]);
    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));

    history.push("/cart");
  };

  return (
    <Content>
      <CategoryBar>
        <Caption1>{categories[product.CategoryId - 1].name} /</Caption1>
        <Caption2>{product.name}</Caption2>
      </CategoryBar>
      <Product>
        <ProductImage>
          <img src={product.img} alt="product"></img>
        </ProductImage>
        <ProductDesc>
          <ProductHead>
            <ProductTitle>
              <ProductName>{product.name}</ProductName>
              <AddToLove>
                <span>❤</span>
              </AddToLove>
            </ProductTitle>
            <ProductPrices>
              <ProductPromoPrice>${product.promoPrice}</ProductPromoPrice>
              <ProductPrice>${product.price}</ProductPrice>
            </ProductPrices>
          </ProductHead>
          <ProductContent>{product.info}</ProductContent>
          <ProductCounter>
            <ProductStorage>庫存：10</ProductStorage>
            <CounterArea>
              <CounterIcon
                icon={minusCircleOutlined}
                onClick={handleClickDown}
              ></CounterIcon>
              <span>{itemCount}</span>
              <CounterIcon
                icon={plusCircleOutlined}
                onClick={handleClickUp}
              ></CounterIcon>
            </CounterArea>
          </ProductCounter>
          <AddToCart>
            <Button onClick={handleAddToCart}>加入購物車</Button>
          </AddToCart>
        </ProductDesc>
      </Product>
    </Content>
  );
}

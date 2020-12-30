import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import plusCircleOutlined from "@iconify-icons/ant-design/plus-circle-outlined";
import minusCircleOutlined from "@iconify-icons/ant-design/minus-circle-outlined";

import {
  H1,
  H3,
  H4,
  H5,
  BodyLarge,
  MEDIA_QUERY,
} from "../../../constants/style";

const CartContainer = styled.div`
  max-width: 860px;
  margin: 0 auto;
  padding: 20px;

  * {
    box-sizing: border-box;
  }

  a,
  button {
    text-decoration: none;
    border: none;
    outline: none;
  }

  ${MEDIA_QUERY} {
    height: 100%;
    max-width: 100%;
  }
`;

const CartTitle = styled(H1)`
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralLightGrey};
  padding-bottom: 6px;
`;

const CartContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

  ${MEDIA_QUERY} {
    flex-direction: column;
    align-items: center;
  }
`;

const CartListContainer = styled.div`
  min-width: 440px;
  height: 100%;
  padding: 10px 30px;
  border: 1px solid ${(props) => props.theme.colors.neutralLightGrey};

  ${MEDIA_QUERY} {
    margin: 0;
  }
`;

const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0;
`;

const ImgLink = styled(Link)`
  width: 100px;
  height: 100px;
  border-radius: 4px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

const CartItemContent = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 20px;
  flex: 1;
`;

const OderItemDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartItemTitle = styled(Link)`
  span {
    color: ${(props) => props.theme.colors.neutralBlack};
    font-size: ${(props) => props.theme.fontSize.h4};
    font-weight: bold;
  }

  :hover {
    span {
      border-bottom: 1px solid ${(props) => props.theme.colors.neutralBlack};
    }
  }
`;

const CartItemFeature = styled(H5)`
  margin: 6px 0;
  color: ${(props) => props.theme.colors.neutralDarkGrey};
`;

const CounterArea = styled(H4)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;

  & div {
    padding: 0 16px;
  }

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

const CartItemPrice = styled(BodyLarge)``;

const CartSummaryContainer = styled.div`
  width: 360px;
  height: 300px;
  border: 1px solid ${(props) => props.theme.colors.neutralLightGrey};
  padding: 10px 20px;

  ${MEDIA_QUERY} {
    margin-top: 30px;
  }
`;

const Subtotal = styled(BodyLarge)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const OrderTotalPrice = styled(H4)`
  text-align: right;
  padding-top: 20px;
  border-top: 1px solid ${(props) => props.theme.colors.neutralLightGrey};
`;

const ButtonContainer = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: row-reverse;

  a {
    border-radius: 4px;
    padding: 10px 32px;
    font-size: ${(props) => props.theme.fontSize.button};
    transition: ease-in-out 0.1s;
  }

  ${MEDIA_QUERY} {
    margin: 10px 0 20px 0;
    justify-content: center;
  }
`;

const SubmitButton = styled(Link)`
  color: ${(props) => props.theme.colors.neutralWhite};
  background: ${(props) => props.theme.colors.mainPrimary};

  :hover {
    color: ${(props) => props.theme.colors.neutralPaleGrey};
    background: ${(props) => props.theme.colors.uiNegative};
  }
`;

const CartEmpty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BackToHome = styled(SubmitButton)`
  border-radius: 4px;
  padding: 10px 32px;
  font-size: ${(props) => props.theme.fontSize.button};
  transition: ease-in-out 0.1s;
`;

function CartSummary({ totalPrice }) {
  return (
    <CartSummaryContainer>
      <H3>訂單摘要</H3>
      <Subtotal>
        <div>商品總計</div>
        <div>NT$ {totalPrice}</div>
      </Subtotal>
      <Subtotal>
        <div>運費總計</div>
        <div>NT$ 0</div>
      </Subtotal>
      <OrderTotalPrice>
        總付款金額 <b>NT$ {totalPrice}</b>
      </OrderTotalPrice>
      <ButtonContainer>
        <SubmitButton to="/checkout">前往結帳</SubmitButton>
      </ButtonContainer>
    </CartSummaryContainer>
  );
}

function CartList({ cartItem, cart, setCart }) {
  // 減少商品數
  const handleClickDown = (cartItem) => {
    if (cartItem.count === 1) {
      if (window.confirm("是否移除商品？")) {
        // 判斷移除商品的 productId 和 feature
        const newCart = cart.filter(
          (newCartItem) =>
            newCartItem.id !== cartItem.id ||
            newCartItem.feature !== cartItem.feature
        );
        setCart(newCart);
      }
      return;
    }

    setCart(
      // 建立新的 cart 陣列
      cart.map((newCartItem) => {
        // 判斷改變的商品的 productId 和 feature
        if (
          newCartItem.id !== cartItem.id ||
          newCartItem.feature !== cartItem.feature
        )
          return newCartItem;
        // 要改變的商品的 count 和 subTotal
        return {
          ...newCartItem,
          count: newCartItem.count - 1,
          subTotal: newCartItem.count * newCartItem.price,
        };
      })
    );
  };

  // 增加商品數
  const handleClickUp = (cartItem) => {
    if (cartItem.count >= cartItem.stock) {
      alert(`Sorry...此商品目前庫存: ${cartItem.stock}`);
      return;
    }

    setCart(
      cart.map((newCartItem) => {
        if (
          newCartItem.id !== cartItem.id ||
          newCartItem.feature !== cartItem.feature
        )
          return newCartItem;
        return {
          ...newCartItem,
          count: newCartItem.count + 1,
          subTotal: newCartItem.count * newCartItem.price,
        };
      })
    );
  };

  return (
    <CartItemContainer>
      <ImgLink
        to={`/product/${cartItem.id}`}
        target="_blank"
        style={{ backgroundImage: `url(${cartItem.image})` }}
      ></ImgLink>
      <CartItemContent>
        <CartItemTitle to={`/product/${cartItem.id}`} target="_blank">
          <span>{cartItem.productName}</span>
          <CartItemFeature>{cartItem.feature}</CartItemFeature>
        </CartItemTitle>
        <OderItemDetails>
          <CounterArea>
            <CounterIcon
              icon={minusCircleOutlined}
              onClick={() => {
                handleClickDown(cartItem);
              }}
            ></CounterIcon>
            <span>{cartItem.count}</span>
            <CounterIcon
              icon={plusCircleOutlined}
              onClick={() => {
                handleClickUp(cartItem);
              }}
            ></CounterIcon>
          </CounterArea>
          <CartItemPrice>NT$ {cartItem.price}</CartItemPrice>
        </OderItemDetails>
      </CartItemContent>
    </CartItemContainer>
  );
}

export default function CartPage() {
  const cartData = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(cartData || []);
  const [totalPrice, setTotalPrice] = useState();

  // 當 cart 改變就執行
  useEffect(() => {
    // 寫入 localStorage
    writeCartToLocalStorage(cart);
    // 計算總價
    setTotalPrice(
      cart.reduce(
        (totalCost, { subTotal: itemCost }) => totalCost + parseFloat(itemCost),
        0
      )
    );
  }, [cart]);

  const writeCartToLocalStorage = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <CartContainer>
      <CartTitle>購物車</CartTitle>
      {cart.length > 0 ? (
        <>
          <CartContent>
            <CartListContainer>
              {cart.map((cartItem) => (
                <CartList
                  key={cartItem.id}
                  cartItem={cartItem}
                  cart={cart}
                  setCart={setCart}
                />
              ))}
            </CartListContainer>
            <CartSummary totalPrice={totalPrice} />
          </CartContent>
        </>
      ) : (
        <CartEmpty>
          <H3>購物車目前沒有商品唷！</H3>
          <BackToHome to="/products">回商品頁逛逛</BackToHome>
        </CartEmpty>
      )}
    </CartContainer>
  );
}

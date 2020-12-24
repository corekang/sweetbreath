import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { theme } from "../../../constants/theme";
import { H1, H3, H4, BodyLarge, MEDIA_QUERY } from "../../../constants/style";

const CartContainer = styled.div`
  max-width: 900px;
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
  border-bottom: 1px solid ${theme.colors.neutralLightGrey};
  padding-bottom: 6px;
`;

const CartContent = styled.div`
  display: flex;
  justify-content: space-between;

  ${MEDIA_QUERY} {
    flex-direction: column;
    align-items: center;
  }
`;

const CartListContainer = styled.div`
  max-width: 460px;
  padding: 24px 20px;
  margin-right: 40px;
  border: 1px solid ${theme.colors.neutralLightGrey};

  ${MEDIA_QUERY} {
    margin: 0;
  }
`;

const CartItemContainer = styled.div`
  display: flex;
  margin-bottom: 10px;

  img {
    width: 90px;
    height: 90px;
  }
`;

const CartItemContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 20px;
`;

const OderItemDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CartItemTitle = styled(BodyLarge)`
  a {
    color: ${theme.colors.neutralBlack};
  }

  a:hover {
    border-bottom: 1px solid ${theme.colors.neutralBlack};
  }
`;

const CartItemNumber = styled(BodyLarge)`
  display: flex;

  & div {
    padding: 0 16px;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 24px;
  height: 24px;
  font-size: ${theme.fontSize.h3};
  border-radius: 50%;
  color: ${theme.colors.mainPrimary};
  background: ${theme.colors.neutralPaleGrey};
`;

const CartItemPrice = styled(BodyLarge)``;

const CartSummaryContainer = styled.div`
  width: 360px;
  height: 300px;
  border: 1px solid ${theme.colors.neutralLightGrey};
  margin-top: 30px;
  padding: 10px 20px;
`;

const Subtotal = styled(BodyLarge)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const OrderTotalPrice = styled(H4)`
  text-align: right;
  padding-top: 20px;
  border-top: 1px solid ${theme.colors.neutralLightGrey};
`;

const ButtonContainer = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: row-reverse;

  a {
    border-radius: 4px;
    padding: 10px 32px;
    font-size: ${theme.fontSize.button};
    transition: ease-in-out 0.1s;
  }

  ${MEDIA_QUERY} {
    margin: 10px 0 20px 0;
    justify-content: center;
  }
`;

const SubmitButton = styled(Link)`
  color: ${theme.colors.neutralWhite};
  background: ${theme.colors.mainPrimary};

  :hover {
    color: ${theme.colors.neutralPaleGrey};
    background: ${theme.colors.uiNegative};
  }
`;

function CartSummary() {
  return (
    <CartSummaryContainer>
      <H3>訂單摘要</H3>
      <Subtotal>
        <div>商品總計</div>
        <div>NT$ 200</div>
      </Subtotal>
      <Subtotal>
        <div>運費總計</div>
        <div>NT$ 0</div>
      </Subtotal>
      <OrderTotalPrice>
        總付款金額 <b>NT$ 200</b>
      </OrderTotalPrice>
      <ButtonContainer>
        <SubmitButton to="/checkout">前往結帳</SubmitButton>
      </ButtonContainer>
    </CartSummaryContainer>
  );
}

function CartItem() {
  const [itemCount, setItemCount] = useState(1);
  const [itemPrice, setItemPrice] = useState(100);

  const handleClickDown = () => {
    if (itemCount < 1) return;
    setItemCount((preCount) => preCount - 1);
  };
  const handleClickUp = () => {
    setItemCount((preCount) => preCount + 1);
  };

  return (
    <CartItemContainer>
      <Link to="/product/1" target="_blank">
        <img
          src="https://img2.momoshop.com.tw/goodsimg/0007/249/953/7249953_L.jpg?t=1608292496"
          alt="product"
        ></img>
      </Link>
      <CartItemContent>
        <CartItemTitle>
          <Link to="/product/1" target="_blank">
            商品名稱商品名稱商品名稱商品名稱商品名稱商品名稱
          </Link>
        </CartItemTitle>
        <OderItemDetails>
          <CartItemNumber>
            <Button onClick={handleClickDown}>-</Button>
            <div>{itemCount}</div>
            <Button onClick={handleClickUp}>+</Button>
          </CartItemNumber>
          <CartItemPrice>NT$ {itemPrice}</CartItemPrice>
        </OderItemDetails>
      </CartItemContent>
    </CartItemContainer>
  );
}

function CartList() {
  return (
    <CartListContainer>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </CartListContainer>
  );
}

export default function CartPage() {
  return (
    <CartContainer>
      <CartTitle>購物車</CartTitle>
      <CartContent>
        <CartList />
        <CartSummary />
      </CartContent>
    </CartContainer>
  );
}

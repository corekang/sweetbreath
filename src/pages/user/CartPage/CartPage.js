import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import plusCircleOutlined from "@iconify-icons/ant-design/plus-circle-outlined";
import minusCircleOutlined from "@iconify-icons/ant-design/minus-circle-outlined";

import { theme } from "../../../constants/theme";
import { H1, H3, H4, BodyLarge, MEDIA_QUERY } from "../../../constants/style";

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
  border-bottom: 1px solid ${theme.colors.neutralLightGrey};
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
  padding: 30px;
  border: 1px solid ${theme.colors.neutralLightGrey};

  ${MEDIA_QUERY} {
    margin: 0;
  }
`;

const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
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

const CartItemTitle = styled(BodyLarge)`
  padding: 10px 0;

  a {
    color: ${theme.colors.neutralBlack};
  }

  a:hover {
    border-bottom: 1px solid ${theme.colors.neutralBlack};
  }
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
  border: 1px solid ${theme.colors.neutralLightGrey};
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

const CartEmpty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BackToHome = styled(SubmitButton)`
  border-radius: 4px;
  padding: 10px 32px;
  font-size: ${theme.fontSize.button};
  transition: ease-in-out 0.1s;
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

function CartList({ cartItem }) {
  const [itemCount, setItemCount] = useState(cartItem.count);
  const [itemPrice, setItemPrice] = useState(cartItem.promoPrice);
  const handleClickDown = () => {
    if (itemCount < 1) return;
    setItemCount((preCount) => preCount - 1);
  };
  const handleClickUp = () => {
    setItemCount((preCount) => preCount + 1);
  };

  return (
    <CartItemContainer>
      <ImgLink
        to={`/product/${cartItem.id}`}
        target="_blank"
        style={{ backgroundImage: `url(${cartItem.img})` }}
      ></ImgLink>
      <CartItemContent>
        <CartItemTitle to={`/product/${cartItem.id}`} target="_blank">
          <Link>{cartItem.productName}</Link>
        </CartItemTitle>
        <OderItemDetails>
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
          <CartItemPrice>NT$ {itemPrice}</CartItemPrice>
        </OderItemDetails>
      </CartItemContent>
    </CartItemContainer>
  );
}

export default function CartPage() {
  const [subTotal, setSubTotal] = useState();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("cart")) || [];
    if (data) {
      setCart(data);
    }
  }, []);

  return (
    <CartContainer>
      <CartTitle>購物車</CartTitle>
      {cart.length > 0 ? (
        <>
          <CartContent>
            <CartListContainer>
              {cart.map((cartItem) => (
                <CartList key={cartItem.id} cartItem={cartItem} />
              ))}
            </CartListContainer>
            <CartSummary />
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

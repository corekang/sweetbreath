import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";

import { theme } from "../../../constants/theme";
import {
  H2,
  H3,
  H4,
  H5,
  Caption1,
  BodyLarge,
  Input,
  MEDIA_QUERY,
} from "../../../constants/style";

const CheckoutContainer = styled.div`
  max-width: 800px;
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
  }
`;

const CheckoutHeader = styled.div``;

const CheckoutTitle = styled(H2)``;

const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const StepContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StepNumber = styled(Caption1)`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;

  background: ${(props) =>
    props.className === "selected"
      ? `${theme.colors.mainPrimary}`
      : `${theme.colors.neutralWhite}`};

  color: ${(props) =>
    props.className === "selected"
      ? `${theme.colors.neutralWhite}`
      : `${theme.colors.mainPrimary}`};

  border: ${(props) =>
    props.className === "selected"
      ? `1px solid ${theme.colors.neutralWhite}`
      : `1px solid ${theme.colors.mainPrimary}`};
`;

const StepName = styled(H5)`
  margin: 0;
`;

const StepLine = styled.div`
  width: 60px;
  margin: 10px 20px;
  border: 1px solid ${theme.colors.mainPrimary};
`;

const CheckoutContent = styled.div`
  display: flex;
  justify-content: space-between;

  ${MEDIA_QUERY} {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const CheckoutForm = styled.form`
  width: 350px;
  margin-right: 80px;

  ${MEDIA_QUERY} {
    margin: 0;
  }
`;

const InputContainer = styled.div`
  & H5 {
    margin: 0;
  }

  & input {
    margin: 8px 0;
    padding: 8px;
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;

  a,
  button {
    border-radius: 4px;
    padding: 10px 32px;
    font-size: ${theme.fontSize.button};
    transition: ease-in-out 0.1s;
    cursor: pointer;
  }

  ${MEDIA_QUERY} {
    margin: 10px 0 20px 0;
  }
`;

const BackButton = styled(Link)`
  color: ${theme.colors.neutralDarkGrey};
  background: ${theme.colors.neutralPaleGrey};

  :hover {
    color: ${theme.colors.neutralBlack};
    background: ${theme.colors.neutralLightGrey};
  }
`;

const SubmitButton = styled.button`
  color: ${theme.colors.neutralWhite};
  background: ${theme.colors.mainPrimary};

  :hover {
    color: ${theme.colors.neutralPaleGrey};
    background: ${theme.colors.uiNegative};
  }
`;

const OrderListContainer = styled.div`
  width: 400px;
  padding: 10px 20px;
  margin-bottom: 20px;
  border: 1px solid ${theme.colors.neutralLightGrey};
`;

const OrderItemsContainer = styled.div`
  border-bottom: 1px solid ${theme.colors.neutralLightGrey};
  padding: 10px 0;
`;

const OrderItemContainer = styled.div`
  display: flex;
  margin-bottom: 10px;

  img {
    width: 90px;
    height: 90px;
  }
`;

const OrderItemContent = styled.div`
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

const OrderItemTitle = styled(BodyLarge)`
  a {
    color: ${theme.colors.neutralBlack};
  }

  a:hover {
    border-bottom: 1px solid ${theme.colors.neutralBlack};
  }
`;

const OrderItemNumber = styled(BodyLarge)`
  display: flex;
  justify-content: center;
  align-items: center;

  & div {
    margin: 0 8px;
  }
`;

const OrderItemPrice = styled(BodyLarge)``;

const OrderTotalPrice = styled(H4)`
  text-align: right;
  margin: 20px 0;
`;

function OrderItem() {
  return (
    <OrderItemContainer>
      <Link to="/product/1" target="_blank">
        <img
          src="https://img2.momoshop.com.tw/goodsimg/0007/249/953/7249953_L.jpg?t=1608292496"
          alt="product"
        ></img>
      </Link>
      <OrderItemContent>
        <OrderItemTitle>
          <Link to="/product/1" target="_blank">
            商品名稱商品名稱商品名稱商品名稱商品名稱商品名稱
          </Link>
        </OrderItemTitle>
        <OderItemDetails>
          <OrderItemNumber>X1</OrderItemNumber>
          <OrderItemPrice>NT$ 100</OrderItemPrice>
        </OderItemDetails>
      </OrderItemContent>
    </OrderItemContainer>
  );
}

function OrderList() {
  return (
    <OrderListContainer>
      <H3>商品總計</H3>
      <OrderItemsContainer>
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </OrderItemsContainer>
      <OrderTotalPrice>
        總付款金額：<b>NT$ 200</b>
      </OrderTotalPrice>
    </OrderListContainer>
  );
}

function CheckoutList() {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`下單成功，感謝您的購買`);
    history.push("/orders");
  };

  return (
    <CheckoutForm onSubmit={handleSubmit}>
      <>
        <InputContainer>
          <H5>收件人姓名</H5>
          <Input type="text" />
        </InputContainer>
        <InputContainer>
          <H5>收件地址</H5>
          <Input type="text" />
        </InputContainer>
        <InputContainer>
          <H5>郵遞區號</H5>
          <Input type="text" />
        </InputContainer>
        <InputContainer>
          <H5>電話號碼</H5>
          <Input type="text" />
        </InputContainer>
      </>
      <ButtonContainer>
        <BackButton to="/cart">回到購物車</BackButton>
        <SubmitButton>確認送出</SubmitButton>
      </ButtonContainer>
    </CheckoutForm>
  );
}

function ProgressBar() {
  return (
    <ProgressBarContainer>
      <StepContainer>
        <StepNumber>1</StepNumber>
        <StepName>登入會員</StepName>
      </StepContainer>
      <StepContainer>
        <StepLine></StepLine>
        <StepNumber className={"selected"}>2</StepNumber>
        <StepName>填寫地址與付款</StepName>
      </StepContainer>
    </ProgressBarContainer>
  );
}

export default function CheckoutPage() {
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <CheckoutTitle>結帳</CheckoutTitle>
        <ProgressBar />
      </CheckoutHeader>
      <CheckoutContent>
        <CheckoutList />
        <OrderList />
      </CheckoutContent>
    </CheckoutContainer>
  );
}

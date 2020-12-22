import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { theme } from "../../../constants/theme";
import {
  H2,
  H3,
  H4,
  H5,
  BodyLarge,
  MEDIA_QUERY,
} from "../../../constants/style";

const OrderListContainer = styled.div`
  height: 100vh;
  max-width: 700px;
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

const OrderListHeader = styled.div``;

const OrderListTitle = styled(H2)`
  padding: 8px;
`;

const OrderStatus = styled.div`
  display: flex;
  margin-bottom: 30px;
  border-bottom: 1px solid ${theme.colors.neutralLightGrey};

  button {
    margin-right: 30px;
    padding: 6px 8px;
    font-size: ${theme.fontSize.bodyLarge};
    color: ${theme.colors.neutralDarkGrey};
    background: ${theme.colors.neutralPaleGrey};
    cursor: pointer;

    :hover {
      color: ${theme.colors.neutralBlack};
      background: ${theme.colors.neutralLightGrey};
    }
  }
`;

const OrdersContainer = styled.div``;

const OrderContainer = styled.div`
  max-width: 800px;
  margin-bottom: 20px;
  border: 1px solid ${theme.colors.neutralLightGrey};
`;

const OrderHeader = styled.div`
  display: flex;
  padding: 10px 20px;
  background: ${theme.colors.neutralLightGrey};

  div {
    margin-right: 24px;
  }

  ${MEDIA_QUERY} {
    flex-direction: column;
  }
`;

const OrderItemsContainer = styled.div`
  padding: 10px 20px;
  border-bottom: 1px solid ${theme.colors.neutralLightGrey};
`;

const OrderItemContainer = styled.div`
  display: flex;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0px;
  }

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
`;

const OrderItemPrice = styled(BodyLarge)``;

const OrderTotalPrice = styled(H4)`
  padding: 0 20px;
  text-align: right;
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

function Order() {
  return (
    <OrderContainer>
      <OrderHeader>
        <div>訂單日期：2020/12/12</div>
        <div>訂單號碼：12345678</div>
        <div>訂單狀態：處理中</div>
      </OrderHeader>
      <OrderItemsContainer>
        <OrderItem />
        <OrderItem />
      </OrderItemsContainer>
      <OrderTotalPrice>
        訂單金額：<b>NT$ 200</b>
      </OrderTotalPrice>
    </OrderContainer>
  );
}

export default function OrderListPage() {
  const [orderStatus, setOrderStatus] = useState(false);

  return (
    <OrderListContainer>
      <OrderListHeader>
        <OrderListTitle>購買清單</OrderListTitle>
        <OrderStatus>
          <button>所有清單</button>
          <button>未完成</button>
          <button>已完成</button>
        </OrderStatus>
      </OrderListHeader>
      <OrdersContainer>
        <Order />
        <Order />
      </OrdersContainer>
    </OrderListContainer>
  );
}

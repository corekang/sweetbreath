import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { theme } from "../../../constants/theme";
import { H2, BodyLarge, MEDIA_QUERY } from "../../../constants/style";

const OrderListContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;

  * {
    box-sizing: border-box;
  }

  a,
  button {
    text-decoration: none;

    outline: none;
  }

  ${MEDIA_QUERY} {
    height: 100%;
    max-width: 100%;
  }
`;

const OrderListHeader = styled.div``;

const OrderListTitle = styled(H2)``;

const OrderStatusButtons = styled.div`
  display: flex;
  margin-bottom: 40px;
  border-bottom: 1px solid ${theme.colors.neutralLightGrey};
`;

const StatusButton = styled.button`
  cursor: pointer;
  margin-right: 30px;
  padding: 12px;
  font-size: ${theme.fontSize.bodyLarge};
  background: transparent;
  border: 0px;
  transition: ease-in-out 0.2s;

  color: ${(props) =>
    props.className === "selected"
      ? `${theme.colors.neutralBlack}`
      : `${theme.colors.neutralDarkGrey}`};

  border-bottom: 4px solid
    ${(props) =>
      props.className === "selected"
        ? `${theme.colors.mainPrimary}`
        : `${theme.colors.neutralPaleGrey}`};

  :hover {
    color: ${theme.colors.neutralBlack};
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
  padding: 12px 20px;
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

const OrderTotalPrice = styled(BodyLarge)`
  margin: 12px 20px;
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

function Order({ order }) {
  return (
    <OrderContainer>
      <OrderHeader>
        <div>訂單日期：{order.createdAt}</div>
        <div>訂單號碼：{order.orderNumber}</div>
        <div>訂單狀態：{order.orderStatus}</div>
      </OrderHeader>
      <OrderItemsContainer>
        <OrderItem />
        <OrderItem />
      </OrderItemsContainer>
      <OrderTotalPrice>
        訂單金額：<b>NT$ {order.totalAmount}</b>
      </OrderTotalPrice>
    </OrderContainer>
  );
}

export default function AdminOrderListPage() {
  const [orders, setOrders] = useState([
    {
      id: 1,
      orderNumber: 100001,
      userNumber: 1001,
      totalAmount: 288,
      orderStatus: "處理中",
      isPaid: false,
      isSent: false,
      isDone: false,
      isCancel: false,
      createdAt: "2020/12/23 00:00:00",
    },
    {
      id: 2,
      orderNumber: 100002,
      userNumber: 1002,
      totalAmount: 499,
      orderStatus: "已完成",
      isPaid: true,
      isSent: true,
      isDone: true,
      isCancel: false,
      createdAt: "2020/12/20 08:08:08",
    },

    {
      id: 3,
      orderNumber: 100003,
      userNumber: 188,
      totalAmount: 88888,
      orderStatus: "已取消",
      isPaid: false,
      isSent: false,
      isDone: true,
      isCancel: true,
      createdAt: "2020/12/12 12:12:12",
    },
  ]);

  const [filterState, setFilterState] = useState("All");

  const handleChangeFilter = (value) => setFilterState(value);

  return (
    <OrderListContainer>
      <OrderListHeader>
        <OrderListTitle>購買清單</OrderListTitle>
        <OrderStatusButtons>
          <StatusButton
            onClick={() => handleChangeFilter("All")}
            className={filterState === "All" ? "selected" : ""}
          >
            所有訂單
          </StatusButton>
          <StatusButton
            onClick={() => handleChangeFilter("Active")}
            className={filterState === "Active" ? "selected" : ""}
          >
            處理中
          </StatusButton>
          <StatusButton
            onClick={() => handleChangeFilter("Complete")}
            className={filterState === "Complete" ? "selected" : ""}
          >
            已完成
          </StatusButton>
          <StatusButton
            onClick={() => handleChangeFilter("Cancel")}
            className={filterState === "Cancel" ? "selected" : ""}
          >
            已取消
          </StatusButton>
        </OrderStatusButtons>
      </OrderListHeader>
      <OrdersContainer>
        {orders
          .filter((order) => {
            if (filterState === "All") return order;
            if (filterState === "Active") return order.orderStatus === "處理中";
            if (filterState === "Complete")
              return order.orderStatus === "已完成";
            if (filterState === "Cancel") return order.orderStatus === "已取消";
          })
          .map((order) => (
            <Order key={order.id} order={order} />
          ))}
      </OrdersContainer>
    </OrderListContainer>
  );
}

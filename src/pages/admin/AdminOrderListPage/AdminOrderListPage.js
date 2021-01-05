import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { theme } from "../../../constants/theme";
import { H1, BodyLarge, MEDIA_QUERY } from "../../../constants/style";
import { getOrders } from "../../../webAPI/orderAPI";
import { getProduct } from "../../../webAPI/productAPI";

const OrderListContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px;

  * {
    box-sizing: border-box;
  }
`;

const OrderListHeader = styled.div``;

const OrderStatusButtons = styled.div`
  display: flex;
  margin-bottom: 30px;
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

  ${MEDIA_QUERY} {
    margin-right: 20px;
  }
`;

const OrdersContainer = styled.div``;

const OrderContainer = styled.div`
  margin-bottom: 20px;
  border: 1px solid ${theme.colors.neutralLightGrey};
`;

const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: ${theme.colors.neutralLightGrey};
`;

const OrderDetails = styled.div``;

const OrderButtons = styled.div`
  button {
    font-size: ${theme.fontSize.bodyLarge};
    padding: 6px 12px;
    background: ${theme.colors.neutralDarkGrey};
    color: ${theme.colors.neutralWhite};
    border-radius: 4px;
    margin-left: 20px;
    cursor: pointer;
  }
`;

const OpenButton = styled.button``;

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

const NoOrder = styled.div``;

function OrderItem({ orderItem }) {
  return (
    <OrderItemContainer>
      <Link to={"/product/" + orderItem.product_id} target="_blank">
        <img src={orderItem.product_image} alt="product"></img>
      </Link>
      <OrderItemContent>
        <OrderItemTitle>
          <Link to={"/product/" + orderItem.product_id} target="_blank">
            {orderItem.product_name}
          </Link>
        </OrderItemTitle>
        <OderItemDetails>
          <OrderItemNumber>{orderItem.product_feature}</OrderItemNumber>
          <OrderItemNumber>x {orderItem.product_quantity}</OrderItemNumber>
          <OrderItemPrice>NT$ {orderItem.product_price}</OrderItemPrice>
        </OderItemDetails>
      </OrderItemContent>
    </OrderItemContainer>
  );
}

function Order({ order, orderStatus, setOrderStatus }) {
  const handleCompleteOrder = () => {};

  const handleCancelOrder = () => {};
  return (
    <OrderContainer>
      <OrderHeader>
        <OrderDetails>
          <div>
            訂單日期：
            {new Date(`${order.createdAt}`).toLocaleString()}
          </div>
          <div>訂單號碼：{order.order_number}</div>
          <div>訂單狀態：{order.status ? "已完成" : "未完成"}</div>
        </OrderDetails>
        <OrderButtons>
          <button onClick={handleCompleteOrder}>
            {order.is_paid ? "已付款" : "未付款"}
          </button>
          <button onClick={handleCancelOrder}>
            {order.is_sent ? "已出貨" : "未出貨"}
          </button>
          <button onClick={handleCancelOrder}>
            {order.is_cancel ? "已取消" : "取消訂單"}
          </button>
          <OpenButton>訂單明細</OpenButton>
        </OrderButtons>
      </OrderHeader>
      <OrderItemsContainer>
        {order.OrderItems.map((orderItem) => (
          <OrderItem
            key={orderItem.product && orderItem.feature}
            orderItem={orderItem}
          />
        ))}
      </OrderItemsContainer>
      <OrderTotalPrice>
        訂單金額：<b>NT$ {order.total}</b>
      </OrderTotalPrice>
    </OrderContainer>
  );
}

export default function AdminOrderListPage() {
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState(1);
  const [orderActive, setOrderActive] = useState(0);
  const [filterState, setFilterState] = useState("All");
  const [orderStatus, setOrderStatus] = useState("");

  useEffect(() => {
    getOrders().then((res) => {
      setOrders(res.data);
    });
  }, []);

  const handleChangeFilter = (value) => setFilterState(value);

  // orders.filter((order) => {
  //   if (filterState === "All") return order;
  //   if (filterState === "Active") return order.orderStatus === "處理中";
  //   if (filterState === "Complete") return order.orderStatus === "已完成";
  //   if (filterState === "Cancel") return order.orderStatus === "已取消";
  // });

  return (
    <OrderListContainer>
      <OrderListHeader>
        <H1>訂單管理</H1>
        <OrderStatusButtons>
          <StatusButton
            onClick={() => handleChangeFilter("All")}
            selected={status === 1}
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
        {!orders ? (
          <NoOrder>查無訂單</NoOrder>
        ) : (
          orders
            .reverse()
            .map((order) => (
              <Order
                key={order.id}
                order={order}
                orderStatus={orderStatus}
                setOrderStatus={setOrderStatus}
              />
            ))
        )}
      </OrdersContainer>
    </OrderListContainer>
  );
}

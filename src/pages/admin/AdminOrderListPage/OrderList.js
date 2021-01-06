import React, { useState } from "react";
import { OrderItem } from "./OrderItem";
import {
  IsDoneLabel,
  IsPaidLabel,
  IsSentLabel,
  OrderContainer,
  OrderContent,
  OrderDetail,
  OrderHeader,
  OrderItemsContainer,
  SettigButtons,
  SettingStatus,
} from "./style";
import PropTypes from "prop-types";

export function OrderList({ orders, setOrders, order, handleEditOrder }) {
  const [detailToggle, setDetailToggle] = useState(false);

  // 是否取消
  const handleIsCancelOrder = () => {
    if (order.is_cancel) return;
    if (window.confirm("確定取消此筆訂單嗎？")) {
      // 改畫面
      setOrders(
        orders.map((rawOrder) => {
          if (rawOrder.order_number !== order.order_number) return rawOrder;
          return {
            ...rawOrder,
            is_cancel: !rawOrder.is_cancel,
          };
        })
      );
      // 資料庫: 傳入要修改的資料
      const editData = {
        orderNumber: order.order_number,
        isPaid: order.is_paid,
        isSent: order.is_sent,
        isDone: order.is_done,
        isCancel: !order.is_cancel,
      };
      handleEditOrder(editData);
    }
  };

  // 訂單狀態
  const handleIsDoneOrder = () => {
    if (order.is_cancel) return;
    setOrders(
      orders.map((rawOrder) => {
        if (rawOrder.order_number !== order.order_number) return rawOrder;
        return {
          ...rawOrder,
          is_done: !rawOrder.is_done,
        };
      })
    );
    const editData = {
      orderNumber: order.order_number,
      isPaid: order.is_paid,
      isSent: order.is_sent,
      isDone: !order.is_done,
      isCancel: order.is_cancel,
    };
    handleEditOrder(editData);
  };

  // 付款狀態
  const handleIsPaidOrder = () => {
    if (order.is_cancel) return;
    setOrders(
      orders.map((rawOrder) => {
        if (rawOrder.order_number !== order.order_number) return rawOrder;
        return {
          ...rawOrder,
          is_paid: !rawOrder.is_paid,
        };
      })
    );
    const editData = {
      orderNumber: order.order_number,
      isPaid: !order.is_paid,
      isSent: order.is_sent,
      isDone: order.is_done,
      isCancel: order.is_cancel,
    };
    handleEditOrder(editData);
  };

  // 發貨狀態
  const handleIsSentOrder = () => {
    if (order.is_cancel) return;
    setOrders(
      orders.map((rawOrder) => {
        if (rawOrder.order_number !== order.order_number) return rawOrder;
        return {
          ...rawOrder,
          is_sent: !rawOrder.is_sent,
        };
      })
    );
    const editData = {
      orderNumber: order.order_number,
      isPaid: order.is_paid,
      isSent: !order.is_sent,
      isDone: order.is_done,
      isCancel: order.is_cancel,
    };
    handleEditOrder(editData);
  };

  // 展開明細
  const handleDetailClick = () => {
    setDetailToggle(!detailToggle);
  };

  return (
    <OrderContainer>
      <OrderHeader>
        <div> {order.order_number}</div>
        <div> {new Date(`${order.createdAt}`).toLocaleString()}</div>
        <SettingStatus>
          <IsDoneLabel
            isCancel={order.is_cancel}
            isDone={order.is_done}
            onClick={handleIsDoneOrder}
          >
            {(order.is_cancel && "已取消") ||
              (order.is_done ? "已完成" : "未完成")}
          </IsDoneLabel>
          <IsPaidLabel isPaid={order.is_paid} onClick={handleIsPaidOrder}>
            {order.is_paid ? "已付款" : "未付款"}
          </IsPaidLabel>
          <IsSentLabel isSent={order.is_sent} onClick={handleIsSentOrder}>
            {order.is_sent ? "已出貨" : "未出貨"}
          </IsSentLabel>
        </SettingStatus>
        <div>NT$ {order.total}</div>
        <SettigButtons>
          <button onClick={() => handleIsCancelOrder(order.order_number)}>
            取消
          </button>
          <button onClick={handleDetailClick}>明細</button>
        </SettigButtons>
      </OrderHeader>
      <OrderContent toggle={detailToggle}>
        <OrderDetail>
          <div>訂購人：{order.buyer_fullname}</div>
          <div>電子信箱：{order.buyer_email}</div>
          <div>電話號碼：{order.buyer_phone}</div>
          <div>郵遞區號：{order.postal_code}</div>
          <div>收件地址：{order.buyer_address}</div>
        </OrderDetail>
        <OrderItemsContainer>
          {order.OrderItems.map((orderItem) => (
            <OrderItem
              key={orderItem.product_id && orderItem.product_feature}
              orderItem={orderItem}
            />
          ))}
        </OrderItemsContainer>
      </OrderContent>
    </OrderContainer>
  );
}

OrderList.propTypes = {
  orders: PropTypes.array,
  order: PropTypes.object,
  setOrders: PropTypes.func,
  handleEditOrder: PropTypes.func,
};

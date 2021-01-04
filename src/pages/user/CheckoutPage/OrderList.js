import React from "react";
import PropTypes from "prop-types";
import { OrderItem } from "./OrderItem";
import {
  OrderListContainer,
  OrderItemsContainer,
  OrderTotalPrice,
} from "./style";

export function OrderList({ orderItem, totalPrice }) {
  return (
    <OrderListContainer>
      <h2>商品總計</h2>
      <OrderItemsContainer>
        {orderItem ? (
          orderItem.map((item) => (
            <OrderItem item={item} key={item.productName + item.feature} />
          ))
        ) : (
          <p>還沒有商品喔！</p>
        )}
      </OrderItemsContainer>
      <OrderTotalPrice>
        總付款金額：<b>NT$ {totalPrice}</b>
      </OrderTotalPrice>
    </OrderListContainer>
  );
}

OrderList.propTypes = {
  orderItem: PropTypes.array,
  totalPrice: PropTypes.number,
};

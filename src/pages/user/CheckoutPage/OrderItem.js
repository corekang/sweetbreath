import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  OrderItemContainer,
  OrderItemContent,
  OderItemDetails,
  OrderItemFeature,
  OrderItemTitle,
  OrderItemNumber,
  OrderItemPrice,
} from "./style";

export function OrderItem({ item }) {
  return (
    <OrderItemContainer>
      <Link to={`/product/${item.id}`} target="_blank">
        <img src={item.image} alt={item.productName}></img>
      </Link>
      <OrderItemContent>
        <OrderItemTitle to={`/product/${item.id}`} target="_blank">
          <span>{item.productName}</span>
          <OrderItemFeature>{item.feature}</OrderItemFeature>
        </OrderItemTitle>
        <OderItemDetails>
          <OrderItemNumber>{"x " + item.count}</OrderItemNumber>
          <OrderItemPrice>{"NT$ " + item.price}</OrderItemPrice>
        </OderItemDetails>
      </OrderItemContent>
    </OrderItemContainer>
  );
}

OrderItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    count: PropTypes.number,
    feature: PropTypes.string,
    productName: PropTypes.string,
    price: PropTypes.number,
  }),
};

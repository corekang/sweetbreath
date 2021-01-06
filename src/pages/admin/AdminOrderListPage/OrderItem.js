import React from "react";
import {
  ImgLink,
  OrderItemContainer,
  OrderItemContent,
  OderItemDetails,
  OrderItemFeature,
  OrderItemTitle,
} from "./style";
import PropTypes from "prop-types";

export function OrderItem({ orderItem }) {
  return (
    <OrderItemContainer>
      <ImgLink
        to={"/product/" + orderItem.product_id}
        target="_blank"
        style={{ backgroundImage: `url(${orderItem.product_image})` }}
      ></ImgLink>
      <OrderItemContent>
        <OrderItemTitle to={"/product/" + orderItem.product_id} target="_blank">
          <span>{orderItem.product_name}</span>
          <OrderItemFeature>{orderItem.product_feature}</OrderItemFeature>
        </OrderItemTitle>
        <OderItemDetails>
          <div>x {orderItem.product_quantity}</div>
          <div>NT$ {orderItem.product_price}</div>
        </OderItemDetails>
      </OrderItemContent>
    </OrderItemContainer>
  );
}

OrderItem.propTypes = {
  orderItem: PropTypes.shape({
    product_id: PropTypes.number,
    product_image: PropTypes.string,
    product_name: PropTypes.string,
    product_feature: PropTypes.string,
    product_price: PropTypes.number,
  }),
};

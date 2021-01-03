import React from "react";
import PropTypes from "prop-types";
import plusCircleOutlined from "@iconify-icons/ant-design/plus-circle-outlined";
import minusCircleOutlined from "@iconify-icons/ant-design/minus-circle-outlined";
import {
  CounterArea,
  CounterIcon,
  CartItemContainer,
  CartItemContent,
  CartItemFeature,
  CartItemTitle,
  CartItemPrice,
  ImgLink,
  OderItemDetails,
} from "./style";

export function CartList({ cartItem, handleClickDown, handleClickUp }) {
  return (
    <CartItemContainer>
      <ImgLink
        to={`/product/${cartItem.id}`}
        target="_blank"
        style={{ backgroundImage: `url(${cartItem.image})` }}
      ></ImgLink>
      <CartItemContent>
        <CartItemTitle to={`/product/${cartItem.id}`} target="_blank">
          <span>{cartItem.productName}</span>
          <CartItemFeature>{cartItem.feature}</CartItemFeature>
        </CartItemTitle>
        <OderItemDetails>
          <CounterArea>
            <CounterIcon
              icon={minusCircleOutlined}
              onClick={() => {
                handleClickDown(cartItem);
              }}
            ></CounterIcon>
            <span>{cartItem.count}</span>
            <CounterIcon
              icon={plusCircleOutlined}
              onClick={() => {
                handleClickUp(cartItem);
              }}
            ></CounterIcon>
          </CounterArea>
          <CartItemPrice>NT$ {cartItem.price}</CartItemPrice>
        </OderItemDetails>
      </CartItemContent>
    </CartItemContainer>
  );
}

CartList.propTypes = {
  cartItem: PropTypes.shape({
    id: PropTypes.number,
    feature: PropTypes.string,
    count: PropTypes.number,
  }),
  handleClickDown: PropTypes.func,
  handleClickUp: PropTypes.func,
};

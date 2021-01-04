import React, { useState, useEffect } from "react";
import { CartList } from "./CartList";
import { CartSummary } from "./CartSummary";
import {
  BackToHome,
  CartContainer,
  CartTitle,
  CartContent,
  CartListContainer,
  CartEmpty,
} from "./style";

export default function CartPage() {
  const cartData = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(cartData || []);
  const [totalPrice, setTotalPrice] = useState(0);

  // 當 cart 改變就執行: 寫入 localStorage & 計算總價
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));

    let currentTotal = 0;
    for (let i = 0; i < cart.length; i++) {
      currentTotal += cart[i].price * cart[i].count;
      setTotalPrice(currentTotal);
    }
  }, [cart]);

  // 減少商品數
  const handleClickDown = (cartItem) => {
    if (cartItem.count === 1) {
      if (window.confirm("是否移除商品？")) {
        // 判斷移除商品的 productId 和 feature
        const newCart = cart.filter(
          (newCartItem) =>
            newCartItem.id !== cartItem.id ||
            newCartItem.feature !== cartItem.feature
        );
        setCart(newCart);
      }
      return;
    }

    setCart(
      // 建立新的 cart 陣列
      cart.map((newCartItem) => {
        // 判斷改變的商品的 productId 和 feature
        if (
          newCartItem.id !== cartItem.id ||
          newCartItem.feature !== cartItem.feature
        ) {
          return newCartItem;
        }
        // 要改變的商品的 count 和 subTotal
        return {
          ...newCartItem,
          count: newCartItem.count - 1,
          subTotal: (newCartItem.count - 1) * newCartItem.price,
        };
      })
    );
  };

  // 增加商品數
  const handleClickUp = (cartItem) => {
    if (cartItem.count >= cartItem.stock) {
      alert(`Sorry...此商品目前庫存: ${cartItem.stock}`);
      return;
    }

    setCart(
      cart.map((newCartItem) => {
        if (
          newCartItem.id !== cartItem.id ||
          newCartItem.feature !== cartItem.feature
        ) {
          return newCartItem;
        }
        return {
          ...newCartItem,
          count: newCartItem.count + 1,
          subTotal: (newCartItem.count + 1) * newCartItem.price,
        };
      })
    );
  };

  return (
    <CartContainer>
      <CartTitle>購物車</CartTitle>
      {cart.length > 0 ? (
        <>
          <CartContent>
            <CartListContainer>
              {cart.map((cartItem) => (
                <CartList
                  key={cartItem.id && cartItem.feature}
                  cartItem={cartItem}
                  cart={cart}
                  setCart={setCart}
                  handleClickDown={handleClickDown}
                  handleClickUp={handleClickUp}
                />
              ))}
            </CartListContainer>
            <CartSummary totalPrice={totalPrice} />
          </CartContent>
        </>
      ) : (
        <CartEmpty>
          <h3>購物車目前沒有商品唷！</h3>
          <BackToHome to="/products">回商品頁逛逛</BackToHome>
        </CartEmpty>
      )}
    </CartContainer>
  );
}

import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { CheckoutList } from "./CheckoutList";
import { ProgressBar } from "./ProgressBar";
import { OrderList } from "./OrderList";
import {
  CheckoutContainer,
  CheckoutHeader,
  CheckoutTitle,
  CheckoutContent,
} from "./style";
import { getUser } from "../../../webAPI/userAPI";
import { creatOrder } from "../../../webAPI/orderAPI";

export default function CheckoutPage() {
  const history = useHistory();
  const [userId, serUserId] = useState("");
  const [fullName, setFullName] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [orderItem, setOrderItem] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const token = localStorage.getItem("token");
  const cart = JSON.parse(localStorage.getItem("cart"));

  useEffect(() => {
    // 讀取購物車
    if (cart) {
      setOrderItem(cart);
      let currentTotal = 0;
      for (let i = 0; i < cart.length; i++) {
        currentTotal += cart[i].price * cart[i].count;
        setTotalPrice(currentTotal);
      }
    }

    // 驗證登入
    if (!token) {
      alert("請先登入");
      history.push("/login");
    } else {
      // 撈取會員資料
      getUser().then((res) => {
        const data = res.data;
        data.fullname && setFullName(data.fullname);
        data.adress && setAddress(data.adress);
        data.email && setEmail(data.email);
        serUserId(data.id);
      });
    }
  }, []);

  function handleFullName(e) {
    setFullName(e.target.value);
  }
  function handlePostalCode(e) {
    setPostalCode(e.target.value);
  }
  function handleAddress(e) {
    setAddress(e.target.value);
  }
  function handlePhone(e) {
    if (isNaN(e.target.value)) {
      return;
    }
    setPhone(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }

  const handleSubmit = (e, orderItem) => {
    e.preventDefault();
    let emptyList = [];
    !fullName && emptyList.push("收件人姓名 ");
    !postalCode && emptyList.push("郵遞區號 ");
    !address && emptyList.push("收件地址 ");
    !phone && emptyList.push("電話號碼 ");
    !email && emptyList.push("電子信箱 ");
    if (emptyList.length > 0) {
      return alert(`您的 ${emptyList} 還沒填寫喔！`);
    }

    if (orderItem.length === 0) {
      return alert(`購物車還沒有商品喔！`);
    }

    // 訂單建立
    let order_items = [];
    for (let i = 0; i < orderItem.length; i++) {
      order_items.push({
        product_id: orderItem[i].id,
        product_name: orderItem[i].productName,
        product_image: orderItem[i].image,
        product_feature: orderItem[i].feature,
        product_price: orderItem[i].price,
        product_quantity: orderItem[i].count,
      });
    }
    const finalOrder = {
      UserId: userId,
      buyer_fullname: fullName,
      buyer_email: email,
      buyer_phone: phone,
      postal_code: postalCode,
      buyer_address: address,
      total: totalPrice,
      order_items,
    };
    creatOrder(finalOrder);
    alert(`下單成功，感謝您的購買`);
    history.push("/member/orderlist");
    localStorage.removeItem("cart");
  };

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <CheckoutTitle>結帳</CheckoutTitle>
        <ProgressBar />
      </CheckoutHeader>
      <CheckoutContent>
        <CheckoutList
          handleFullName={handleFullName}
          handlePostalCode={handlePostalCode}
          handleAddress={handleAddress}
          handlePhone={handlePhone}
          handleEmail={handleEmail}
          handleSubmit={handleSubmit}
          fullName={fullName}
          postalCode={postalCode}
          address={address}
          phone={phone}
          orderItem={orderItem}
          email={email}
          userId={userId}
        />
        <OrderList orderItem={orderItem} totalPrice={totalPrice} />
      </CheckoutContent>
    </CheckoutContainer>
  );
}

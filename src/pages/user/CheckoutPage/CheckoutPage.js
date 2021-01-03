import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { creatOrder } from "../../../WebAPI";
import { theme } from "../../../constants/theme";
import {
  H2,
  H3,
  H4,
  H5,
  Caption1,
  BodyLarge,
  Input,
  MEDIA_QUERY,
} from "../../../constants/style";

const CheckoutContainer = styled.div`
  max-width: 800px;
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
  }
`;

const CheckoutHeader = styled.div``;

const CheckoutTitle = styled(H2)``;

const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const StepContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StepNumber = styled(Caption1)`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;

  background: ${(props) =>
    props.className === "selected"
      ? `${theme.colors.mainPrimary}`
      : `${theme.colors.neutralWhite}`};

  color: ${(props) =>
    props.className === "selected"
      ? `${theme.colors.neutralWhite}`
      : `${theme.colors.mainPrimary}`};

  border: ${(props) =>
    props.className === "selected"
      ? `1px solid ${theme.colors.neutralWhite}`
      : `1px solid ${theme.colors.mainPrimary}`};
`;

const StepName = styled(H5)`
  margin: 0;
`;

const StepLine = styled.div`
  width: 60px;
  margin: 10px 20px;
  border: 1px solid ${theme.colors.mainPrimary};
`;

const CheckoutContent = styled.div`
  display: flex;
  justify-content: space-between;

  ${MEDIA_QUERY} {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const CheckoutForm = styled.form`
  width: 350px;
  margin-right: 80px;

  ${MEDIA_QUERY} {
    margin: 0;
  }
`;

const InputContainer = styled.div`
  & H5 {
    margin: 0;
  }

  & input {
    margin: 8px 0;
    padding: 8px;
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;

  a,
  button {
    border-radius: 4px;
    padding: 10px 32px;
    font-size: ${theme.fontSize.button};
    transition: ease-in-out 0.1s;
    cursor: pointer;
  }

  ${MEDIA_QUERY} {
    margin: 10px 0 20px 0;
  }
`;

const BackButton = styled(Link)`
  color: ${theme.colors.neutralDarkGrey};
  background: ${theme.colors.neutralPaleGrey};

  :hover {
    color: ${theme.colors.neutralBlack};
    background: ${theme.colors.neutralLightGrey};
  }
`;

const SubmitButton = styled.button`
  color: ${theme.colors.neutralWhite};
  background: ${theme.colors.mainPrimary};

  :hover {
    color: ${theme.colors.neutralPaleGrey};
    background: ${theme.colors.uiNegative};
  }
`;

const OrderListContainer = styled.div`
  width: 400px;
  padding: 10px 20px;
  margin-bottom: 20px;
  border: 1px solid ${theme.colors.neutralLightGrey};
`;

const OrderItemsContainer = styled.div`
  border-bottom: 1px solid ${theme.colors.neutralLightGrey};
  padding: 10px 0;
`;

const OrderItemContainer = styled.div`
  display: flex;
  margin-bottom: 10px;

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

  & div {
    margin: 0 8px;
  }
`;

const OrderItemPrice = styled(BodyLarge)``;

const OrderTotalPrice = styled(H4)`
  text-align: right;
  margin: 20px 0;
`;

function OrderItem({ item }) {
  return (
    <OrderItemContainer>
      <Link to={`/product/${item.id}`} target="_blank">
        <img src={item.image} alt={item.productName}></img>
      </Link>
      <OrderItemContent>
        <OrderItemTitle>
          <Link to={`/product/${item.id}`} target="_blank">
            {item.productName + " - " + item.feature}
          </Link>
        </OrderItemTitle>
        <OderItemDetails>
          <OrderItemNumber>{"x " + item.count}</OrderItemNumber>
          <OrderItemPrice>{item.price + " NT"}</OrderItemPrice>
        </OderItemDetails>
      </OrderItemContent>
    </OrderItemContainer>
  );
}

function OrderList({ orderItem, totalPrice }) {
  return (
    <OrderListContainer>
      <H3>商品總計</H3>
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

function CheckoutList({
  history,
  handleFullName,
  handlePostalCode,
  handleAddress,
  handlePhone,
  handleEmail,
  fullName,
  postalCode,
  address,
  phone,
  orderItem,
  email,
  userId,
}) {
  const handleSubmit = (e, orderItem) => {
    e.preventDefault();
    let emptyList = [];
    !fullName && emptyList.push("收件人姓名 ");
    !postalCode && emptyList.push("郵遞區號 ");
    !address && emptyList.push("收件地址 ");
    !phone && emptyList.push("電話號碼 ");
    !email && emptyList.push("電子信箱 ");
    if (emptyList.length > 0) {
      return alert(`${emptyList} 還沒填喔！`);
    }

    if (orderItem.length === 0) {
      return alert(`購物車還沒有商品喔！`);
    }
    ///////訂單建立
    let order_items = [];
    for (let i = 0; i < orderItem.length; i++) {
      order_items.push({
        product_name: orderItem[i].productName,
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
      order_items,
    };
    creatOrder(finalOrder);
    alert(`下單成功，感謝您的購買`);
    history.push("/member");
  };

  return (
    <CheckoutForm
      onSubmit={(e) => {
        handleSubmit(e, orderItem);
      }}
    >
      <>
        <InputContainer>
          <H5>收件人姓名</H5>
          <Input type="text" value={fullName} onChange={handleFullName} />
        </InputContainer>
        <InputContainer>
          <H5>郵遞區號</H5>
          <Input type="text" value={postalCode} onChange={handlePostalCode} />
        </InputContainer>
        <InputContainer>
          <H5>收件地址</H5>
          <Input type="text" value={address} onChange={handleAddress} />
        </InputContainer>
        <InputContainer>
          <H5>電話號碼</H5>
          <Input type="text" value={phone} onChange={handlePhone} />
        </InputContainer>
        <InputContainer>
          <H5>電子信箱</H5>
          <Input type="email" value={email} onChange={handleEmail} />
        </InputContainer>
      </>
      <ButtonContainer>
        <BackButton to="/cart">回到購物車</BackButton>
        <SubmitButton>確認送出</SubmitButton>
      </ButtonContainer>
    </CheckoutForm>
  );
}

function ProgressBar() {
  return (
    <ProgressBarContainer>
      <StepContainer>
        <StepNumber>1</StepNumber>
        <StepName>登入會員</StepName>
      </StepContainer>
      <StepContainer>
        <StepLine></StepLine>
        <StepNumber className={"selected"}>2</StepNumber>
        <StepName>填寫地址與付款</StepName>
      </StepContainer>
    </ProgressBarContainer>
  );
}

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

  function handleFullName(e) {
    setFullName(e.target.value);
  }
  function handlePostalCode(e) {
    if (isNaN(e.target.value)) {
      return;
    }
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

  useEffect(() => {
    //讀取購物車
    if (cart) {
      setOrderItem(cart);
      let currentTotal = 0;
      for (let i = 0; i < cart.length; i++) {
        currentTotal += cart[i].price * cart[i].count;
        setTotalPrice(currentTotal);
      }
    }
    //驗證登入
    if (!token) {
      alert("請先登入喔");
      history.push("/login");
    } else {
      //撈會員資料
      fetch("/api/user", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          const data = res.data;
          data.fullname && setFullName(data.fullname);
          data.adress && setAddress(data.adress);
          data.email && setEmail(data.email);
          serUserId(data.id);
        });
    }
  }, []);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <CheckoutTitle>結帳</CheckoutTitle>
        <ProgressBar />
      </CheckoutHeader>
      <CheckoutContent>
        <CheckoutList
          history={history}
          handleFullName={handleFullName}
          handlePostalCode={handlePostalCode}
          handleAddress={handleAddress}
          handlePhone={handlePhone}
          handleEmail={handleEmail}
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

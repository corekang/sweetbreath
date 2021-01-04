import React from "react";
import PropTypes from "prop-types";
import { Input, H4 } from "../../../constants/style";
import {
  BackButton,
  ButtonContainer,
  CheckoutForm,
  InputContainer,
  SubmitButton,
} from "./style";

export function CheckoutList({
  handleFullName,
  handlePostalCode,
  handleAddress,
  handlePhone,
  handleEmail,
  handleSubmit,
  fullName,
  postalCode,
  address,
  phone,
  orderItem,
  email,
}) {
  return (
    <CheckoutForm
      onSubmit={(e) => {
        handleSubmit(e, orderItem);
      }}
    >
      <>
        <InputContainer>
          <H4>收件人姓名</H4>
          <Input
            type="text"
            value={fullName}
            onChange={handleFullName}
            maxLength="50"
          />
        </InputContainer>
        <InputContainer>
          <H4>
            郵遞區號 <span> </span>
          </H4>
          <Input
            type="text"
            value={postalCode}
            onChange={handlePostalCode}
            pattern="[0-9]*"
            title="範例：234567"
            maxLength="6"
          />
        </InputContainer>
        <InputContainer>
          <H4>收件地址</H4>
          <Input
            type="text"
            value={address}
            onChange={handleAddress}
            maxLength="80"
          />
        </InputContainer>
        <InputContainer>
          <H4>電話號碼</H4>
          <Input
            type="tel"
            value={phone}
            onChange={handlePhone}
            maxLength="15"
          />
        </InputContainer>
        <InputContainer>
          <H4>電子信箱</H4>
          <Input
            type="email"
            value={email}
            onChange={handleEmail}
            maxLength="80"
          />
        </InputContainer>
      </>
      <ButtonContainer>
        <BackButton to="/cart">回到購物車</BackButton>
        <SubmitButton>確認送出</SubmitButton>
      </ButtonContainer>
    </CheckoutForm>
  );
}

CheckoutList.propTypes = {
  handleFullName: PropTypes.func,
  handlePostalCode: PropTypes.func,
  handleAddress: PropTypes.func,
  handlePhone: PropTypes.func,
  handleEmail: PropTypes.func,
  handleSubmit: PropTypes.func,
  fullName: PropTypes.string,
  address: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  postalCode: PropTypes.string,
  orderItem: PropTypes.array,
};

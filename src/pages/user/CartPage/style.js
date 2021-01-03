import styled from "styled-components";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import {
  H1,
  H3,
  H4,
  H5,
  BodyLarge,
  MEDIA_QUERY,
} from "../../../constants/style";

export { H3 };

export const CartContainer = styled.div`
  max-width: 860px;
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
    max-width: 100%;
  }
`;

export const CartTitle = styled(H1)`
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralLightGrey};
  padding-bottom: 6px;
`;

export const CartContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

  ${MEDIA_QUERY} {
    flex-direction: column;
    align-items: center;
  }
`;

export const CartListContainer = styled.div`
  min-width: 440px;
  height: 100%;
  padding: 10px 30px;
  border: 1px solid ${(props) => props.theme.colors.neutralLightGrey};

  ${MEDIA_QUERY} {
    margin: 0;
  }
`;

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0;
`;

export const ImgLink = styled(Link)`
  width: 100px;
  height: 100px;
  border-radius: 4px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

export const CartItemContent = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 20px;
  flex: 1;
`;

export const OderItemDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CartItemTitle = styled(Link)`
  margin-bottom: 5px;
  span {
    color: ${(props) => props.theme.colors.neutralBlack};
    font-size: ${(props) => props.theme.fontSize.h4};
    font-weight: bold;
  }

  :hover {
    span {
      border-bottom: 1px solid ${(props) => props.theme.colors.neutralBlack};
    }
  }
`;

export const CartItemFeature = styled(H5)`
  margin: 4px 0;
  color: ${(props) => props.theme.colors.neutralDarkGrey};
`;

export const CounterArea = styled(H4)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;

  span {
    width: 40px;
    height: 40px;
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const CounterIcon = styled(Icon)`
  width: 32px;
  height: 32px;
  padding: 2px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.mainPrimary};
`;

export const CartItemPrice = styled(BodyLarge)``;

export const CartSummaryContainer = styled.div`
  width: 360px;
  height: 300px;
  border: 1px solid ${(props) => props.theme.colors.neutralLightGrey};
  padding: 10px 20px;

  ${MEDIA_QUERY} {
    margin-top: 30px;
  }
`;

export const Subtotal = styled(BodyLarge)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const OrderTotalPrice = styled(H4)`
  text-align: right;
  padding-top: 20px;
  border-top: 1px solid ${(props) => props.theme.colors.neutralLightGrey};
`;

export const ButtonContainer = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: row-reverse;

  a {
    border-radius: 4px;
    padding: 10px 32px;
    font-size: ${(props) => props.theme.fontSize.button};
    transition: ease-in-out 0.1s;
  }

  ${MEDIA_QUERY} {
    margin: 10px 0 20px 0;
    justify-content: center;
  }
`;

export const SubmitButton = styled(Link)`
  color: ${(props) => props.theme.colors.neutralWhite};
  background: ${(props) => props.theme.colors.mainPrimary};

  :hover {
    color: ${(props) => props.theme.colors.neutralPaleGrey};
    background: ${(props) => props.theme.colors.uiNegative};
  }
`;

export const CartEmpty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BackToHome = styled(SubmitButton)`
  border-radius: 4px;
  padding: 10px 32px;
  font-size: ${(props) => props.theme.fontSize.button};
  transition: ease-in-out 0.1s;
`;

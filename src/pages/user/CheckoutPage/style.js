import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../../constants/theme";
import { H1, H4, H5, BodyLarge, MEDIA_QUERY } from "../../../constants/style";

export const CheckoutContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 60px 20px;
`;

export const CheckoutHeader = styled.div``;

export const CheckoutTitle = styled(H1)`
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralLightGrey};
  padding-bottom: 6px;
`;

export const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0;
`;

export const StepContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StepNumber = styled(BodyLarge)`
  width: 24px;
  height: 24px;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  background: ${theme.colors.neutralWhite};
  color: ${theme.colors.mainPrimary};
  border: 1px solid ${theme.colors.mainPrimary};

  ${(props) =>
    props.selected === "2" &&
    `
    background: ${theme.colors.mainPrimary};
    color:${theme.colors.neutralWhite};
    border:1px solid ${theme.colors.neutralWhite};
    `};
`;

export const StepName = styled(H5)`
  margin: 0;
`;

export const StepLine = styled.div`
  width: 60px;
  margin: 10px 20px;
  border: 1px solid ${theme.colors.mainPrimary};

  ${MEDIA_QUERY} {
    margin: 10px;
  }
`;

export const CheckoutContent = styled.div`
  display: flex;
  justify-content: space-between;

  ${MEDIA_QUERY} {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const CheckoutForm = styled.form`
  width: 440px;
  margin: 20px 80px 0 0;

  ${MEDIA_QUERY} {
    max-width: 360px;
    margin: 20px;
  }
`;

export const InputContainer = styled.div`
  & H4 {
    margin: 4px 0;
  }

  & input {
    margin: 10px 0;
    padding: 10px;
    width: 95%;
    font-size: ${theme.fontSize.bodyLarge};
  }
`;

export const ButtonContainer = styled.div`
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
    margin: 20px 0;
  }
`;

export const BackButton = styled(Link)`
  color: ${theme.colors.neutralDarkGrey};
  background: ${theme.colors.neutralPaleGrey};

  :hover {
    color: ${theme.colors.neutralBlack};
    background: ${theme.colors.neutralLightGrey};
  }
`;

export const SubmitButton = styled.button`
  color: ${theme.colors.neutralWhite};
  background: ${theme.colors.mainPrimary};

  :hover {
    color: ${theme.colors.neutralPaleGrey};
    background: ${theme.colors.uiNegative};
  }
`;

export const OrderListContainer = styled.div`
  width: 400px;
  padding: 10px 30px;
  margin-bottom: 20px;
  border: 1px solid ${theme.colors.neutralLightGrey};

  ${MEDIA_QUERY} {
    max-width: 360px;
  }
`;

export const OrderItemsContainer = styled.div`
  border-bottom: 1px solid ${theme.colors.neutralLightGrey};
  padding: 10px 0;
`;

export const OrderItemContainer = styled.div`
  display: flex;
  margin-bottom: 10px;

  img {
    width: 120px;
    height: 120px;
    border-radius: 4px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
`;

export const OrderItemContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 20px;
`;

export const OderItemDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const OrderItemTitle = styled(Link)`
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

export const OrderItemFeature = styled(H5)`
  margin: 4px 0;
  color: ${(props) => props.theme.colors.neutralDarkGrey};
`;

export const OrderItemNumber = styled(H4)`
  display: flex;
  justify-content: center;
  align-items: center;

  & div {
    margin: 0 8px;
  }
`;

export const OrderItemPrice = styled(H4)``;

export const OrderTotalPrice = styled(H4)`
  text-align: right;
  margin: 20px 0;
`;

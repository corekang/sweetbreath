import styled from "styled-components";
import { Icon } from "@iconify/react";
import {
  MEDIA_QUERY,
  H4,
  H3,
  Body,
  Caption1,
  Caption2,
  Button,
} from "../../../constants/style";

export { Caption1, Caption2, Button };
export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
`;

export const CategoryBar = styled.div`
  display: flex;
  div {
    margin-right: 10px;
  }

  ${MEDIA_QUERY} {
    div {
      font-size: ${(props) => props.theme.fontSize.h4};
    }
  }
`;
export const Product = styled.div`
  display: flex;
  width: 100%;
  margin: 40px 0;
  ${MEDIA_QUERY} {
    display: block;
  }
`;

export const ProductImage = styled.div`
  flex: 5.5;
  margin-right: 40px;
  border-radius: 4px;

  img {
    width: 100%;
    border-radius: 4px;
    box-shadow: 0 3px 22px 1px rgba(100, 100, 100, 0.32);
  }
  ${MEDIA_QUERY} {
    margin: 0;
  }
`;
export const ProductDesc = styled.div`
  flex: 4.5;
  ${MEDIA_QUERY} {
    margin: 20px 0;
  }
`;
export const ProductHead = styled.div``;
export const FeatureList = styled.div`
  margin-top: 10px;
  padding: 5px 20px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.neutralWhite};
  :hover {
    border: 1px solid ${(props) => props.theme.colors.neutralLightGrey};
  }
`;
export const Feature = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProductName = styled(H3)`
  margin: 0;
`;

export const FeatureName = styled(H4)``;

export const AddToLove = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  span {
    color: ${(props) => props.theme.colors.neutralLightGrey};
    font-size: ${(props) => props.theme.fontSize.h2};
    font-weight: bold;
    text-shadow: 1.5px 1.5px 1.5px rgba(90, 92, 102, 0.4);
  }
  :hover {
    span {
      color: ${(props) => props.theme.colors.uiNegative};
    }
  }
  ${MEDIA_QUERY} {
    span {
      font-size: ${(props) => props.theme.fontSize.h1};
    }
  }
`;

export const ProductPrices = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductPromoPrice = styled(H3)``;

export const ProductPrice = styled(H4)`
  margin-left: 20px;
  color: ${(props) => props.theme.colors.neutralDarkGrey};
  text-decoration: line-through;
`;

export const ProductContent = styled(Body)`
  word-break: break-all;
  white-space: pre-line;
  line-height: 2;
  padding: 40px 0 20px 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralLightGrey};

  ${MEDIA_QUERY} {
    font-size: ${(props) => props.theme.fontSize.h5};
  }
`;

export const ProductStorage = styled.div`
  font-size: ${(props) => props.theme.fontSize.h5};
  text-align: right;
`;

export const ProductCounter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 25px;
  font-size: ${(props) => props.theme.fontSize.h4};
`;

export const CounterArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

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
  cursor: pointer;
  color: ${(props) => props.theme.colors.mainPrimary};
`;

export const AddToCart = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  button {
    cursor: pointer;
    padding: 20px 100px;
    border: none;
    border-radius: 4px;
    color: ${(props) => props.theme.colors.neutralWhite};
    background: ${(props) => props.theme.colors.mainPrimary};
    font-size: ${(props) => props.theme.fontSize.bodyLarge};
  }
`;

export const Error = styled(H4)`
  display: flex;
  font-weight: bold;
  margin: 10px 0;
  visibility: ${(props) => (props.errorMessage ? "visible" : "hidden")};
  color: ${(props) => props.theme.colors.uiWarning};
  justify-content: center;
`;

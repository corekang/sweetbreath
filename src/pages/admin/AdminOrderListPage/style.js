import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../../constants/theme";
import { H5, MEDIA_QUERY } from "../../../constants/style";

export const OrdersListWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;

  * {
    box-sizing: border-box;
    word-break: break-all;
    white-space: pre-line;
    letter-spacing: 1.3px;
  }
`;

export const OrderStatusButtons = styled.div`
  display: flex;
  margin-bottom: 40px;
  border-bottom: 1px solid ${theme.colors.neutralLightGrey};
`;

export const StatusButton = styled.button`
  cursor: pointer;
  margin-right: 30px;
  padding: 12px;
  font-size: ${theme.fontSize.h5};
  background: transparent;
  border: none;
  transition: ease-in-out 0.2s;

  color: ${(props) =>
    props.selected
      ? `${theme.colors.neutralBlack}`
      : `${theme.colors.neutralDarkGrey}`};

  border-bottom: 4px solid
    ${(props) =>
      props.selected
        ? `${theme.colors.mainPrimary}`
        : `${theme.colors.neutralPaleGrey}`};

  :hover {
    color: ${theme.colors.neutralBlack};
  }

  ${MEDIA_QUERY} {
    margin-right: 20px;
  }
`;

export const OrdersContainer = styled.div`
  border: 1px solid ${theme.colors.neutralLightGrey};
`;

export const OrderTableHeader = styled.div`
  display: flex;
  font-size: ${theme.fontSize.h4};
  background: ${theme.colors.mainPrimary};

  div {
    width: 112px;
    padding: 12px 0;
    border-right: 1px solid ${theme.colors.neutralSnow};
    color: ${theme.colors.neutralSnow};
    text-align: center;
    flex: 1;
  }
`;

export const OrderContainer = styled.div``;

export const OrderHeader = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${theme.colors.neutralLightGrey};
  background: ${theme.colors.neutralSnow};

  div {
    font-size: ${theme.fontSize.h5};
    align-items: center;
    width: 142px;
    padding: 12px 0;
    flex: 1;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const SettingStatus = styled.div`
  display: flex;
  justify-content: center;

  ${MEDIA_QUERY} {
    flex-direction: column;
  }
`;

export const OrderStatusLabel = styled.button`
  background: ${theme.colors.neutralGrey};
  font-size: ${theme.fontSize.bodyLarge};
  color: ${theme.colors.neutralWhite};
  border-radius: 4px;
  padding: 6px;
  margin: 4px;
  cursor: pointer;

  ${MEDIA_QUERY} {
    font-size: ${theme.fontSize.bodyLarge};
  }
`;

export const IsDoneLabel = styled(OrderStatusLabel)`
  ${(props) =>
    (props.isCancel && `background: ${theme.colors.uiNegative}`) ||
    (props.isDone
      ? `background: ${theme.colors.uiPositive}`
      : `background: ${theme.colors.uiWarning}`)}
`;
export const IsPaidLabel = styled(OrderStatusLabel)`
  ${(props) => props.isPaid && `background: ${theme.colors.uiPositive}`}
`;
export const IsSentLabel = styled(OrderStatusLabel)`
  ${(props) => props.isSent && `background: ${theme.colors.uiPositive}`}
`;

export const OrderContent = styled.div`
  align-items: flex-start;
  padding: 20px 50px;
  display: ${(props) => (props.toggle ? `flex` : `none`)};

  ${MEDIA_QUERY} {
    flex-direction: column;
  }
`;

export const OrderDetail = styled.div`
  width: 400px;
  line-height: 1.8;
  font-size: ${theme.fontSize.h4};

  ${MEDIA_QUERY} {
    max-width: 300px;
    margin-bottom: 30px;
    padding-bottom: 15px;
    border-bottom: 1px solid ${theme.colors.neutralLightGrey};
  }
`;

export const SettingButtons = styled.div`
  button {
    background: ${theme.colors.neutralDarkGrey};
    font-size: ${theme.fontSize.bodyLarge};
    color: ${theme.colors.neutralWhite};
    border-radius: 4px;
    padding: 8px;
    margin: 6px 10px;
    cursor: pointer;

    :hover {
      background: ${theme.colors.uiNegative};
    }

    ${MEDIA_QUERY} {
      margin: 10px;
    }
  }
`;

export const OrderItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 60px;

  ${MEDIA_QUERY} {
    margin: 0;
  }
`;

export const OrderItemContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  width: 320px;

  &:last-child {
    margin-bottom: 0px;
  }

  ${MEDIA_QUERY} {
    width: 250px;
  }
`;

export const ImgLink = styled(Link)`
  width: 80px;
  height: 80px;
  border-radius: 4px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

export const OrderItemContent = styled.div`
  width: 70%;
  margin-left: 20px;
`;

export const OderItemDetails = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    font-size: ${(props) => props.theme.fontSize.h5};
  }

  ${MEDIA_QUERY} {
    margin: 0;
  }
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

export const NoOrder = styled.div``;

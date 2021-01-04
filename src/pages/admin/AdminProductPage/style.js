import styled from "styled-components";
import {
  MEDIA_QUERY,
  H3,
  H4,
  Button,
  Body,
  BodyLarge,
  Input,
  Textarea,
} from "../../../constants/style";

export const Content = styled.div`
  margin: 40px auto;
  padding: 0 40px;
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
  flex: 2;
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

export const AdminInput = styled(Input)`
  flex: 3.5;
  margin: 10px 5px;
  width: 70%;
  ${MEDIA_QUERY} {
    margin: 10px 0;
    width: 90%;
  }
`;
export const AdminText = styled(Textarea)`
  flex: 3.5;
  margin: 10px 5px;
  width: 70%;
  ${MEDIA_QUERY} {
    margin: 10px 0;
    width: 90%;
  }
`;
export const ProductDesc = styled.div`
  flex: 3;
  ${MEDIA_QUERY} {
    margin: 20px 0;
  }
`;

export const AdminTitle = styled(H3)`
  margin-top: 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralLightGrey};
  padding-bottom: 10px;
`;

export const ProductContent = styled(Body)`
  word-break: break-all;
  white-space: pre-line;
  margin: 20px 0;
  ${MEDIA_QUERY} {
    font-size: ${(props) => props.theme.fontSize.h4};
  }
`;

export const SubmitButton = styled(Button)`
  cursor: pointer;
  padding: 20px 100px;
  border-radius: 4px;
  border: none;
  color: ${(props) => props.theme.colors.neutralWhite};
  background: ${(props) => props.theme.colors.mainPrimary};
  ${MEDIA_QUERY} {
    width: 95%;
    padding: 10px;
    font-size: ${(props) => props.theme.fontSize.h4};
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  align-items: baseline;
  ${MEDIA_QUERY} {
    display: block;
    margin: 20px 0;
  }
`;

export const AdminName = styled(BodyLarge)`
  flex: 1.5;
  ${MEDIA_QUERY} {
    font-size: ${(props) => props.theme.fontSize.h4};
  }
`;

export const AdminBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  ${MEDIA_QUERY} {
    justify-content: left;
  }
`;

export const Error = styled(H4)`
  display: flex;
  height: 1em;
  font-weight: bold;
  margin: 10px 0;
  visibility: ${(props) => (props.error ? "visible" : "hidden")};
  color: ${(props) => props.theme.colors.uiWarning};
  justify-content: center;
`;

export const Selector = styled.select`
  margin: 10px 5px;
  width: 70%;
  padding: 12px;
  border-radius: 4px;
  border: solid 1px ${(props) => props.theme.colors.neutralLightGrey};
  background-color: ${(props) => props.theme.colors.neutralWhite};
  color: ${(props) => props.theme.colors.neutralBlack};

  &:focus {
    border: solid 1px ${(props) => props.theme.colors.mainPrimary};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.neutralDarkGrey};
  }
  ${MEDIA_QUERY} {
    margin: 10px 0;
    width: 95%;
  }
`;

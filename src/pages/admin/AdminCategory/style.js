import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import {
  MEDIA_QUERY,
  H1,
  H3,
  H4,
  Button,
  Body,
  BodyLarge,
  Input,
  Textarea,
} from "../../../constants/style";
import { theme } from "../../../constants/theme";

export { H1, H3, Button, Body, BodyLarge, Textarea };

export const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px;

  a,
  button {
    text-decoration: none;
    border: none;
    outline: transparent;
  }
  ${MEDIA_QUERY} {
    flex-direction: column;
    padding: 20px 10px;
  }
`;

export const CategoryContainer = styled.div``;

export const CategorySection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid ${theme.colors.neutralLightGrey};
  background: ${theme.colors.neutralWhite};

  :hover {
    background: ${theme.colors.neutralSnow};
    input {
      border: 1px solid ${theme.colors.neutralGrey};
      border-radius: 4px;
    }
  }

  ${MEDIA_QUERY} {
    flex-direction: column;
    padding: 10px 0;
  }
`;

export const CategoryNameLink = styled(Link)`
  font-size: ${theme.fontSize.h3};
  padding: 20px;
  margin: 0;
  color: ${theme.colors.neutralBlack};

  :hover {
    color: ${theme.colors.mainPrimaryDark};
  }
`;

export const Setting = styled.div``;

export const SettingInput = styled(Input)`
  color: ${theme.colors.neutralBlack};
  font-size: ${theme.fontSize.bodyLarge};
  border-bottom: 1px solid ${theme.colors.neutralLightGrey};
  padding: 8px;
  margin: 0 10px;
`;

export const SettingButton = styled.button`
  padding: 6px 10px;
  margin-left: 20px;
  border-radius: 4px;
  font-size: ${theme.fontSize.button};
  color: ${(props) => props.theme.colors.neutralWhite};
  background: ${(props) => props.theme.colors.neutralDarkGrey};
  color: ${theme.colors.neutralPaleGrey};
  background: ${theme.colors.neutralDarkGrey};
  cursor: pointer;

  :hover {
    color: ${theme.colors.neutralWhite};
    background: ${theme.colors.uiNegative};
  }

  ${MEDIA_QUERY} {
    margin-left: 5px;
    padding: 4px;
  }
`;

export const AddCategoryContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px;
  :hover {
    input {
      border: 1px solid ${theme.colors.neutralGrey};
      border-radius: 4px;
    }
  }

  ${MEDIA_QUERY} {
    justify-content: center;
    margin: 20px 0;
  }
`;

export const AddInput = styled(SettingInput)``;

export const AddButton = styled(SettingButton)`
  color: ${theme.colors.neutralBlack};
  background: ${theme.colors.uiWarning};
`;

export const ErrorMessage = styled(H4)`
  margin: 0;
  padding: 0 20px;
  text-align: right;
  font-weight: 700;
  color: ${theme.colors.uiNegative};
`;

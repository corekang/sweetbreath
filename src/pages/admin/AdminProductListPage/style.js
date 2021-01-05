import styled from "styled-components";
import { Link } from "react-router-dom";
import { MEDIA_QUERY, H1, H3, H4, H5 } from "../../../constants/style";

export { H1 };
export const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px;
`;

export const CategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;

  ${MEDIA_QUERY} {
    justify-content: center;
  }
`;

export const CategoryList = styled.div`
  display: flex;
  align-items: center;
  ${MEDIA_QUERY} {
    justify-content: center;
  }
`;

export const CategoryName = styled(H5)`
  margin: 10px 0;
  cursor: pointer;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.neutralBlack};
  }
  & {
    margin-right: 20px;
  }
  ${MEDIA_QUERY} {
    margin: 10px;
    justify-content: center;
  }
`;

export const CategorySection = styled.div`
  & + & {
    margin: 60px 0;
  }
`;
export const CategoryTitle = styled(H3)`
  margin: 30px 0;
`;
export const ProductList = styled.div`
  text-align: center;

  ${MEDIA_QUERY} {
    flex-direction: column;
  }
`;

export const ProductSetting = styled.div`
  display: none;

  ${MEDIA_QUERY} {
    display: flex;
  }
`;

export const ProductContainer = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralGrey};

  :hover {
    ${ProductSetting} {
      display: flex;
      align-items: center;
    }
  }
`;

export const ProductTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductName = styled(H4)`
  margin: 20px 0;
  text-align: left;
`;

export const ProductItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 20px;

  ${MEDIA_QUERY} {
    display: block;
  }
`;

export const ProductDescContainer = styled.div`
  display: flex;
`;

export const ProductDesc = styled(H5)`
  margin: 10px;
  text-align: left;
  color: ${(props) => props.theme.colors.neutralDarkGrey};
`;

export const SettingButton = styled(Link)`
  font-size: ${(props) => props.theme.fontSize.button};
  line-height: 1.21;
  font-weight: 500;
  text-decoration: none;
  padding: 12px 18px;
  margin-left: 10px;
  border: none;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.neutralWhite};
  background: ${(props) => props.theme.colors.neutralDarkGrey};
  cursor: pointer;

  :hover {
    background: ${(props) => props.theme.colors.neutralGrey};
  }
  ${MEDIA_QUERY} {
    margin: 15px;
    font-size: ${(props) => props.theme.fontSize.h5};
  }
`;

export const AddBtn = styled(SettingButton)`
  background: ${(props) => props.theme.colors.uiWarning};
  color: ${(props) => props.theme.colors.neutralBlack};
  font-weight: bold;

  :hover {
    color: ${(props) => props.theme.colors.neutralWhite};
  }
`;

export const ErrorMessage = styled(H4)`
  margin: 0;
  padding: 0 20px;
  text-align: right;
  font-weight: 700;
  color: ${(props) => props.theme.colors.uiNegative};
`;

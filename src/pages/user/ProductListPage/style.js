import styled from "styled-components";
import { MEDIA_QUERY, H1, H3, H5, BodyLarge } from "../../../constants/style";
import { Link } from "react-router-dom";

export { H1 };
export const Content = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 60px;

  ${MEDIA_QUERY} {
    padding: 20px;
  }
`;

export const Category = styled.div`
  display: flex;
`;

export const CategoryName = styled(H5)`
  cursor: pointer;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.neutralBlack};
  }
  & {
    margin-right: 20px;
  }
`;

export const CategorySection = styled.div`
  ＆ {
    margin: 80px 0;
  }
`;
export const CategoryTitle = styled(H3)``;
export const ProductList = styled.div`
  text-align: center;
  ${MEDIA_QUERY} {
    flex-direction: column;
  }
`;
export const Product = styled.div`
  width: 260px;
  position: relative;
  display: inline-block;
  background: ${(props) => props.theme.colors.neutralWhite};
  margin: 20px;
  border-radius: 5px;

  :hover {
    box-shadow: 0 3px 22px 1px rgba(100, 100, 100, 0.32);
  }
  ${MEDIA_QUERY} {
    width: 300px;
  }
`;

export const BlankCard = styled.div`
  width: 260px;
  position: relative;
  display: inline-block;
  margin: 20px;
  ${MEDIA_QUERY} {
    width: 300px;
  }
`;

export const Pointer = styled.div`
  display: none;
  position: absolute;
  z-index: 1;
  width: 46px;
  height: 46px;
  font-size: ${(props) => props.theme.fontSize.h4};
  font-weight: bold;
  top: 70%;
  border-radius: 50%;
  left: 76%;
  color: ${(props) => props.theme.colors.neutralWhite};
  background: ${(props) => props.theme.colors.mainPrimary};
  ${MEDIA_QUERY} {
    width: 60px;
    height: 60px;
    font-size: ${(props) => props.theme.fontSize.h3};
  }
`;

export const ProductLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.neutralBlack};
  &:hover {
    ${Pointer} {
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2;
    }
  }
`;

export const ProductImage = styled.div`
  width: 260px;
  height: 260px;
  border-radius: 5px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;

  ${MEDIA_QUERY} {
    width: 300px;
    height: 300px;
  }
`;

export const ProductName = styled(BodyLarge)`
  padding: 15px 20px;
  background: ${(props) => props.theme.colors.neutralWhite};
  z-index: 1;
  position: relative;
  top: -10px;
  text-align: left;
`;

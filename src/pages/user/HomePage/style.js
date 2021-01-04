import styled from "styled-components";
import { BodyLarge, MEDIA_QUERY, H2 } from "../../../constants/style";
import { Link } from "react-router-dom";

export const HomePageContent = styled.div`
  margin: 0px;
`;

export const SubTitle = styled(H2)`
  width: 80%;
  margin: 80px auto 11px;
  text-align: center;
  padding-bottom: 20px;
  color: ${(props) => props.theme.colors.neutralDarkGrey};
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralLightGrey};
`;

export const BannerContent = styled.div`
  box-sizing: border-box;
  margin: 0px auto;
  width: 100%;
  max-height: 500px;
  overflow: hidden;
`;

export const BannerImgContent = styled.div`
  max-height: 500px;
`;

export const BannerImg = styled.img`
  box-sizing: border-box;
  margin: auto;
  width: 100%;
  min-height: 100%;
`;

export const RecommendContent = styled.div`
  text-align: center;
  ${MEDIA_QUERY} {
    flex-direction: column;
  }
`;

export const Product = styled.div`
  width: 260px;
  position: relative;
  display: inline-block;
  margin: 20px;
  background: ${(props) => props.theme.colors.neutralWhite};
  border-radius: 5px;
  :hover {
    box-shadow: 0 3px 22px 1px rgb(100 100 100 / 32%);
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
  z-index: 2;
  width: 46px;
  height: 46px;
  font-size: ${(props) => props.theme.fontSize.h4};
  font-weight: bold;
  top: 72%;
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
    }
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  border-radius: 5px;
`;

export const ProductName = styled(BodyLarge)`
  position: relative;
  top: -10px;
  padding: 15px 20px;
  text-align: left;
  z-index: 1;
  background-color: white;
  text-align: left;
`;

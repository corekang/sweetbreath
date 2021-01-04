import styled from "styled-components";
import { BodyLarge, MEDIA_QUERY } from "../../constants/style";
import { Link } from "react-router-dom";

export const LogoContent = styled.div`
  display: flex;
  margin-top: 10px;
  ${MEDIA_QUERY} {
    display: flex;
    justify-content: center;
    margin-top: 0px;
  } ;
`;

export const NavbarContent = styled.div`
  display: flex;
  box-sizing: border-box;
  height: 86px;
  padding: 27px;
  box-shadow: 0 0 1px 0 #bdbdbd;
  background-color: ${(props) => props.theme.colors.neutralWhite};
  align-items: center;
  justify-content: space-between;
  text-align: center;
  border: 0px soild black;
  @media screen and (max-width: 1150px) {
    padding: 0px;
    justify-content: center;
  }
  ${MEDIA_QUERY} {
    display: block;
    max-width: 768px;
    height: auto;
  } ;
`;

export const ButtonContent = styled(Link)`
  box-sizing: border-box;
  min-width: 78px;
  height: 38px;
  padding: 7px;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.neutralBlack};
  text-align: center;
  text-decoration: none;
  font-weight: 500;
  ${MEDIA_QUERY} {
    padding: 0px;
  }
  :hover {
    background-color: ${(props) => props.theme.colors.neutralGrey};
    color: ${(props) => props.theme.colors.neutralSnow};
    ${MEDIA_QUERY} {
      background-color: white;
    }
  }
  & + & {
    margin-left: 60px;
    @media screen and (max-width: 1150px) {
      margin-left: 0px;
    }
  }
`;

export const IconContent = styled(Link)`
  display: flex;
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: ${(props) => props.theme.colors.neutralLightGrey};
  }
  & + & {
    margin-left: 25px;
    @media screen and (max-width: 1150px) {
      margin: 0px;
    }
  }
`;

export const FunctionBar = styled.div`
  display: flex;
  box-sizing: border-box;
  ${MEDIA_QUERY} {
    justify-content: center;
  } ;
`;

export const IconBar = styled.div`
  display: flex;
  box-sizing: border-box;
  ${MEDIA_QUERY} {
    display: inline-flex;
    justify-content: center;
  } ;
`;

export const LogoImg = styled.img`
  height: 80px;
`;

export const IconImg = styled.img`
  width: 21px;
  height: 21px;
  box-sizing: border-box;
`;

export const InstagramImg = styled.img`
  width: 27px;
  height: 27px;
`;

export const LogOutImg = styled.img`
  width: 22px;
  height: 23px;
`;

export const ButtonText = styled(BodyLarge)`
  font-family: serif;
  ${MEDIA_QUERY} {
    padding: 9px 0px;
    border-radius: 5px;
    :hover {
      background-color: ${(props) => props.theme.colors.neutralGrey};
    }
  }
`;

export const LogOutButton = styled.button`
  border: 0;
  background: none;
`;

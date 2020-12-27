import styled from "styled-components";
import { BodyLarge, MEDIA_QUERY } from "../../constants/style";
import { Link } from "react-router-dom";
import sweetBreath from "../icon/sweetBreath_line.png";

const LogoContent = styled.div`
  display: flex;
  margin-top: 10px;
  @media screen and (max-width: 1400px) {
    display: flex;
    justify-content: center;
    margin-top: 0px;
  } ;
`;

const NavbarContent = styled.div`
  display: flex;
  box-sizing: border-box;
  height: 86px;
  padding: 30px;
  box-shadow: 0 0 1px 0 #bdbdbd;
  background-color: ${(props) => props.theme.colors.neutralWhite};
  align-items: center;
  justify-content: space-between;
  text-align: center;
  border: 0px soild black;
  @media screen and (max-width: 1400px) {
    justify-content: center;
    display: block;
    padding-bottom: 30px;
    height: auto;
  }
`;

const ButtonContent = styled(Link)`
  box-sizing: border-box;
  min-width: 78px;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.neutralBlack};
  text-align: center;
  text-decoration: none;
  font-weight: 500;
  ${MEDIA_QUERY} {
    min-width: 65px;
  }
  :hover {
    background-color: ${(props) => props.theme.colors.neutralGrey};
    color: ${(props) => props.theme.colors.neutralSnow};
    @media screen and (max-width: 1400px) {
      background-color: white;
    }
  }
  & + & {
    margin-left: 60px;
    @media screen and (max-width: 1400px) {
      margin-left: 30px;
    }
    ${MEDIA_QUERY} {
      margin-left: 10px;
    }
  }
`;

const FunctionBar = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  @media screen and (max-width: 1400px) {
    justify-content: center;
  }
  & + & {
    @media screen and (max-width: 1400px) {
      margin-top: 30px;
      padding-top: 15px;
      border-top: 1px solid ${(props) => props.theme.colors.neutralLightGrey};
    }
  }
`;
const LogoImg = styled.img`
  height: 80px;
`;

const ButtonText = styled(BodyLarge)`
  font-family: serif;
  @media screen and (max-width: 1400px) {
    padding: 9px 0px;
    border-radius: 5px;
    :hover {
      background-color: ${(props) => props.theme.colors.neutralGrey};
    }
  }
`;

const Divider = styled.span`
  margin-right: 30px;
  font-size: 31px;
  color: ${(props) => props.theme.colors.neutralLightGrey};
  @media screen and (max-width: 1400px) {
    display: none;
  } ;
`;

function Logo() {
  return (
    <LogoContent>
      <Link to={"/"}>
        <LogoImg src={sweetBreath} alt="logo" />
      </Link>
    </LogoContent>
  );
}

const NavButton = (props) => {
  return (
    <ButtonContent to={props.route}>
      <ButtonText>{props.title}</ButtonText>
    </ButtonContent>
  );
};

export default function AdminNavbar() {
  return (
    <NavbarContent id="top">
      <Logo>
        <NavButton route="/" title={"SWEET_BREATH"} />
      </Logo>
      <FunctionBar>
        <NavButton route="/news" title={"最新消息"} />
        <NavButton route="/products" title={"產品"} />
        <NavButton route="/about" title={"關於我們"} />
        <NavButton route="/contact" title={"聯絡我們"} />
      </FunctionBar>
      <FunctionBar>
        <Divider>|</Divider>
        <NavButton route="/admin/products" title={"商品管理"} />
        <NavButton route="/admin/category" title={"分類管理"} />
        <NavButton route="/admin/member" title={"權限管理"} />
        <NavButton route="/admin/orders" title={"訂單管理"} />
        <NavButton route="/logout" title={"登出"} />
      </FunctionBar>
    </NavbarContent>
  );
}

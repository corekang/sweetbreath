import styled from "styled-components";
import { BodyLarge } from "../../constants/style";
import { Link } from "react-router-dom";
import { theme } from "../../constants/theme";
import member from "../icon/member.png";
import cart from "../icon/cart.png";
import magnifying from "../icon/magnifying.png";
import facebook from "../icon/facebook.png";
import instagram from "../icon/instagram.png";

const Logo = styled.div`
  display: flex;
`;

const NavbarContent = styled.div`
  display: flex;
  box-sizing: border-box;
  min-width: 1440px;
  height: 86px;
  padding: 27px 140px 26px;
  box-shadow: 0 0 1px 0 #bdbdbd;
  background-color: ${theme.colors.neutralWhite};
  align-items: center;
  justify-content: space-between;
`;

const ButtonContent = styled(Link)`
  box-sizing: border-box;
  min-width: 78px;
  height: 38px;
  padding: 7px;
  border-radius: 5px;
  color: ${theme.colors.neutralBlack};
  text-align: center;
  text-decoration: none;
  font-weight: 500;
  :hover {
    background-color: ${theme.colors.neutralGrey};
    color: ${theme.colors.neutralSnow};
  }
  & + & {
    margin-left: 60px;
  }
`;

const IconContent = styled(Link)`
  display: flex;
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: ${theme.colors.neutralLightGrey};
  }
  & + & {
    margin-left: 25px;
  }
`;

const FunctionBar = styled.div`
  display: flex;
`;

const IconBar = styled.div`
  display: flex;
  box-sizing: border-box;
`;

const IconImg = styled.img`
  width: 21px;
  height: 21px;
`;

const InstagramImg = styled.img`
  width: 27px;
  height: 27px;
`;

const NavButton = (props) => {
  return (
    <ButtonContent to={props.route}>
      <BodyLarge>{props.title}</BodyLarge>
    </ButtonContent>
  );
};

const IconButton = (props) => {
  return (
    <IconContent to={props.route}>
      <IconImg src={props.icon} />
    </IconContent>
  );
};

const InstagramButton = (props) => {
  return (
    <IconContent to={props.route}>
      <InstagramImg src={props.icon} />
    </IconContent>
  );
};

export default function Navbar() {
  return (
    <NavbarContent>
      <Logo>
        <NavButton route="/" title={"SWEET_BREATH"} />
      </Logo>
      <FunctionBar>
        <NavButton route="/news" title={"最新消息"} />
        <NavButton route="/products" title={"產品"} />
        <NavButton route="/about" title={"關於我們"} />
        <NavButton route="/contact" title={"聯絡我們"} />
      </FunctionBar>
      <IconBar>
        <IconButton route="/products" icon={magnifying} />
        <IconButton route="/contact" icon={facebook} />
        <InstagramButton route="/contact" icon={instagram} />
      </IconBar>
      <IconBar>
        <IconButton route="/cart" icon={cart} />
        <IconButton route="/login" icon={member} />
      </IconBar>
    </NavbarContent>
  );
}

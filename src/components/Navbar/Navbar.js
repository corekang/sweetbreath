import styled from "styled-components";
import { BodyLarge } from "../../constants/style";
import { Link } from "react-router-dom";
import { theme } from "../../constants/theme";

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
  :hover {
    background-color: ${theme.colors.neutralGrey};
    color: ${theme.colors.neutralSnow};
  }
  & + & {
    margin-left: 60px;
  }
`;
const NavButton = (props) => {
  return (
    <ButtonContent to={props.route}>
      <BodyLarge>{props.title}</BodyLarge>
    </ButtonContent>
  );
};

const FunctionBar = styled.div`
  display: flex;
  margin-left: 238px;
`;

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
    </NavbarContent>
  );
}

import React, { useContext } from "react";
import { useLocation, useHistory } from "react-router-dom";
import member from "../icon/member.png";
import cart from "../icon/cart.png";
import magnifying from "../icon/magnifying.png";
import facebook from "../icon/facebook.png";
import instagram from "../icon/instagram.png";
import logout from "../icon/logout.png";
import AuthContext from "../../contexts";
import { setAuthToken } from "../../utils";
import { Logo, NavButton, IconButton, InstagramButton } from "./button";
import {
  NavbarContent,
  FunctionBar,
  IconBar,
  LogOutButton,
  IconContent,
  LogOutImg,
} from "./style";

export default function Navbar() {
  const location = useLocation();
  const history = useHistory();
  const { user, setUser } = useContext(AuthContext);
  const handleLogout = () => {
    setAuthToken("");
    setUser(null);
    if (location.pathname !== "/") {
      history.push("/");
    }
  };
  return (
    <NavbarContent id="top">
      <Logo>
        <NavButton route="/" title={"SWEET_BREATH"} />
      </Logo>
      <FunctionBar>
        <NavButton route="/news" title={"最新消息"} />
        <NavButton route="/products" title={"商品"} />
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
        {user ? (
          <IconButton route="/member" icon={member} />
        ) : (
          <IconButton route="/login" icon={member} />
        )}
        {user && (
          <LogOutButton src={logout} onClick={handleLogout}>
            <IconContent>
              <LogOutImg src={logout} />
            </IconContent>
          </LogOutButton>
        )}
      </IconBar>
    </NavbarContent>
  );
}

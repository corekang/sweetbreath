import sweetBreath from "../icon/sweetBreath_line.png";
import {
  LogoContent,
  LogoImg,
  ButtonContent,
  ButtonText,
  IconContent,
  IconImg,
  InstagramImg,
} from "./style";
import { Link } from "react-router-dom";

export function Logo() {
  return (
    <LogoContent>
      <Link to={"/"}>
        <LogoImg src={sweetBreath} alt="logo" />
      </Link>
    </LogoContent>
  );
}

export const NavButton = (props) => {
  return (
    <ButtonContent to={props.route}>
      <ButtonText>{props.title}</ButtonText>
    </ButtonContent>
  );
};

export const IconButton = (props) => {
  return (
    <IconContent to={props.route}>
      <IconImg src={props.icon} />
    </IconContent>
  );
};

export const InstagramButton = (props) => {
  return (
    <IconContent to={props.route}>
      <InstagramImg src={props.icon} />
    </IconContent>
  );
};

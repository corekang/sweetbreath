import {
  SocialLoginContainer,
  SocialLoginTitle,
  SocialLoginSite,
  SiteLogo,
} from "./style";
import googleLogin from "../../../components/icon/googleLogin.png";
import facebookLogin from "../../../components/icon/facebookLogin.png";

export default function SocialLogin() {
  return (
    <SocialLoginContainer>
      <SocialLoginTitle>社群登入</SocialLoginTitle>
      <SocialLoginSite>
        <SiteLogo src={googleLogin} to="#" />
        <SiteLogo src={facebookLogin} to="#" />
      </SocialLoginSite>
    </SocialLoginContainer>
  );
}

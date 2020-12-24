import styled from "styled-components";
import { Link } from "react-router-dom";
import { H3, Input } from "../../../constants/style";
import { theme } from "../../../constants/theme";
import googleLogin from "../../../components/icon/googleLogin.png";
import facebookLogin from "../../../components/icon/facebookLogin.png";

const PageContainer = styled.div`
  * {
    box-sizing: border-box;
  }

  padding-top: 40px;
  display: grid;
  justify-content: center;
`;

const LoginPageTitle = styled(H3)`
  margin-bottom: 30px;
  text-align: center;
`;

const LoginForm = styled.div`
  width: 350px;
`;

const LoginInput = styled(Input)`
  margin: 10px 0;
  width: 100%;
`;

const LoginButton = styled.button`
  width: 100%;
  height: 46px;
  margin: 20px 0;
  border-radius: 4px;
  background-color: ${theme.colors.mainPrimary};
  border: 0;
  color: #ffffff;
`;

const LoginRefer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LoginReferLink = styled(Link)`
  color: #000000;
  text-decoration: none;
`;

const SocialLogin = styled.div``;

const SocialLoginTitle = styled(H3)`
  border-bottom: 1px solid ${theme.colors.neutralLightGrey};
  width: 100%;
  text-align: center;
  display: block;
  justify-content: center;
  padding-top: 30px;
  margin-top: 30px;
  padding-bottom: 20px;
`;

const SocialLoginSite = styled(Link)`
  display: flex;
  justify-content: space-evenly;
`;

const SiteLogo = styled.img`
  height: 60px;
`;

export default function LoginPage() {
  return (
    <PageContainer>
      <LoginPageTitle>會員登入</LoginPageTitle>
      <LoginForm>
        <LoginInput placeholder="帳號" />
        <LoginInput type="password" placeholder="密碼" />
        <LoginButton>登入</LoginButton>
        <LoginRefer>
          <LoginReferLink to="#">忘記帳號密碼？</LoginReferLink>
          <LoginReferLink to="/register">還不是會員？加入會員</LoginReferLink>
        </LoginRefer>
      </LoginForm>
      <SocialLogin>
        <SocialLoginTitle>社群登入</SocialLoginTitle>
        <SocialLoginSite>
          <SiteLogo src={googleLogin} to="#" />
          <SiteLogo src={facebookLogin} to="#" />
        </SocialLoginSite>
      </SocialLogin>
    </PageContainer>
  );
}

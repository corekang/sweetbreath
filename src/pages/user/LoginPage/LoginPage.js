import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { H3, Input } from "../../../constants/style";
import { theme } from "../../../constants/theme";
import googleLogin from "../../../components/icon/googleLogin.png";
import facebookLogin from "../../../components/icon/facebookLogin.png";
import { login, getMe } from "../../../WebAPI";
import { setAuthToken } from "../../../utils";
import { useHistory } from "react-router-dom";
import AuthContext from "../../../contexts";

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

const LoginForm = styled.form`
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

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
`;

export default function LoginPage() {
  const { user, setUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const history = useHistory();
  const handleSubmit = (e) => {
    // e.preventDefault();
    // alert(username);
    setErrorMessage(null);
    login(username, password).then((data) => {
      // console.log(data);
      if (data.ok === 0) {
        console.log(user);
        return setErrorMessage(data.message);
      }
      setAuthToken(data.token);

      getMe().then((response) => {
        if (response.ok !== 1) {
          setAuthToken(null);
          return setErrorMessage(response.toString());
        }
        setUser(response.data);
        history.push("/");
        console.log(user);
      });
    });
  };
  return (
    <PageContainer>
      <LoginPageTitle>會員登入</LoginPageTitle>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <LoginForm onSubmit={handleSubmit}>
        <LoginInput
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="帳號"
        />
        <LoginInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="密碼"
        />
        <LoginButton>登入</LoginButton>
        <LoginRefer>
          <LoginReferLink to="/">忘記帳號密碼？</LoginReferLink>
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

import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { login, getMe } from "../../../webAPI/userAPI";
import { setAuthToken } from "../../../utils";
import AuthContext from "../../../contexts";
import {
  PageContainer,
  LoginPageTitle,
  LoginForm,
  LoginInput,
  LoginButton,
  LoginRefer,
  LoginReferLink,
  SocialLogin,
  SocialLoginTitle,
  SocialLoginSite,
  SiteLogo,
  ErrorMessage,
} from "./style";
import googleLogin from "../../../components/icon/googleLogin.png";
import facebookLogin from "../../../components/icon/facebookLogin.png";

export default function LoginPage() {
  const { setUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(username);
    setErrorMessage(null);
    login(username, password).then((data) => {
      // console.log(data);
      if (data.ok === 0) {
        setUsername("");
        setPassword("");
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
      });
    });
  };
  const handleInputFocus = () => {
    setErrorMessage(null);
    setPassword("");
  };
  return (
    <PageContainer>
      <LoginPageTitle>會員登入</LoginPageTitle>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <LoginForm onSubmit={handleSubmit}>
        <LoginInput
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onFocus={handleInputFocus}
          placeholder="帳號"
        />
        <LoginInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={handleInputFocus}
          type="password"
          placeholder="密碼"
        />
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

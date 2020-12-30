import styled from "styled-components";
import { H3, Input } from "../../../constants/style";
import { theme } from "../../../constants/theme";
import React, { useState, useContext } from "react";
import { register } from "../../../WebAPI";
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

const RegisterPageTitle = styled(H3)`
  margin-bottom: 30px;
  text-align: center;
`;

const RegisterForm = styled.form`
  width: 350px;
`;

const RegisterInput = styled(Input)`
  margin: 10px 0;
  width: 100%;
`;

const RegisterButton = styled.button`
  width: 100%;
  height: 46px;
  margin: 20px 0;
  border-radius: 4px;
  background-color: ${theme.colors.mainPrimary};
  border: 0;
  color: #ffffff;
  cursor: pointer;
`;

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
`;

export default function RegisterPage() {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const history = useHistory();
  const handleSubmit = (e) => {
    setErrorMessage(null);
    register(fullname, username, email, password).then((data) => {
      console.log(data);
      if (data.ok !== 1) {
        setFullname("");
        setUsername("");
        setEmail("");
        setPassword("");
        return setErrorMessage(data.message);
      }
      setAuthToken(data.token);
      history.push("/login");
    });
  };
  const handleEmail = (value) => {
    if (
      !/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
        value
      )
    ) {
      console.log("請輸入正確 Email");
    }
  };
  const handleInputFocus = () => {
    setErrorMessage(null);
  };
  return (
    <PageContainer>
      <RegisterPageTitle>加入會員</RegisterPageTitle>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <RegisterForm onSubmit={handleSubmit}>
        <RegisterInput
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          onFocus={handleInputFocus}
          placeholder="全名"
        />
        <RegisterInput
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onFocus={handleInputFocus}
          placeholder="帳號"
        />
        <RegisterInput
          value={email}
          onChange={(e) => {
            handleEmail(e.target.value);
            setEmail(e.target.value);
          }}
          onFocus={handleInputFocus}
          type="text"
          placeholder="電子郵件"
        />
        <RegisterInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={handleInputFocus}
          type="password"
          placeholder="密碼"
        />
        <RegisterButton>註冊</RegisterButton>
      </RegisterForm>
    </PageContainer>
  );
}

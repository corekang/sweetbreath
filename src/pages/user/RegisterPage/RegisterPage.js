import styled from "styled-components";
import { H3, Input } from "../../../constants/style";
import { theme } from "../../../constants/theme";

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

export default function RegisterPage() {
  return (
    <PageContainer>
      <LoginPageTitle>加入會員</LoginPageTitle>
      <LoginForm>
        <LoginInput placeholder="帳號" />
        <LoginInput placeholder="電子郵件" />
        <LoginInput placeholder="手機號碼" />
        <LoginInput type="password" placeholder="密碼" />
        <LoginInput type="password" placeholder="再次輸入密碼" />
        <LoginButton>註冊</LoginButton>
      </LoginForm>
    </PageContainer>
  );
}

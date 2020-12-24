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

const RegisterPageTitle = styled(H3)`
  margin-bottom: 30px;
  text-align: center;
`;

const RegisterForm = styled.div`
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
`;

export default function RegisterPage() {
  return (
    <PageContainer>
      <RegisterPageTitle>加入會員</RegisterPageTitle>
      <RegisterForm>
        <RegisterInput placeholder="帳號" />
        <RegisterInput placeholder="電子郵件" />
        <RegisterInput placeholder="手機號碼" />
        <RegisterInput type="password" placeholder="密碼" />
        <RegisterInput type="password" placeholder="再次輸入密碼" />
        <RegisterButton>註冊</RegisterButton>
      </RegisterForm>
    </PageContainer>
  );
}

import styled from "styled-components";
import { H3, Input } from "../../../constants/style";
import { theme } from "../../../constants/theme";

export const PageContainer = styled.div`
  * {
    box-sizing: border-box;
  }

  padding-top: 40px;
  display: grid;
  justify-content: center;
`;

export const RegisterPageTitle = styled(H3)`
  margin-bottom: 30px;
  text-align: center;
`;

export const RegisterForm = styled.form`
  width: 350px;
`;

export const RegisterInput = styled(Input)`
  margin: 10px 0;
  width: 100%;
  font-size: ${theme.fontSize.h5};
`;

export const RegisterButton = styled.button`
  width: 100%;
  height: 46px;
  margin: 20px 0;
  border-radius: 4px;
  background-color: ${theme.colors.mainPrimary};
  font-size: ${theme.fontSize.h5};
  border: 0;
  color: #ffffff;
  cursor: pointer;
`;

export const ErrorMessage = styled.div`
  color: ${theme.colors.mainPrimary};
  text-align: center;
  word-wrap: break-word;
  width: 350px;
  margin: 0 auto;
`;

export const SubmitLoading = styled.div`
  padding: 20px 0;
  height: 46px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.neutralGrey};
  text-align: center;
`;

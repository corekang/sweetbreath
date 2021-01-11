import styled from "styled-components";
import {
  H3,
  H5,
  InputLine,
  Textarea,
  MEDIA_QUERY,
} from "../../../constants/style";
import { theme } from "../../../constants/theme";

export const PageContainer = styled.div`
  * {
    box-sizing: border-box;
  }

  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContactUsMap = styled.div`
  width: 100%;
  height: 500px;
  background: grey;
`;

export const ContactUsInfo = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px auto;
  padding-bottom: 20px;

  ${MEDIA_QUERY} {
    display: block;
  }
`;

export const ContactUsAbout = styled.div`
  width: 360px;
  margin-right: 50px;

  ${MEDIA_QUERY} {
    margin: 0 auto;
    padding-left: 10px;
  }
`;

export const ContactUsPageTitle = styled(H3)`
  margin-bottom: 80px;
`;

export const ContactUsAboutItem = styled(H5)``;

export const MessageFormContainer = styled.form`
  width: 350px;
  margin: 0 auto;

  ${MEDIA_QUERY} {
    margin-top: 60px;
    border-top: 1px solid ${theme.colors.neutralLightGrey};
    padding-top: 40px;
  }
`;

export const MessageFormInput = styled(InputLine)`
  margin: 10px 0;
  width: 100%;
`;

export const MessageFormTextarea = styled(Textarea)`
  width: 100%;
  margin-left: 0;
`;

export const MessageFormButton = styled.button`
  width: 100%;
  height: 46px;
  margin: 20px 0;
  border-radius: 4px;
  background-color: ${theme.colors.mainPrimary};
  border: 0;
  color: #ffffff;
  cursor: pointer;
`;

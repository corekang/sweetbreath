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
  justify-content: space-between;
  margin: 30px auto;
  padding-bottom: 20px;
  border-bottom: 1px solid ${theme.colors.neutralPaleGrey};

  ${MEDIA_QUERY} {
    display: grid;
    justify-content: center;
  }
`;

export const ContactUsAbout = styled.div`
  width: 360px;
  margin-right: 50px;
`;

export const ContactUsPageTitle = styled(H3)`
  margin-bottom: 80px;
`;

export const ContactUsAboutItem = styled(H5)``;

export const ContactUsForm = styled.div`
  width: 350px;
  ${MEDIA_QUERY} {
    margin-top: 30px;
    border-top: 1px solid ${theme.colors.neutralLightGrey};
    padding-top: 40px;
  }
`;

export const ContactUsInput = styled(InputLine)`
  margin: 10px 0;
  width: 100%;
`;

export const ContactUsTextarea = styled(Textarea)`
  width: 100%;
  margin-left: 0;
`;

export const ContactUsButton = styled.button`
  width: 100%;
  height: 46px;
  margin: 20px 0;
  border-radius: 4px;
  background-color: ${theme.colors.mainPrimary};
  border: 0;
  color: #ffffff;
  cursor: pointer;
`;

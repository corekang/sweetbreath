import styled from "styled-components";
import {
  H3,
  H5,
  InputLine,
  Textarea,
  MEDIA_QUERY,
} from "../../../constants/style";
import { theme } from "../../../constants/theme";
import { Map } from "../../../components/Map/Map.js";

const PageContainer = styled.div`
  * {
    box-sizing: border-box;
  }

  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContactUsMap = styled.div`
  width: 100%;
  height: 500px;
  background: grey;
`;

const ContactUsInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  ${MEDIA_QUERY} {
    display: grid;
    justify-content: center;
  }
`;

const ContactUsAbout = styled.div`
  width: 360px;
  margin-right: 50px;
`;

const ContactUsPageTitle = styled(H3)`
  margin-bottom: 30px;
`;

const ContactUsAboutItem = styled(H5)``;

const ContactUsForm = styled.div`
  width: 350px;
  ${MEDIA_QUERY} {
    margin-top: 30px;
    border-top: 1px solid ${theme.colors.neutralLightGrey};
    padding-top: 40px;
  }
`;

const ContactUsInput = styled(InputLine)`
  margin: 10px 0;
  width: 100%;
`;

const ContactUsTextarea = styled(Textarea)`
  width: 100%;
  margin-left: 0;
`;

const ContactUsButton = styled.button`
  width: 100%;
  height: 46px;
  margin: 20px 0;
  border-radius: 4px;
  background-color: ${theme.colors.mainPrimary};
  border: 0;
  color: #ffffff;
  cursor: pointer;
`;

export default function ContactUsPage() {
  return (
    <PageContainer>
      <ContactUsMap>
        <Map />
      </ContactUsMap>
      <ContactUsInfo>
        <ContactUsAbout>
          <ContactUsPageTitle>聯絡我們</ContactUsPageTitle>
          <ContactUsAboutItem>甜の呼吸</ContactUsAboutItem>
          <ContactUsAboutItem>地址｜臺灣臺北</ContactUsAboutItem>
          <ContactUsAboutItem>電話｜0800-888888</ContactUsAboutItem>
          <ContactUsAboutItem>
            電子郵件｜chiaoyuankang@gmail.com
          </ContactUsAboutItem>
          <ContactUsAboutItem>
            服務時間｜週一至週五　08:00-16:00
          </ContactUsAboutItem>
        </ContactUsAbout>
        <ContactUsForm>
          <ContactUsInput placeholder="姓名" />
          <ContactUsInput placeholder="電子郵件" />
          <ContactUsInput placeholder="手機號碼" />
          <ContactUsTextarea placeholder="輸入問題" rows="10" />
          <ContactUsButton>我要留言</ContactUsButton>
        </ContactUsForm>
      </ContactUsInfo>
    </PageContainer>
  );
}

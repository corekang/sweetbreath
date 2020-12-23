import styled from "styled-components";
import { H3, InputLine } from "../../../constants/style";
import { theme } from "../../../constants/theme";

const PageContainer = styled.div`
  * {
    box-sizing: border-box;
  }

  width: 100%;
  display: display;
  justify-content: center;
`;

const ContactUsMap = styled.div`
  width: 100%;
  height: 500px;
  background: grey;
`;

const ContactUsInfo = styled.div``;

const ContactUsPageTitle = styled(H3)`
  margin-bottom: 30px;
  text-align: center;
`;

const ContactUsAbout = styled.div`
  display: grid;
  justify-content: left;
`;

const ContactUsForm = styled.div`
  width: 350px;
`;

const ContactUsInput = styled(InputLine)`
  margin: 10px 0;
  width: 100%;
`;

const ContactUsButton = styled.button`
  width: 100%;
  height: 46px;
  margin: 20px 0;
  border-radius: 4px;
  background-color: ${theme.colors.mainPrimary};
  border: 0;
  color: #ffffff;
`;

export default function ContactUsPage() {
  return (
    <PageContainer>
      <ContactUsMap></ContactUsMap>
      <ContactUsInfo>
        <ContactUsPageTitle>聯絡我們</ContactUsPageTitle>
        <ContactUsAbout></ContactUsAbout>
        <ContactUsForm>
          <ContactUsInput placeholder="姓名" />
          <ContactUsInput placeholder="電子郵件" />
          <ContactUsInput placeholder="手機號碼" />
          <ContactUsInput placeholder="問題" />
          <ContactUsButton>我要留言</ContactUsButton>
        </ContactUsForm>
      </ContactUsInfo>
    </PageContainer>
  );
}

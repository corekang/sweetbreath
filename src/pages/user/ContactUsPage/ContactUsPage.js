import {
  PageContainer,
  ContactUsMap,
  ContactUsInfo,
  ContactUsAbout,
  ContactUsPageTitle,
  ContactUsAboutItem,
} from "./style";
import { Map } from "../../../components/Map/Map.js";
import MessageBoard from "./MessageBoard";
import { Link } from "react-router-dom";

export default function ContactUsPage() {
  return (
    <PageContainer>
      <ContactUsMap>
        <Map />
      </ContactUsMap>
      <ContactUsInfo>
        <ContactUsAbout>
          <ContactUsPageTitle>聯絡我們</ContactUsPageTitle>
          <ContactUsAboutItem>
            Sweetbreath 甜の呼吸 網路甜點工作室
          </ContactUsAboutItem>
          <ContactUsAboutItem>地址｜臺灣臺北市</ContactUsAboutItem>
          <ContactUsAboutItem>電話｜0800-888888</ContactUsAboutItem>
          <ContactUsAboutItem>
            電子郵件｜0800-888888@gmail.com
          </ContactUsAboutItem>
          <ContactUsAboutItem>
            服務時間｜週一至週五　08:00-16:00
          </ContactUsAboutItem>
          <ContactUsAboutItem>
            版權聲明｜
            <Link to="https://choosealicense.com/licenses/mit/">
              MIT License
            </Link>
          </ContactUsAboutItem>
        </ContactUsAbout>
        <MessageBoard />
      </ContactUsInfo>
    </PageContainer>
  );
}

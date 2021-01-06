import {
  ContactUsForm,
  ContactUsInput,
  ContactUsTextarea,
  ContactUsButton,
} from "./style";

export default function MessageBoard() {
  return (
    <ContactUsForm>
      <ContactUsInput placeholder="姓名" />
      <ContactUsInput placeholder="電子郵件" />
      <ContactUsInput placeholder="手機號碼" />
      <ContactUsTextarea placeholder="輸入問題" rows="5" />
      <ContactUsButton>我要留言</ContactUsButton>
    </ContactUsForm>
  );
}

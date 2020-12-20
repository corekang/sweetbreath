import styled from "styled-components";
import { MEDIA_QUERY, H1, Caption1 } from "../../../constants/style";
const Content = styled.div`
  margin: 75px 60px;
`;

export default function ProductListPage() {
  return (
    <Content>
      <H1>MENU</H1>
      <Caption1>常溫蛋糕</Caption1>
    </Content>
  );
}

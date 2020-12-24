import styled from "styled-components";
import {
  H3,
  H5,
  InputLine,
  Textarea,
  MEDIA_QUERY,
} from "../../../constants/style";
import { theme } from "../../../constants/theme";

const PageContainer = styled.div`
  * {
    box-sizing: border-box;
  }

  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PageTitle = styled(H3)`
  margin-bottom: 30px;
`;

const NewsGroup = styled.div``;

const NewsItem = styled.div``;

const NewsItemImg = styled.div``;

const NewsItemInfo = styled.div``;

export default function NewsPage() {
  return (
    <PageContainer>
      <PageTitle>最新消息</PageTitle>
      <NewsGroup>
        <NewsItem>
          <NewsItemImg></NewsItemImg>
          <NewsItemInfo></NewsItemInfo>
        </NewsItem>
        <NewsItem>
          <NewsItemImg></NewsItemImg>
          <NewsItemInfo></NewsItemInfo>
        </NewsItem>
      </NewsGroup>
    </PageContainer>
  );
}

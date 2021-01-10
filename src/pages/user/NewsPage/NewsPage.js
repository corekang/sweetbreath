import { PageContainer } from "./style";
import { H1 } from "../../../constants/style";
import NewsGroup from "./NewsGroup";

export default function NewsPage() {
  return (
    <PageContainer>
      <H1>最新消息</H1>
      <NewsGroup />
    </PageContainer>
  );
}

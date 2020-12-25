import styled from "styled-components";
import { H3, Input } from "../../../constants/style";
import { theme } from "../../../constants/theme";

const PageContainer = styled.div`
  * {
    box-sizing: border-box;
  }

  max-width: 1280px;
  margin: 40px auto;
  padding: 0 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${MEDIA_QUERY} {
    padding: 0 20px;
  }
`;

const PageTitle = styled(H1)``;

export default function MemberPage() {
  return (
    <PageContainer>
      <PageTitle></PageTitle>
    </PageContainer>
  );
}

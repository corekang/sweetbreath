import styled from "styled-components";
import { H1, MEDIA_QUERY } from "../../../constants/style";
import { theme } from "../../../constants/theme";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Accordion, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PageContainer = styled(Container)`
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

const MemberCard = styled(Card)`
  margin-top: 30px;
`;

export default function MemberPage() {
  return (
    <Container>
      <PageTitle>會員專區</PageTitle>
      <Accordion>
        <MemberCard>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              會員資料
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </MemberCard>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              消費紀錄
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              我的最愛
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>
  );
}

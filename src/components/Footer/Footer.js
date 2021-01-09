import styled from "styled-components";
import { theme } from "../../constants/theme";
import { H4, BodyLarge, Body } from "../../constants/style";
import gitHubIcon from "../icon/gitHub.png";

const FooterContent = styled.div`
  margin-top: 200px;
  padding-top: 20px;
  background-color: ${theme.colors.neutralPaleGrey};
  color: ${theme.colors.neutralDarkGrey};
  text-align: center;
`;

const FooterTitle = styled(H4)`
  margin: 0px auto;
  max-width: 600px;
  text-align: left;
`;

const ItemContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 400px;
  margin: 7px auto 0px;
`;

const CopyrightContent = styled.div`
  display: flex;
  box-sizing: border;
  padding: 10px;
  justify-content: center;
  border-top: 1px solid #8080801f;
  color: ${theme.colors.neutralDarkGrey};
`;

const CopyrightText = styled(Body)`
  padding: 3px;
  margin-right: 5px;
`;

const ItemText = styled(BodyLarge)`
  border-bottom: 1px solid #7c7c7c;
  width: 80px;
`;

const ItemImg = styled.img`
  margin: 10px;
  height: 20px;
  width: 20px;
`;

const ItemWrapper = styled.div`
  & + & {
    margin-left: 10px;
  }
`;

const SourceLink = styled.a`
  padding: 2px;
  color: ${theme.colors.neutralDarkGrey};
  text-decoration: none;
  border: 1px solid ${theme.colors.neutralDarkGrey};
  border-radius: 5px;
  :hover {
    background-color: ${theme.colors.neutralGrey};
    color: white;
  }
`;

function Item(props) {
  return (
    <ItemWrapper>
      <ItemText>{props.creator}</ItemText>
      <a href={props.gitHubPage}>
        <ItemImg src={gitHubIcon} />
      </a>
    </ItemWrapper>
  );
}

export default function Footer() {
  return (
    <FooterContent>
      <FooterTitle>Created by</FooterTitle>
      <ItemContent>
        <Item creator={"Core"} gitHubPage={"https://github.com/corekang"} />
        <Item
          creator={"Heidi"}
          gitHubPage={"https://github.com/heidiliu2020"}
        />
        <Item creator={"Ivy"} gitHubPage={"https://github.com/ivymuchacha"} />
        <Item creator={"Jim"} gitHubPage={"https://github.com/Oceankj"} />
      </ItemContent>
      <CopyrightContent>
        <CopyrightText>© 2020 Lidemy. All rights reserved.</CopyrightText>
        <SourceLink href="https://github.com/corekang/sweetbreath">
          <Body>Source Code.</Body>
        </SourceLink>
      </CopyrightContent>
    </FooterContent>
  );
}

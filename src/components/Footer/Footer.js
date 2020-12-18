import styled from "styled-components";
import { theme } from "../../constants/theme";

const FooterContent = styled.div`
  background-color: ${theme.colors.neutralPaleGrey};
`;

export default function Footer() {
  return <FooterContent>FOOTER</FooterContent>;
}

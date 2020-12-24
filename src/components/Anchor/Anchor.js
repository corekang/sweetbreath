import styled from "styled-components";
import { MEDIA_QUERY } from "../../constants/style";

export const Up = styled.div`
  display: flex;
  width: 55px;
  height: 55px;
  cursor: pointer;
  text-align: center;
  font-size: ${(props) => props.theme.fontSize.h4};
  font-weight: bold;
  border-radius: 50%;
  position: fixed;
  top: 85%;
  left: 90%;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.neutralWhite};
  background: ${(props) => props.theme.colors.uiNegative};
  z-index: 5;
  opacity: 0.6;
  :hover {
    opacity: 1;
  }
  ${MEDIA_QUERY} {
    top: 85%;
    left: 75%;
    width: 60px;
    height: 60px;
    font-size: ${(props) => props.theme.fontSize.h3};
  }
`;

export const scrollToAnchor = (anchorName) => {
  if (anchorName) {
    let anchorElement = document.getElementById(anchorName);
    if (anchorElement) {
      anchorElement.scrollIntoView();
    }
  }
};

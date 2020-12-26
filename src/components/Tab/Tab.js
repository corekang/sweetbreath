import styled from "styled-components";
import { H1, MEDIA_QUERY } from "../../constants/style";
import { theme } from "../../constants/theme";

export const Tabs = styled.div`
  overflow: hidden;
  background: #ffffff;
  height: 3em;
`;

// margin-right: 0.1em;
// height: ${(props) => (props.active ? "3em" : "2.6em; top:.4em")};
export const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: 33%;
  position: relative;

  font-size: 1em;
  border: ${(props) => (props.active ? "1px solid #ccc" : "")};
  border-bottom: ${(props) => (props.active ? "none" : "")};
  background-color: ${(props) => (props.active ? "white" : "lightgray")};
  height: ${(props) => (props.active ? "3em" : "3em;")};
  transition: background-color 0.5s ease-in-out;
  border-top-right-radius: 30px;

  :hover {
    background-color: white;
  }
`;

export const Content = styled.div`
  ${(props) => (props.active ? "" : "display: none")}
`;

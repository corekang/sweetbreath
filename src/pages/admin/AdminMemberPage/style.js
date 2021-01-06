import styled from "styled-components";
import { MEDIA_QUERY, H4, H5 } from "../../../constants/style";

export const Content = styled.div`
  max-width: 1280px;
  margin: 40px auto;
  padding: 0 40px;
`;

export const MemberSection = styled.div`
  & + & {
    margin: 80px 0;
  }
`;

export const MemberList = styled.div`
  text-align: center;
  ${MEDIA_QUERY} {
    flex-direction: column;
  }
`;

export const MemberSetting = styled.div`
  display: none;

  ${MEDIA_QUERY} {
    display: grid;
  }
`;

export const Member = styled.div`
  display: flex;
  padding: 5px;
  border-radius: 5px;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors.neutralGrey};
  background: ${(props) =>
    props.status
      ? props.theme.colors.neutralWhite
      : props.theme.colors.uiWarning};
  & {
    margin: 15px 0;
  }

  :hover {
    box-shadow: 0 3px 22px 1px rgba(90, 92, 102, 0.06);
    ${MemberSetting} {
      display: flex;
      ${MEDIA_QUERY} {
        display: grid;
      }
    }
  }
`;

export const MemberInformation = styled.div`
  display: flex;
`;

export const MemberItem = styled.div`
  display: flex;
  @media screen and (max-width: 1100px) {
    display: block;
  }
`;

export const SettingButton = styled.button`
  display: flex;
  margin: auto 10px;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.theme.fontSize.button};
  line-height: 1.21;
  font-weight: 500;
  text-decoration: none;
  text-align: center;
  padding: 10px 9px;
  border: none;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.neutralWhite};
  background: ${(props) => props.theme.colors.neutralGrey};
  cursor: pointer;
  :hover {
    background: ${(props) =>
      props.caution === "true"
        ? props.theme.colors.uiNegative
        : props.theme.colors.uiPositive};
  }
  ${MEDIA_QUERY} {
    margin: 15px;
    min-width: 40px;
    font-size: ${(props) => props.theme.fontSize.h5};
  }
`;

export const MemberName = styled(H4)`
  width: 100px;
  margin: 15px 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
  line-height: 1em;
`;

export const MemberDesc = styled(H5)`
  margin: 15px 20px;
  text-align: left;
  line-height: 1em;
  color: ${(props) =>
    props.caution === "true"
      ? props.theme.colors.uiNegative
      : props.theme.colors.neutralDarkGrey};
`;

export const SearchContent = styled.div`
  padding-left: 24px;
`;

export const SelectArea = styled.select`
  height: 2.5em;
  padding: 2px;
`;

export const TextArea = styled.input`
  line-height: 2em;
  margin-left: 10px;
`;

export const SearchButton = styled.button`
  line-height: 2em;
  margin-left: 10px;
`;

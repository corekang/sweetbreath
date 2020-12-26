import styled from "styled-components";
import { MEDIA_QUERY, H1, H3, H4, H5 } from "../../../constants/style";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { scrollToAnchor } from "../../../components/Anchor";

const Content = styled.div`
  max-width: 1280px;
  margin: 40px auto;
  padding: 0 40px;
`;

const MemberSection = styled.div`
  & + & {
    margin: 80px 0;
  }
`;

const MemberList = styled.div`
  text-align: center;
  ${MEDIA_QUERY} {
    flex-direction: column;
  }
`;

const MemberSetting = styled.div`
  display: none;

  ${MEDIA_QUERY} {
    display: grid;
  }
`;

const Member = styled.div`
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

const MemberInformation = styled.div`
  display: flex;
`;

const MemberItem = styled.div`
  display: flex;
  @media screen and (max-width: 1100px) {
    display: block;
  }
`;

const MemberName = styled(H4)`
  margin: 15px 20px;
  text-align: left;
  line-height: 1em;
`;

const MemberDesc = styled(H5)`
  margin: 15px 20px;
  text-align: left;
  line-height: 1em;
  color: ${(props) =>
    props.caution === "true"
      ? props.theme.colors.uiNegative
      : props.theme.colors.neutralDarkGrey};
`;

const SettingButton = styled(Link)`
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

const Members = ({ member }) => {
  return (
    <Member status={member.status}>
      <MemberInformation>
        <MemberName>{member.username}</MemberName>
        <MemberItem>
          <MemberDesc>id：{member.id}</MemberDesc>
          <MemberDesc>全名：{member.fullname}</MemberDesc>
          <MemberDesc>信箱：{member.email}</MemberDesc>
          <MemberDesc>地址：{member.address}</MemberDesc>
          {member["is_admin"] && (
            <MemberDesc caution={"true"}>管理員</MemberDesc>
          )}
          {!member.status && <MemberDesc caution={"true"}>停權</MemberDesc>}
        </MemberItem>
      </MemberInformation>
      <MemberSetting>
        <SettingButton caution="true">
          {member["is_admin"] ? "取消權限" : "設為管理"}
        </SettingButton>
        <SettingButton caution={member.status.toString()}>
          {member.status ? "停權" : "恢復權限"}
        </SettingButton>
      </MemberSetting>
    </Member>
  );
};

const SearchContent = styled.div`
  padding-left: 24px;
`;

const SelectArea = styled.select`
  height: 2.5em;
  padding: 2px;
`;

const TextArea = styled.input`
  line-height: 2em;
  margin-left: 10px;
`;

const SearchButton = styled.button`
  line-height: 2em;
  margin-left: 10px;
`;

function SearchBar({
  searchType,
  searchText,
  handleSearchType,
  handleSearch,
  handleSearchText,
}) {
  return (
    <SearchContent>
      <SelectArea
        value={searchType}
        onChange={(e) => {
          handleSearchType(e.target.value);
        }}
      >
        <option value="id">id</option>
        <option value="fullname">名稱</option>
      </SelectArea>
      <TextArea
        type="text"
        valur={searchText}
        onChange={(e) => handleSearchText(e.target.value)}
      />
      <SearchButton onClick={handleSearch}>搜尋</SearchButton>
    </SearchContent>
  );
}

export default function AdminMemberPage() {
  const [searchType, setSearchType] = useState("fullname");
  const [searchText, setSearchText] = useState("");
  const [members, setMembers] = useState([
    {
      id: 1,
      username: "可麗露",
      fullname: "280",
      email: "1234@gmil.com",
      address: "安安里安安路安安巷66號之6",
      is_admin: true,
      status: true,
    },
    {
      id: 2,
      username: "蘿蔔糕",
      fullname: "蘿蔔糕加蛋",
      email: "1234@gmil.com",
      address: "安安里安安路安安巷66號之6",
      is_admin: false,
      status: true,
    },
    {
      id: 3,
      username: "蘿蔔糕2",
      fullname: "蘿蔔糕加蛋2",
      email: "1234@gmil.com",
      address:
        "安安里安安路安安巷66號之6安里安安路安安巷66號之6安里安安路安安巷66號之6",
      is_admin: false,
      status: false,
    },
  ]);

  const handleSearchType = (type) => {
    setSearchType(type);
  };

  const handleSearchText = (text) => {
    setSearchText(text);
  };

  const handleSearch = () => {
    console.log(searchText);
  };

  useEffect(() => {
    console.log(searchText);
  }, [searchType]);
  return (
    <Content>
      <H1>權限管理</H1>
      <SearchBar
        searchType={searchType}
        searchText={searchText}
        handleSearchType={handleSearchType}
        handleSearchText={handleSearchText}
        handleSearch={handleSearch}
      />
      <MemberSection>
        <MemberList>
          {members.map((member) => (
            <Members member={member} key={member.id} />
          ))}
        </MemberList>
      </MemberSection>
    </Content>
  );
}

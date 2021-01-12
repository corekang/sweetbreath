import { H1 } from "../../../constants/style";
import { useState, useEffect, useContext } from "react";
import { Content, MemberSection, MemberList } from "./style";
import SearchBar from "./SearchBar";
import Members from "./Members";
import { getAllUser, editUserStatus } from "../../../webAPI/userAPI";
import { LoadingContext } from "../../../contexts";
import Loading from "../../../components/Loading";

export default function AdminMemberPage() {
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const [searchType, setSearchType] = useState("id");
  const [searchText, setSearchText] = useState("");
  const [rawData, setRawData] = useState([]);
  const [members, setMembers] = useState([]);

  const handleSearchType = (type) => {
    setSearchType(type);
  };

  const handleSearchText = (text) => {
    setSearchText(text);
  };

  useEffect(() => {
    setIsLoading(true);
    getAllUser().then((res) => {
      setIsLoading(false);
      setMembers(res.data);
      setRawData(res.data);
    });
  }, []);

  return (
    <Content>
      <H1>權限管理</H1>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <SearchBar
            searchType={searchType}
            searchText={searchText}
            handleSearchType={handleSearchType}
            handleSearchText={handleSearchText}
            rawData={rawData}
            setMembers={setMembers}
          />
          <MemberSection>
            <MemberList>
              {members.length > 0 &&
                members.map((member) => (
                  <Members
                    member={member}
                    members={members}
                    setMembers={setMembers}
                    editUserStatus={editUserStatus}
                    key={member.id}
                  />
                ))}
            </MemberList>
          </MemberSection>
        </>
      )}
    </Content>
  );
}

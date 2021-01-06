import {
  Member,
  MemberInformation,
  MemberName,
  MemberItem,
  MemberDesc,
  MemberSetting,
  SettingButton,
} from "./style";

export default function Members({
  member,
  members,
  setMembers,
  editUserStatus,
}) {
  const handleUserStatusAPI = ({ id, is_admin, status }, type) => {
    type === "is_admin" ? (is_admin = !is_admin) : (status = !status);
    //改畫面
    const NewMembers = members.map((member) => {
      if (member.id !== id) {
        return member;
      }
      return { ...member, is_admin, status };
    });
    setMembers(NewMembers);
    //改資料庫
    editUserStatus(id, is_admin, status);
  };

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
        <SettingButton
          caution="true"
          onClick={() => {
            handleUserStatusAPI(member, "is_admin");
          }}
        >
          {member["is_admin"] ? "取消權限" : "設為管理"}
        </SettingButton>
        <SettingButton
          caution={member.status.toString()}
          onClick={() => {
            handleUserStatusAPI(member, "status");
          }}
        >
          {member.status ? "停權" : "恢復權限"}
        </SettingButton>
      </MemberSetting>
    </Member>
  );
}

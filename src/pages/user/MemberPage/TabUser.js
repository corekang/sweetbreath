import {
  TabUserGroup,
  TabUserItem,
  TabUserItemTitle,
  TabUserItemValue,
  TabUserItemValueNew,
  EditButtonBlock,
  EditButton,
  Message,
} from "./style";

export default function TabUser(
  {
    user,
    fullname,
    email,
    birthday,
    address,
    message,
    handleEditUser,
    handleEditInputFocus,
    handleEditFullname,
    handleEditEmail,
    handleEditBirthday,
    handleEditAddress,
  },
  editable
) {
  return (
    <TabUserGroup onSubmit={handleEditUser}>
      <TabUserItem editable={editable === 0}>
        <TabUserItemTitle>編號</TabUserItemTitle>
        <TabUserItemValue>{user.id}</TabUserItemValue>
        <TabUserItemValueNew editable={editable === 0}></TabUserItemValueNew>
      </TabUserItem>
      <TabUserItem editable={editable === 0}>
        <TabUserItemTitle>帳號</TabUserItemTitle>
        <TabUserItemValue>{user.username}</TabUserItemValue>
        <TabUserItemValueNew editable={editable === 0}></TabUserItemValueNew>
      </TabUserItem>
      <TabUserItem editable={editable !== 0}>
        <TabUserItemTitle>全名</TabUserItemTitle>
        <TabUserItemValue>{user.fullname}</TabUserItemValue>
        <TabUserItemValueNew
          editable={editable !== 0}
          type="text"
          placeholder="輸入新資料（必填）"
          value={fullname}
          onChange={handleEditFullname}
          onFocus={handleEditInputFocus}
        ></TabUserItemValueNew>
      </TabUserItem>
      <TabUserItem editable={editable !== 0}>
        <TabUserItemTitle>電子郵件</TabUserItemTitle>
        <TabUserItemValue>{user.email}</TabUserItemValue>
        <TabUserItemValueNew
          editable={editable !== 0}
          type="email"
          placeholder="輸入新資料（必填）"
          value={email}
          onChange={handleEditEmail}
          onFocus={handleEditInputFocus}
        ></TabUserItemValueNew>
      </TabUserItem>
      <TabUserItem editable={editable !== 0}>
        <TabUserItemTitle>生日</TabUserItemTitle>
        <TabUserItemValue>
          {new Date(user.birthday).toLocaleDateString("zh-TW")}
        </TabUserItemValue>
        <TabUserItemValueNew
          editable={editable !== 0}
          type="date"
          placeholder="輸入新資料"
          value={birthday}
          onChange={handleEditBirthday}
          onFocus={handleEditInputFocus}
        ></TabUserItemValueNew>
      </TabUserItem>
      <TabUserItem editable={editable !== 0}>
        <TabUserItemTitle>地址</TabUserItemTitle>
        <TabUserItemValue>{user.address}</TabUserItemValue>
        <TabUserItemValueNew
          editable={editable !== 0}
          type="text"
          placeholder="輸入新資料"
          value={address}
          onChange={handleEditAddress}
          onFocus={handleEditInputFocus}
        ></TabUserItemValueNew>
      </TabUserItem>
      <EditButtonBlock>
        {message && <Message>{message}</Message>}
        <EditButton>變更</EditButton>
      </EditButtonBlock>
    </TabUserGroup>
  );
}

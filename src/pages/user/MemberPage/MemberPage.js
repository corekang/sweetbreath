import styled, { createGlobalStyle } from "styled-components";
import { H1, MEDIA_QUERY, Input } from "../../../constants/style";
import { theme } from "../../../constants/theme";
import React, { useState, useEffect } from "react";
import { Tabs, Tab, Content } from "../../../components/Tab/Tab.js";
import Table from "../../../components/Table/Table.js";
import { getUser, editUser, getUserOrders } from "../../../webAPI/userAPI";

const Container = styled.div`
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

const PageTitle = styled(H1)`
  margin-bottom: 40px;
`;

const TabUser = (
  {
    user,
    fullname,
    email,
    address,
    birthday,
    handleEditUser,
    handleEditInputFocus,
    handleEditFullname,
    handleEditEmail,
    handleEditBirthday,
    handleEditAddress,
    message,
  },
  editable
) => {
  return (
    <TabGroup onSubmit={handleEditUser}>
      <TabItem editable={editable === 0}>
        <TableItemTitle>編號</TableItemTitle>
        <TableItemValue>{user.id}</TableItemValue>
        <TableItemValueNew editable={editable === 0}></TableItemValueNew>
      </TabItem>
      <TabItem editable={editable === 0}>
        <TableItemTitle>帳號</TableItemTitle>
        <TableItemValue>{user.username}</TableItemValue>
        <TableItemValueNew editable={editable === 0}></TableItemValueNew>
      </TabItem>
      <TabItem editable={editable !== 0}>
        <TableItemTitle>全名</TableItemTitle>
        <TableItemValue>{user.fullname}</TableItemValue>
        <TableItemValueNew
          editable={editable !== 0}
          type="text"
          placeholder="輸入新資料（必填）"
          value={fullname}
          onChange={handleEditFullname}
          onFocus={handleEditInputFocus}
        ></TableItemValueNew>
      </TabItem>
      <TabItem editable={editable !== 0}>
        <TableItemTitle>電子郵件</TableItemTitle>
        <TableItemValue>{user.email}</TableItemValue>
        <TableItemValueNew
          editable={editable !== 0}
          type="email"
          placeholder="輸入新資料（必填）"
          value={email}
          onChange={handleEditEmail}
          onFocus={handleEditInputFocus}
        ></TableItemValueNew>
      </TabItem>
      <TabItem editable={editable !== 0}>
        <TableItemTitle>生日</TableItemTitle>
        <TableItemValue>
          {new Date(user.birthday).toLocaleDateString("zh-TW")}
        </TableItemValue>
        <TableItemValueNew
          editable={editable !== 0}
          type="date"
          placeholder="輸入新資料"
          value={birthday}
          onChange={handleEditBirthday}
          onFocus={handleEditInputFocus}
        ></TableItemValueNew>
      </TabItem>
      <TabItem editable={editable !== 0}>
        <TableItemTitle>地址</TableItemTitle>
        <TableItemValue>{user.address}</TableItemValue>
        <TableItemValueNew
          editable={editable !== 0}
          type="text"
          placeholder="輸入新資料"
          value={address}
          onChange={handleEditAddress}
          onFocus={handleEditInputFocus}
        ></TableItemValueNew>
      </TabItem>
      <EditButtonBlock>
        {message && <Message>{message}</Message>}
        <EditButton>變更</EditButton>
      </EditButtonBlock>
    </TabGroup>
  );
};

const TabOrder = styled.div``;

const TabGroup = styled.form`
  width: 100%;
  border-top: none;
  padding: 30px 0 0 0;
  margin-left: 10px;
  display: column;
`;

const TabItem = styled.div`
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
  width: 65%;
  padding: 8px 0;
  display: grid;
  grid-template-columns: 20% 40% 40%;
  align-items: center;
  :hover {
    background: ${(props) =>
      props.editable ? theme.colors.neutralLightGrey : ""};
  }
}
`;

const TableItemTitle = styled.div``;

const TableItemValue = styled.div``;

const TableItemValueNew = styled(Input)`
  color: ${theme.colors.neutralBlack};
  font-size: ${theme.fontSize.bodyLarge};
  border-bottom: 1px solid ${theme.colors.neutralLightGrey};
  padding: 8px;
  margin: 0 10px;
  visibility: ${(props) => (props.editable ? "" : "hidden")};
`;

const EditButtonBlock = styled.div`
  width: 65%;
  padding-right: 10px;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 10px;
`;

const EditButton = styled.button`
  width: 50px;
  height: 30px;
  border-radius: 4px;
  background: ${theme.colors.mainPrimary};
  border: 0;
  color: #ffffff;
  cursor: pointer;
  :hover {
    background: ${theme.colors.uiNegative};
  }
`;

const GlobalStyle = createGlobalStyle`
  table {
    width: 100%;
    border: 1px solid black;
    border-collapse: collapse;
    th, td {
      border: 1px solid black;
      border-collapse: collapse;
    }
    th, td, tr {
      padding: 10px;
    }
    th {
      text-align: left;
    }
  }
`;

const Message = styled.div`
  color: ${theme.colors.mainPrimary};
  margin: 0 20px 0 0;
  align-items: center;
`;

export default function MemberPage() {
  const [user, setUser] = useState([]);
  const [order, setOrder] = useState([]);
  const [active, setActive] = useState(0);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState();
  const [age, setAge] = useState(0);

  // 取得會員個人資料
  useEffect(() => {
    getUser().then((user) => setUser(user.data));
  }, []);

  // 取得會員訂單資料
  useEffect(() => {
    getUserOrders().then((order) => console.log(setOrder(order.data)));
  }, []);

  // 切換分頁
  const handleClick = (e) => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };

  // 切換分頁時清空 message、value
  useEffect(() => {
    setMessage("");
    setFullname("");
    setEmail("");
    setBirthday("");
    setAddress("");
  }, [active]);

  const handleEditUser = () => {
    // if (!fullname) return;
    if (!fullname) {
      setMessage("全名必填喔！");
      return;
    }
    if (!email) {
      setMessage("電子郵件必填喔！");
      return;
    }

    // 變更畫面
    setUser((user) => {
      return { ...user, fullname, email, birthday, address };
    });

    setFullname("");
    setEmail("");
    setBirthday("");
    setAddress("");

    // 變更資料庫
    editUser(fullname, email, birthday, address).then((res) => {
      if (res.ok === 1) {
        setMessage(res.message);
        return;
      }
    });
  };

  const handleEditInputFocus = () => {
    setMessage(null);
  };

  const handleEditFullname = (e) => {
    setFullname(e.target.value);
  };

  const handleEditEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleEditBirthday = (e) => {
    setBirthday(e.target.value);
  };

  const handleEditAddress = (e) => {
    setAddress(e.target.value);
  };

  return (
    <Container>
      <PageTitle>會員專區</PageTitle>
      {/*message && <Message>{message}</Message>*/}
      <Tabs>
        <Tab onClick={handleClick} active={active === 0} id={0}>
          個人資料
        </Tab>
        <Tab onClick={handleClick} active={active === 1} id={1}>
          消費紀錄
        </Tab>
      </Tabs>
      <>
        <Content active={active === 0}>
          <TabUser
            user={user}
            fullname={fullname}
            email={email}
            address={address}
            birthday={birthday}
            message={message}
            handleEditUser={handleEditUser}
            handleEditInputFocus={handleEditInputFocus}
            handleEditFullname={handleEditFullname}
            handleEditEmail={handleEditEmail}
            handleEditBirthday={handleEditBirthday}
            handleEditAddress={handleEditAddress}
          />
        </Content>
        <Content active={active === 1}>
          <TabOrder order={order}></TabOrder>
        </Content>
      </>
    </Container>
  );
}

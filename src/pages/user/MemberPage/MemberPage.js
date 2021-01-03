import styled, { createGlobalStyle } from "styled-components";
import { H1, MEDIA_QUERY, Input } from "../../../constants/style";
import { theme } from "../../../constants/theme";
import React, { useState, useEffect } from "react";
import { Tabs, Tab, Content } from "../../../components/Tab/Tab.js";
import Table from "../../../components/Table/Table.js";
import { getUser, editUser, getUserOrders } from "../../../WebAPI";

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

const TabContainer = (
  {
    user,
    editInputValue,
    handleEditUser,
    handleEditInputChange,
    handleEditInputFocus,
  },
  editable
) => {
  return (
    <TabGroup>
      <TabItem editable={editable === 0}>
        <TableItemTitle>編號</TableItemTitle>
        <TableItemValue>{user.id}</TableItemValue>
        <TableItemValueNew editable={editable === 0}></TableItemValueNew>
        <EditButton editable={editable === 0}>變更</EditButton>
      </TabItem>
      <TabItem editable={editable === 0}>
        <TableItemTitle>帳號</TableItemTitle>
        <TableItemValue>{user.username}</TableItemValue>
        <TableItemValueNew editable={editable === 0}></TableItemValueNew>
        <EditButton editable={editable === 0}>變更</EditButton>
      </TabItem>
      <TabItem editable={editable !== 0}>
        <TableItemTitle>全名</TableItemTitle>
        <TableItemValue>{user.fullname}</TableItemValue>
        <TableItemValueNew
          editable={editable !== 0}
          type="text"
          placeholder="輸入新資料"
          value={editInputValue}
          onChange={handleEditInputChange}
          onFocus={handleEditInputFocus}
        ></TableItemValueNew>
        <EditButton
          editable={editable !== 0}
          onClick={() => handleEditUser(user.fullname)}
        >
          變更
        </EditButton>
      </TabItem>
      <TabItem editable={editable !== 0}>
        <TableItemTitle>電子郵件</TableItemTitle>
        <TableItemValue>{user.email}</TableItemValue>
        <TableItemValueNew
          editable={editable !== 0}
          type="text"
          placeholder="輸入新資料"
          /*value={editInputValue}
          onChange={handleEditInputChange}
          onFocus={handleEditInputFocus}*/
        ></TableItemValueNew>
        <EditButton editable={editable !== 0}>變更</EditButton>
      </TabItem>
      <TabItem editable={editable !== 0}>
        <TableItemTitle>生日</TableItemTitle>
        <TableItemValue>
          {new Date(user.birthday).toLocaleDateString("zh-TW")}
        </TableItemValue>
        <TableItemValueNew
          editable={editable !== 0}
          type="text"
          placeholder="輸入新資料"
          /*value={editInputValue}
          onChange={handleEditInputChange}
          onFocus={handleEditInputFocus}*/
        ></TableItemValueNew>
        <EditButton editable={editable !== 0}>變更</EditButton>
      </TabItem>
      <TabItem editable={editable !== 0}>
        <TableItemTitle>地址</TableItemTitle>
        <TableItemValue>{user.address}</TableItemValue>
        <TableItemValueNew
          editable={editable !== 0}
          type="text"
          placeholder="輸入新資料"
          /*value={editInputValue}
          onChange={handleEditInputChange}
          onFocus={handleEditInputFocus}*/
        ></TableItemValueNew>
        <EditButton editable={editable !== 0}>變更</EditButton>
      </TabItem>
    </TabGroup>
  );
};

const TabGroup = styled.div`
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
  grid-template-columns: 2fr 5fr 3fr 1fr;
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

const EditButton = styled.button`
  width: 50px;
  height: 30px;
  border-radius: 4px;
  background-color: ${(props) =>
    props.editable ? theme.colors.mainPrimary : theme.colors.neutralLightGrey};
  border: 0;
  color: #ffffff;
  margin-left: 10px;
  cursor: ${(props) => (props.editable ? "pointer" : "")};
  :hover {
    background: ${(props) =>
      props.editable ? theme.colors.uiNegative : theme.colors.neutralLightGrey};
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
  margin: 0 0 20px 0;
`;

export default function MemberPage() {
  const [user, setUser] = useState([]);
  const [active, setActive] = useState(0);
  const [editInputValue, setEditInputValue] = useState("");
  const [message, setMessage] = useState();

  useEffect(() => {
    getUser().then((user) => setUser(user.data));
  }, []);

  const handleClick = (e) => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };

  const handleEditInputChange = (e) => {
    setEditInputValue(e.target.value);
  };

  const handleEditInputFocus = () => {
    setMessage(null);
    setEditInputValue("");
  };

  const handleEditUser = () => {
    if (!editInputValue) return;

    setUser((user) => {
      return { ...user, fullname: editInputValue };
    });

    editUser(editInputValue).then((res) => {
      if (res.ok === 1) {
        setMessage(res.message);
        return;
      }
    });
  };

  return (
    <Container>
      <PageTitle>會員專區</PageTitle>
      {message && <Message>{message}</Message>}
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
          <TabContainer
            user={user}
            key={user.id}
            handleEditUser={handleEditUser}
            handleEditInputChange={handleEditInputChange}
            handleEditInputFocus={handleEditInputFocus}
          />
        </Content>
        <Content active={active === 1}>
          <TabGroup>
            <GlobalStyle />
            <Table />
          </TabGroup>
        </Content>
      </>
    </Container>
  );
}

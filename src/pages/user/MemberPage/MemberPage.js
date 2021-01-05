import styled, { createGlobalStyle } from "styled-components";
import { H1, MEDIA_QUERY, Input } from "../../../constants/style";
import { theme } from "../../../constants/theme";
import { Tabs, Tab, Content } from "../../../components/Tab/Tab.js";
import React, { useState, useEffect } from "react";
import { getUser, editUser } from "../../../webAPI/userAPI";
import { getUserOrders } from "../../../webAPI/orderAPI";

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
) => {
  return (
    <TabGroup onSubmit={handleEditUser}>
      <TabItem editable={editable === 0}>
        <TabItemTitle>編號</TabItemTitle>
        <TabItemValue>{user.id}</TabItemValue>
        <TabItemValueNew editable={editable === 0}></TabItemValueNew>
      </TabItem>
      <TabItem editable={editable === 0}>
        <TabItemTitle>帳號</TabItemTitle>
        <TabItemValue>{user.username}</TabItemValue>
        <TabItemValueNew editable={editable === 0}></TabItemValueNew>
      </TabItem>
      <TabItem editable={editable !== 0}>
        <TabItemTitle>全名</TabItemTitle>
        <TabItemValue>{user.fullname}</TabItemValue>
        <TabItemValueNew
          editable={editable !== 0}
          type="text"
          placeholder="輸入新資料（必填）"
          value={fullname}
          onChange={handleEditFullname}
          onFocus={handleEditInputFocus}
        ></TabItemValueNew>
      </TabItem>
      <TabItem editable={editable !== 0}>
        <TabItemTitle>電子郵件</TabItemTitle>
        <TabItemValue>{user.email}</TabItemValue>
        <TabItemValueNew
          editable={editable !== 0}
          type="email"
          placeholder="輸入新資料（必填）"
          value={email}
          onChange={handleEditEmail}
          onFocus={handleEditInputFocus}
        ></TabItemValueNew>
      </TabItem>
      <TabItem editable={editable !== 0}>
        <TabItemTitle>生日</TabItemTitle>
        <TabItemValue>
          {new Date(user.birthday).toLocaleDateString("zh-TW")}
        </TabItemValue>
        <TabItemValueNew
          editable={editable !== 0}
          type="date"
          placeholder="輸入新資料"
          value={birthday}
          onChange={handleEditBirthday}
          onFocus={handleEditInputFocus}
        ></TabItemValueNew>
      </TabItem>
      <TabItem editable={editable !== 0}>
        <TabItemTitle>地址</TabItemTitle>
        <TabItemValue>{user.address}</TabItemValue>
        <TabItemValueNew
          editable={editable !== 0}
          type="text"
          placeholder="輸入新資料"
          value={address}
          onChange={handleEditAddress}
          onFocus={handleEditInputFocus}
        ></TabItemValueNew>
      </TabItem>
      <EditButtonBlock>
        {message && <Message>{message}</Message>}
        <EditButton>變更</EditButton>
      </EditButtonBlock>
    </TabGroup>
  );
};

const TabOrder = ({ order }) => {
  return (
    <TabGroup>
      訂單編號：{order.order_number}
      <br />
      訂購時間：{order.createdAt}
      <br />
      訂購內容：
      <br />
      聯繫電話：{order.buyer_phone}
      <br />
      配送地址：{order.postal_code}
      {order.buyer_address}
      <br />
      訂單狀態：{order.status}
      <br />
    </TabGroup>
  );
};

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

const TabItemTitle = styled.div`
  padding-left: 10px;
`;

const TabItemValue = styled.div``;

const TabItemValueNew = styled(Input)`
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

  // 取得會員個人資料
  useEffect(() => {
    getUser().then((user) => setUser(user.data));
  }, []);

  // 取得會員訂單資料，第二個參數傳 [user]，這樣 user 變了，這個 effect 才會重新執行
  useEffect(() => {
    if (user.id) {
      getUserOrders(user.id).then((order) => setOrder(order.data));
    }
  }, [user]);

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

  const handleEditUser = (e) => {
    e.preventDefault();
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
            birthday={birthday}
            address={address}
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
          {order.map((order) => (
            <TabOrder order={order}></TabOrder>
          ))}
        </Content>
      </>
    </Container>
  );
}

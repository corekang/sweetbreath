import styled from "styled-components";
import { H1, MEDIA_QUERY, Input } from "../../../constants/style";
import { theme } from "../../../constants/theme";
import { Tabs, Tab, Content } from "../../../components/Tab/Tab.js";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
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
};

const TabUserGroup = styled.form`
  width: 100%;
  padding: 30px 0 0 0;
  margin-left: 10px;
  display: column;
`;

const TabUserItem = styled.div`
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

const TabUserItemTitle = styled.div`
  padding-left: 10px;
`;

const TabUserItemValue = styled.div``;

const TabUserItemValueNew = styled(Input)`
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

const Message = styled.div`
  color: ${theme.colors.mainPrimary};
  margin: 0 20px 0 0;
  align-items: center;
`;

const TabOrder = ({ order, key, orderItems }) => {
  const options = {
    // day: "numeric", // (e.g., 1)
    // month: "short", // (e.g., Oct)
    // year: "numeric", // (e.g., 2019)
    hour: "2-digit", // (e.g., 02)
    minute: "2-digit", // (e.g., 02)
    hour12: true, // 24 小時制
    timeZone: "Asia/Taipei", // "America/New_York"
  };
  return (
    <TabOrderGroup>
      <TabOrderItem>
        <TabOrderTop>
          訂單日期｜
          {new Date(order.createdAt).toLocaleDateString("zh-TW", options)}
          <br />
          訂單號碼｜{order.order_number}
          <br />
          訂單狀態｜{order.status}
        </TabOrderTop>
        <TabOrderCenter>
          <TabOrderProductTitle>訂單內容｜</TabOrderProductTitle>
          {orderItems.map((orderItems) => (
            <TabOrderProduct
              orderItems={orderItems}
              key={orderItems.product_id}
              id="orderProduct"
            >
              <TabOrderProductImg>
                <Link to={"/product/" + orderItems.product_id} target="_blank">
                  <img
                    src={orderItems.product_image}
                    alt={orderItems.product_name}
                  />
                </Link>
              </TabOrderProductImg>
              <b>
                <Link to={"/product/" + orderItems.product_id} target="_blank">
                  {orderItems.product_name}
                  {orderItems.product_feature}
                </Link>
              </b>
              &emsp; NT$ {orderItems.product_price}*
              {orderItems.product_quantity}=
              {orderItems.product_price * orderItems.product_quantity}
            </TabOrderProduct>
          ))}
          <TabOrderProductTotal id="totalPrize">
            訂單金額｜<b>NT$ {order.total}</b>
          </TabOrderProductTotal>
        </TabOrderCenter>
        <TabOrderBottom>
          收件姓名｜{order.buyer_fullname}
          <br />
          收件電話｜{order.buyer_phone}
          <br />
          收件地址｜{order.postal_code}
          {order.buyer_address}
        </TabOrderBottom>
      </TabOrderItem>
    </TabOrderGroup>
  );
};

const TabOrderGroup = styled.div`
  width: 100%;
  padding: 30px 0 0 0;
  display: column;
`;

const TabOrderItem = styled.div`
  width: 66%;
  border: 1px solid ${theme.colors.neutralLightGrey};
  padding: 20px 10px;
  line-height: 30px;
  :hover {
    border: 3px solid ${theme.colors.mainPrimary};

    #totalPrize {
      background: ${theme.colors.mainSecondary};
    }
  }
`;

const TabOrderTop = styled.div`
  border-bottom: 3px solid ${theme.colors.neutralPaleGrey};
  margin-bottom: 10px;
  padding-bottom: 10px;
`;

const TabOrderCenter = styled.div`
  border-bottom: 1px solid ${theme.colors.neutralPaleGrey};
  margin-bottom: 10px;
  padding-bottom: 10px;
`;

const TabOrderProductTitle = styled.div`
  margin-bottom: 10px;
`;

const TabOrderProduct = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TabOrderProductImg = styled.div`
  img {
    width: 150px;
    height: 150px;
  }
`;

const TabOrderProductTotal = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TabOrderBottom = styled.div``;

export default function MemberPage() {
  const [user, setUser] = useState([]);
  const [order, setOrder] = useState([]);
  const [active, setActive] = useState(0);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState();
  const { target } = useParams();

  useEffect(() => {
    if (target === "orderlist") {
      setActive(1);
    }
  }, []);

  // 取得會員個人資料
  useEffect(() => {
    getUser().then((user) => setUser(user.data));
  }, []);

  // 取得會員訂單資料，第二個參數傳 [user]，這樣 user 變了，這個 effect 才會重新執行
  useEffect(() => {
    if (user.id) {
      getUserOrders(user.id).then((order) => setOrder(order.data.reverse()));
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
            <TabOrder
              order={order}
              key={order.id}
              orderItems={order.OrderItems}
            ></TabOrder>
          ))}
        </Content>
      </>
    </Container>
  );
}

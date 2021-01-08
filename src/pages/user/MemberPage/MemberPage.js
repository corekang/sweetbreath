import { Container, PageTitle } from "./style";
import { Tabs, Tab, Content } from "../../../components/Tab/Tab.js";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUser, editUser } from "../../../webAPI/userAPI";
import { getUserOrders } from "../../../webAPI/orderAPI";
import TabUser from "./TabUser";
import TabOrder from "./TabOrder";

export default function MemberPage() {
  const [user, setUser] = useState("");
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
    if (user) {
      getUserOrders(user.id).then((order) => {
        if (order.data) {
          setOrder(order.data.reverse());
        }
      });
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
    let newBirthday = "";
    let newAdress = "";
    console.log("birthday:", birthday);
    console.log("address:", address);
    birthday === "" ? (newBirthday = user.birthday) : (newBirthday = birthday);
    address === "" ? (newAdress = user.address) : (newAdress = address);
    // 變更畫面
    setUser((user) => {
      return {
        ...user,
        fullname,
        email,
        birthday: newBirthday,
        address: newAdress,
      };
    });

    setFullname("");
    setEmail("");
    setBirthday("");
    setAddress("");

    // 變更資料庫

    editUser(fullname, email, newBirthday, newAdress).then((res) => {
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
          {user && (
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
          )}
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

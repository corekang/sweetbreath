import { Container, PageTitle } from "./style";
import { Tabs, Tab, Content } from "../../../components/Tab/Tab.js";
import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getUser, editUser } from "../../../webAPI/userAPI";
import { getUserOrders } from "../../../webAPI/orderAPI";
import TabUser from "./TabUser";
import TabOrder from "./TabOrder";
import { LoadingContext } from "../../../contexts";
import Loading from "../../../components/Loading";

export default function MemberPage() {
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const [user, setUser] = useState("");
  const [order, setOrder] = useState([]);
  const [active, setActive] = useState(0);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState();
  const { target } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (target === "orderlist") {
      setActive(1);
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);
    // 讀取 user 資料
    getUser().then((user) => {
      if (!user.data) {
        setIsLoading(false);
        alert("請先登入");
        history.push("/login");
      }
      setUser(user.data);
      // 以 user.data.id 讀取訂單資料
      getUserOrders(user.data.id).then((order) => {
        if (order.data) {
          setOrder(order.data.reverse());
          setIsLoading(false);
        }
        setIsLoading(false);
      });
    });
  }, [setIsLoading]);

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
      {isLoading ? (
        <Loading />
      ) : (
        <>
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
        </>
      )}
    </Container>
  );
}

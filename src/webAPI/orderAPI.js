import { getAuthToken } from "../utils";
const BASE_URL = "/api"; // Domain Name

export const creatOrder = (orderDetail) => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/orders`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: token,
    },
    body: JSON.stringify(orderDetail),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

export const getUserOrders = (id) => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/order/${id}`, {
    // 沒資料：`/order/${id}`
    method: "GET",
    headers: {
      authorization: token, // `Bearer ${token}`
    },
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      return data;
    });
};

// 管理員撈取所有訂單
export const getOrders = () => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/orders`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

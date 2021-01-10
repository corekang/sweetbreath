import { getAuthToken } from "../utils";
const BASE_URL = "https://sweetbreath-backend.herokuapp.com"; // Domain Name

// 建立訂單
export const creatOrder = (orderDetail) => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/orders`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(orderDetail),
  })
    .then((res) => res.json())
    .then((data) => data);
};

// 取得特定買家訂單
export const getUserOrders = (id) => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/order/${id}`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => data);
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

// 編輯訂單
export const editOrder = (editData) => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/order/${editData.orderNumber}`, {
    method: "PUT",
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      is_paid: editData.isPaid,
      is_sent: editData.isSent,
      is_done: editData.isDone,
      is_cancel: editData.isCancel,
      status: "is_done",
    }),
  }).then((res) => res.json());
};

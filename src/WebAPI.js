import { getAuthToken } from "./utils";
const BASE_URL = "/api"; // Domain Name

export const register = (fullname, username, email, password) => {
  return fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      fullname,
      username,
      email,
      password,
    }),
  }).then((res) => res.json());
  // .then((data) => console.log(data));
};

export const login = (username, password) => {
  return fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((res) => res.json());
};

export const getMe = () => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/me`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
  // .then((data) => console.log(data));
};

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

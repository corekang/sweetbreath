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
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    });
};

export const getUser = () => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/user`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    });
};

export const editUser = (fullname, email, birthday, address) => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/user`, {
    method: "PUT",
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      fullname: `${fullname}`,
      email: `${email}`,
      birthday: `${birthday}`,
      address: `${address}`,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    });
};

export const getUserOrders = () => {
  const token = getAuthToken();
  const id = 1;
  return fetch(`/order/${id}`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    });
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

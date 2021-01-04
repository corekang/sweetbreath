import { getAuthToken } from "../utils";
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
    method: "PUT", // PATCH
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

export const getUserOrders = (id) => {
  const token = getAuthToken();
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

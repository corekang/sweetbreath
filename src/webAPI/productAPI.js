import { getAuthToken } from "../utils";
const BASE_URL = "/api"; // Domain Name

// 撈取未刪除分類
export const getCategory = () => {
  return fetch(`${BASE_URL}/category`).then((res) => res.json());
};

// 以分類撈取所有產品 API
export const getCategoryAndProducts = () => {
  return fetch(`${BASE_URL}/category/products`).then((res) => res.json());
};

// 撈取單一商品規格 API
export const getProduct = (productId) => {
  return fetch(`${BASE_URL}/product/${productId}`).then((res) => res.json());
};

// 新增商品
export const addProduct = (
  name,
  image,
  info,
  CategoryId,
  feature,
  price,
  promo_price,
  stock
) => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/product`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name,
      image,
      info,
      CategoryId,
      feature_name: feature,
      price,
      promo_price,
      stock,
    }),
  }).then((res) => res.json());
};

// 編輯商品
export const editProduct = (id, name, image, status, info, categoryId) => {
  const token = getAuthToken();
  return fetch(`/api/product/${id}`, {
    method: "PUT",
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name,
      image,
      status,
      info,
      CategoryId: categoryId,
    }),
  }).then((res) => res.json());
};

// 刪除商品
export const deleteProduct = (productId) => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/product/${productId}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
  }).then((res) => res.json());
};

// 新增規格
export const addFeature = (id, name, price, promo_price, stock) => {
  const token = getAuthToken();
  return fetch(`/api/feature/${id}`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name,
      price,
      promo_price,
      stock,
    }),
  }).then((res) => res.json());
};

// 編輯規格
export const editFeature = (id, name, price, promo_price, stock) => {
  const token = getAuthToken();
  return fetch(`/api/feature/${id}`, {
    method: "PUT",
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name,
      price,
      promo_price,
      stock,
    }),
  }).then((res) => res.json());
};

// 刪除規格
export const deleteFeature = (id) => {
  const token = getAuthToken();
  return fetch(`/api/feature/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
  }).then((res) => res.json());
};

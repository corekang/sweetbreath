const db = require("../models");
const Orders = db.Orders;
const OrderItem = db.OrderItem;
const jwt = require("jsonwebtoken");
const SECRET = "sweetbreathyumyum";

const orderController = {
  createOrder: (req, res) => {
    //驗證基本資料
    const {
      UserId,
      buyer_fullname,
      buyer_email,
      buyer_phone,
      postal_code,
      buyer_adress,
      order_items,
    } = req.body;
    const dataEmpty = [];
    const listToCheck = [
      { payload: UserId, tiltle: "UserId" },
      { payload: buyer_fullname, tiltle: "buyer_fullname" },
      { payload: buyer_email, tiltle: "buyer_email" },
      { payload: buyer_phone, tiltle: "buyer_phone" },
      { payload: postal_code, tiltle: "postal_code" },
      { payload: buyer_adress, tiltle: "buyer_adress" },
      { payload: order_items, tiltle: "order_items" },
    ];
    listToCheck.map((item) => {
      return !item.payload && dataEmpty.push(item.tiltle);
    });
    if (dataEmpty.length > 0) {
      return res.status(404).send({
        ok: 0,
        message: "尚未填寫完成",
        dataEmpty,
      });
    }
    //驗證訂單資料
    for (let i = 0; i < order_items.length; i++) {
      const item = order_items[i];
      if (
        !item.product_feature ||
        !item.product_price ||
        !item.product_quantity
      ) {
        return res.status(404).send({
          ok: 0,
          message: "訂單資料錯誤",
          error_item: item,
        });
      }
    }
    //建立訂單
    const order_number = String(String(Date.now()) + UserId);
    console.log(order_number);
    Orders.create({
      UserId,
      order_number,
      buyer_fullname,
      buyer_email,
      buyer_phone,
      postal_code,
      buyer_adress,
    }).then((res) => {
      const OrderId = res.id;
      order_items.map((order) => {
        const { product_feature, product_price, product_quantity } = order;
        OrderItem.create({
          OrderId,
          order_number,
          product_feature,
          product_price,
          product_quantity,
        });
      });
    });

    return res.status(200).send({
      ok: 1,
      message: "驗證成功",
    });
    //Order.create(req.body);
  },
  getOrderList: (req, res, checkAuthorization) => {},
  getUserOrder: (req, res) => {},
  getOrderItem: (req, res) => {},
  editOrderStatus: (req, res, checkAuthorization) => {},
};

module.exports = orderController;

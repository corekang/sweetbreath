const db = require("../models");
const Orders = db.Orders;
const OrderItem = db.OrderItem;
const jwt = require("jsonwebtoken");
const SECRET = "sweetbreathyumyum";
const judgeObj = (obj, chekList, res, errorMessage) => {
  const keysList = Object.keys(obj);
  const emptyData = chekList.filter((key) => keysList.indexOf(key) < 0);
  if (emptyData.length > 0) {
    return res.status(404).send({
      ok: 0,
      message: errorMessage,
      emptyData,
    });
  }
  return;
};

const orderController = {
  createOrder: (req, res, checkAuthorization) => {
    checkAuthorization();
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
    const checkList = [
      "UserId",
      "buyer_fullname",
      "buyer_email",
      "buyer_phone",
      "postal_code",
      "buyer_adress",
      "order_items",
    ];
    judgeObj(req.body, checkList, res, "運送資料尚未填寫完成");
    //驗證訂單資料
    for (let i = 0; i < order_items.length; i++) {
      const item = order_items[i];
      const checkList = [
        "product_name",
        "product_feature",
        "product_price",
        "product_quantity",
      ];
      judgeObj(item, checkList, res, `第${i + 1}筆訂單資料錯誤`);
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
        const {
          product_name,
          product_feature,
          product_price,
          product_quantity,
        } = order;
        OrderItem.create({
          OrderId,
          order_number,
          product_name,
          product_feature,
          product_price,
          product_quantity,
        });
      });
    });

    return res.status(200).send({
      ok: 1,
      message: "訂單建立成功",
    });
    //Order.create(req.body);
  },
  getOrderList: (req, res, checkAuthorization) => {
    checkAuthorization();
    const token = req.header("Authorization").replace("Bearer ", "");
    jwt.verify(token, SECRET, (err, user) => {
      if (err) {
        return res.status(404).send({
          ok: 0,
          message: "Unauthorized",
        });
      }
      if (!user.is_admin) {
        return res.status(404).send({
          ok: 0,
          message: "Unauthorized",
        });
      }
      Orders.findAll()
        .then((data) => {
          return res.status(200).send({
            ok: 1,
            data,
          });
        })
        .catch((err) => {
          return res.status(200).send({
            ok: 0,
            err,
          });
        });
    });
  },
  getUserOrder: (req, res, checkAuthorization) => {
    checkAuthorization();
    const token = req.header("Authorization").replace("Bearer ", "");
    const { user_id } = req.params;
    jwt.verify(token, SECRET, (err, user) => {
      if (err) {
        return res.status(404).send({
          ok: 0,
          message: "Unauthorized",
        });
      }
      Orders.findAll({
        where: {
          UserId: user_id,
        },
      })
        .then((data) => {
          return res.status(200).send({
            ok: 1,
            data,
          });
        })
        .catch((err) => {
          return res.status(404).send({
            ok: 0,
            err,
          });
        });
    });
  },
  getOrderItem: (req, res) => {
    const { order_number } = req.params;
    Orders.findOne({
      where: {
        order_number,
      },
    })
      .then((data) => {
        return res.status(200).send({
          ok: 1,
          data,
        });
      })
      .catch((err) => {
        return res.status(404).send({
          ok: 0,
          err,
        });
      });
  },
  editOrderStatus: (req, res, checkAuthorization) => {
    checkAuthorization();
    const token = req.header("Authorization").replace("Bearer ", "");
    const { order_number } = req.params;
    const { is_paid, is_sent, is_done, is_cancel, status } = req.body;
    const checkList = ["is_paid", "is_sent", "is_done", "is_cancel", "status"];

    judgeObj(req.body, checkList, res, "狀態不完整");
    jwt.verify(token, SECRET, (err, user) => {
      if (err) {
        return res.status(404).send({
          ok: 0,
          message: "Unauthorized",
        });
      }
      if (!user.is_admin) {
        return res.status(404).send({
          ok: 0,
          message: "Unauthorized",
        });
      }
      Orders.findOne({
        where: {
          order_number,
        },
      })
        .then((order) => {
          order
            .update({
              is_paid,
              is_sent,
              is_done,
              is_cancel,
              status,
            })
            .then((result) => {
              return res.status(200).send({
                ok: 1,
                message: "編輯會員資料完成",
                result,
              });
            })
            .catch((err) => {
              return res.status(200).send({
                ok: 0,
                err,
              });
            });
        })
        .catch((err) => {
          return res.status(200).send({
            ok: 0,
            err,
          });
        });
    });
  },
};

module.exports = orderController;
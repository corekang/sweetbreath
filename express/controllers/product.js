const db = require("../models");
const Product = db.Product;
const User = db.User;
const jwt = require("jsonwebtoken");
const SECRET = "sweetbreathyumyum";

const productController = {
  getAllProducts: (req, res) => {
    const authorization = req.header("Authorization");
    if (!authorization) {
      return res.status(404).send({
        ok: 0,
        message: "Authorized Token Missing!",
      });
    }
    const token = req.header("Authorization").replace("Bearer ", "");
    jwt.verify(token, SECRET, (err, user) => {
      if (err) {
        return res.status(404).send({
          ok: 0,
          message: "Unauthorized",
        });
      }

      User.findOne({
        where: {
          username: user.username,
          is_admin: 1,
        },
      })
        .then((admin) => {
          if (!admin) {
            return res.status(404).send({
              ok: 0,
              message: "Unauthorized",
            });
          }
          Product.findAll()
            .then((products) => {
              return res.status(200).send({
                ok: 1,
                data: products,
              });
            })
            .catch((err) => {
              return res.status(404).send({
                ok: 0,
                message: err,
              });
            });
        })
        .catch((error) => {
          return res.status(404).send({
            ok: 0,
            message: error,
          });
        });
    });
  },

  getProducts: (req, res) => {
    Product.findAll({
      where: {
        is_deleted: false,
        status: 1,
      },
    })
      .then((products) => {
        return res.status(200).send({
          ok: 1,
          data: products,
        });
      })
      .catch((err) => {
        return res.status(404).send({
          ok: 0,
          message: err,
        });
      });
  },

  getProduct: (req, res) => {
    const { id } = req.params;
    if (!id) {
      return res.status(200).send({
        ok: 1,
        message: "請提供正確商品資訊",
      });
    }
    Product.findOne({
      where: {
        id,
      },
    })
      .then((product) => {
        if (!product) {
          return res.status(404).send({
            ok: 0,
            message: "查無此商品資訊",
          });
        }
        return res.status(200).send({
          ok: 1,
          data: product,
        });
      })
      .catch((err) => {
        return res.status(404).send({
          ok: 0,
          message: err,
        });
      });
  },

  addProduct: (req, res) => {
    const {
      CategoryId,
      name,
      image,
      price,
      promo_price,
      info,
      status,
    } = req.body;
    if (!CategoryId || !name || !image || !price) {
      return res.status(404).send({
        ok: 0,
        message: "請完成必填欄位資訊",
      });
    }
    const authorization = req.header("Authorization");
    if (!authorization) {
      return res.status(404).send({
        ok: 0,
        message: "Authorized Token Missing!",
      });
    }
    const token = req.header("Authorization").replace("Bearer ", "");
    jwt.verify(token, SECRET, (err, user) => {
      if (err) {
        return res.status(404).send({
          ok: 0,
          message: "Unauthorized",
        });
      }

      User.findOne({
        where: {
          username: user.username,
          is_admin: 1,
        },
      })
        .then((admin) => {
          if (!admin) {
            return res.status(404).send({
              ok: 0,
              message: "Unauthorized",
            });
          }
          Product.Create({
            CategoryId,
            name,
            image,
            price,
            promo_price,
            info,
            status,
          })
            .then(() => {
              return res.status(200).send({
                ok: 1,
                message: "商品新增完成",
              });
            })
            .catch((productError) => {
              return res.status(404).send({
                ok: 0,
                message: productError,
              });
            });
        })
        .catch((error) => {
          return res.status(404).send({
            ok: 0,
            message: (error, "User error"),
          });
        });
    });
  },
};

module.exports = productController;

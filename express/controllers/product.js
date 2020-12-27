const db = require("../models");
const Product = db.Product;
const Category = db.Category;
const jwt = require("jsonwebtoken");
const SECRET = "sweetbreathyumyum";

const productController = {
  getAllProducts: (req, res, checkAuthorization) => {
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

      Product.findAll({
        where: {
          is_deleted: false,
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
    Product.findOne({
      where: {
        id,
        is_deleted: false,
      },
      include: Category,
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

  addProduct: (req, res, checkAuthorization) => {
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

      Product.create({
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
    });
  },

  editProduct: (req, res, checkAuthorization) => {
    const { id } = req.params;
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
      Product.findOne({
        where: {
          id,
          is_deleted: false,
        },
      }).then((product) => {
        if (!product) {
          return res.status(404).send({
            ok: 0,
            message: "查無此商品資訊",
          });
        }
        product
          .update({
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
              message: "商品編輯完成",
            });
          })
          .catch((productError) => {
            return res.status(404).send({
              ok: 0,
              message: productError,
            });
          });
      });
    });
  },

  deleteProduct: (req, res, checkAuthorization) => {
    const { id } = req.params;
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
      Product.findOne({
        where: {
          id,
        },
      }).then((product) => {
        if (!product) {
          return res.status(404).send({
            ok: 0,
            message: "查無此商品資訊",
          });
        }
        product
          .update({
            is_deleted: true,
          })
          .then(() => {
            return res.status(200).send({
              ok: 1,
              message: "商品刪除完成",
            });
          })
          .catch((productError) => {
            return res.status(404).send({
              ok: 0,
              message: productError,
            });
          });
      });
    });
  },
};

module.exports = productController;

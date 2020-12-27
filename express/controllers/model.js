const db = require("../models");
const Model = db.Model;
const Product = db.Product;
const jwt = require("jsonwebtoken");
const SECRET = "sweetbreathyumyum";

const modelController = {
  getModel: (req, res) => {
    Product.findAll({
      where: {
        is_deleted: false,
      },
    })
      .then((categories) => {
        return res.status(200).send({
          ok: 1,
          data: categories,
        });
      })
      .catch((err) => {
        return res.status(404).send({
          ok: 0,
          message: err,
        });
      });
  },

  addModel: (req, res, checkAuthorization) => {
    const { id } = req.params;
    const { ProductId, name, stock } = req.body;
    if (!name || !ProductId || !stock) {
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

      Model.create({
        ProductId: id,
        name,
        stock,
      })
        .then(() => {
          return res.status(200).send({
            ok: 1,
            message: "規格新增完成",
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

  editModel: (req, res, checkAuthorization) => {
    const { id } = req.params;
    const { name, stock } = req.body;
    if (!name || !stock) {
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

      Model.findOne({
        where: {
          id,
        },
      }).then((model) => {
        if (!model) {
          return res.status(404).send({
            ok: 0,
            message: "查無此分類資訊",
          });
        }
        model
          .update({
            name,
            stock,
          })
          .then(() => {
            return res.status(200).send({
              ok: 1,
              message: "規格編輯完成",
            });
          })
          .catch((error) => {
            return res.status(404).send({
              ok: 0,
              message: error,
            });
          });
      });
    });
  },

  deleteModel: (req, res, checkAuthorization) => {
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
      Model.findOne({
        where: {
          id,
        },
      }).then((model) => {
        if (!model) {
          return res.status(404).send({
            ok: 0,
            message: "查無此規格資訊",
          });
        }
        model
          .update({
            is_deleted: true,
          })
          .then(() => {
            return res.status(200).send({
              ok: 1,
              message: "規格刪除完成",
            });
          })
          .catch((error) => {
            return res.status(404).send({
              ok: 0,
              message: error,
            });
          });
      });
    });
  },
};

module.exports = modelController;

const db = require("../models");
const User = db.User;
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const SECRET = "sweetbreathyumyum";

const userController = {
  register: (req, res) => {
    const { username, password, nickname, email, address, birthday } = req.body;
    if (!username || !password || !nickname || !email) {
      return res.status(404).send({
        ok: 0,
        message: "資料未填寫完成",
      });
    }

    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) {
        return res.status(404).send({
          ok: 0,
          message: err,
        });
      }

      User.create({
        username,
        password: hash,
        nickname,
        email,
        address,
        birthday,
      })
        .then(() => {
          const token = jwt.sign({ username: username }, SECRET);
          return res.status(200).send({
            ok: 1,
            token,
          });
        })
        .catch((err) => {
          if (err.errors[0].message === "username must be unique") {
            return res.status(404).send({
              ok: 0,
              message: "帳號已被註冊",
            });
          }
          return res.status(404).send({
            ok: 0,
            message: err.errors[0].message,
          });
        });
    });
  },

  login: (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(404).send({
        ok: 0,
        message: "資料未填寫完成",
      });
    }

    User.findOne({
      where: {
        username,
      },
    })
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            ok: 0,
            message: "帳號或密碼輸入錯誤",
          });
        }

        if (!user.status) {
          return res.status(404).send({
            ok: 0,
            message: "你被 BAN 惹哭哭",
          });
        }

        bcrypt.compare(password, user.password, (err, result) => {
          if (result) {
            const token = jwt.sign({ username: user.username }, SECRET);
            return res.status(200).send({
              ok: 1,
              token,
            });
          }
          return res.status(404).send({
            ok: 0,
            message: "帳號或密碼輸入錯誤",
          });
        });
      })
      .catch((err) => {
        return res.status(404).send({
          ok: 0,
          message: err,
        });
      });
  },

  getMe: (req, res) => {
    const authorization = req.header("Authorization");
    if (!authorization) {
      return res.status(404).send({
        ok: 0,
        message: "Authorized Token Missing!",
      });
    }
    const token = authorization.replace("Bearer ", "");
    jwt.verify(token, SECRET, (err, payload) => {
      if (err) {
        return res.status(404).send({
          ok: 0,
          message: "Unauthorized",
        });
      }
      return res.status(200).send({
        ok: 1,
        payload,
      });
    });
  },

  getUser: (req, res) => {
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
        },
        attributes: ["username", "nickname", "email", "address", "birthday"],
      })
        .then((result) => {
          return res.status(200).send({
            ok: 1,
            data: result,
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

  editUser: (req, res) => {
    const authorization = req.header("Authorization");
    if (!authorization) {
      return res.status(404).send({
        ok: 0,
        message: "Authorized Token Missing!",
      });
    }
    const token = req.header("Authorization").replace("Bearer ", "");
    const { nickname, email, address, birthday } = req.body;
    if (!nickname || !email) {
      return res.status(404).send({
        ok: 0,
        message: "Nickname 和 Email 為必填欄位",
      });
    }

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
        },
      })
        .then((person) => {
          person.update({
            nickname,
            email,
            address,
            birthday,
          });
        })
        .then((result) => {
          return res.status(200).send({
            ok: 1,
            message: "編輯會員資料完成",
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

  admin: (req, res) => {
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
              data: "Unauthorized",
            });
          }
          User.findAll({
            attributes: [
              "id",
              "username",
              "nickname",
              "email",
              "address",
              "birthday",
              "is_admin",
              "status",
            ],
          })
            .then((users) => {
              return res.status(200).send({
                ok: 1,
                data: users,
              });
            })
            .catch((error) => {
              return res.status(404).send({
                ok: 0,
                message: error,
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

  adminEditUsers: (req, res) => {
    const authorization = req.header("Authorization");
    if (!authorization) {
      return res.status(404).send({
        ok: 0,
        message: "Authorized Token Missing!",
      });
    }
    const token = req.header("Authorization").replace("Bearer ", "");
    const { id, is_admin, status } = req.body;
    if (!id) {
      return res.status(404).send({
        ok: 0,
        message: "請確認編輯對象 id 欄位",
      });
    }
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
          User.findOne({
            where: {
              id,
            },
          })
            .then((person) => {
              person.update({
                is_admin,
                status,
              });
            })
            .then(() => {
              return res.status(200).send({
                ok: 1,
                message: "編輯會員權限完成",
              });
            })
            .catch((editError) => {
              return res.status(404).send({
                ok: 0,
                message: editError,
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
};

module.exports = userController;

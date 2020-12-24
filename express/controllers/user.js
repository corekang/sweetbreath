const db = require("../models");
const User = db.SBP_User;
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
            token: "帳號或密碼輸入錯誤",
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
    const token = req.header("Authorization").replace("Bearer ", "");
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
      })
        .then((result) => {
          return res.status(200).send(result);
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
    const token = req.header("Authorization").replace("Bearer ", "");
    const { nickname, email, address } = req.body;
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
          });
        })
        .then((result) => {
          return res.status(200).send({
            ok: 0,
            message: result,
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

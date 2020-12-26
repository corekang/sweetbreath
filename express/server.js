const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const userControlloer = require("./controllers/user");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

function checkAuthorization(req, res) {
  const authorization = req.header("Authorization");
  if (!authorization) {
    return res.status(404).send({
      ok: 0,
      message: "Authorized Token Missing!",
    });
  }
  return;
}

// user
app.post("/register", userControlloer.register);
app.post("/login", userControlloer.login);
app.get("/me", userControlloer.getMe, checkAuthorization);
app.get("/user", userControlloer.getUser, checkAuthorization);
app.post("/user", userControlloer.editUser, checkAuthorization);
app.get("/users", userControlloer.admin, checkAuthorization);
app.post("/users/:id", userControlloer.adminEditUsers, checkAuthorization);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

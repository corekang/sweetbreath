const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
var proxy = require("http-proxy-middleware");
const userControlloer = require("./controllers/user");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Proxy endpoints
app.use(
  proxy({
    target: "http://localhost:5000",
    changeOrigin: true,
  })
);
//http://localhost:3000/api/register
//http://localhost:5000/api/register
// user
app.post("/sweetbreath/register", userControlloer.register);
app.post("/sweetbreath/login", userControlloer.login);
app.get("/sweetbreath/me", userControlloer.getMe);
app.get("/sweetbreath/user", userControlloer.getUser);
app.post("/sweetbreath/user", userControlloer.editUser);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const userControlloer = require("./controllers/user");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// user
app.post("/register", userControlloer.register);
app.post("/login", userControlloer.login);
app.get("/me", userControlloer.getMe);
app.get("/user", userControlloer.getUser);
app.post("/user", userControlloer.editUser);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

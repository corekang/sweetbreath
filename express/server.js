const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const userControlloer = require("./controllers/user");
const productController = require("./controllers/product");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// user
app.post("/register", userControlloer.register);
app.post("/login", userControlloer.login);
app.get("/me", userControlloer.getMe);
app.get("/user", userControlloer.getUser);
app.post("/user", userControlloer.editUser);
app.get("/users", userControlloer.admin);
app.post("/users", userControlloer.adminEditUsers);

//product
app.get("/all_products", productController.getAllProducts);
app.get("/products", productController.getProducts);
app.get("/product/:id", productController.getProduct);
app.post("/product", productController.addProduct);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

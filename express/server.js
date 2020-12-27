const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const userControlloer = require("./controllers/user");
const productController = require("./controllers/product");

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

//product
app.get("/all_products", productController.getAllProducts, checkAuthorization);
app.get("/products", productController.getProducts);
app.get("/product/:id", productController.getProduct);
app.post("/product", productController.addProduct, checkAuthorization);
app.post("/product/:id", productController.editProduct, checkAuthorization);
app.delete("/product/:id", productController.deleteProduct, checkAuthorization);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

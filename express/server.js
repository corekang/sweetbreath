const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const userControlloer = require("./controllers/user");
const productController = require("./controllers/product");
const categoryController = require("./controllers/category");
const featureController = require("./controllers/feature");

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
app.put("/user", userControlloer.editUser, checkAuthorization);
app.get("/users", userControlloer.admin, checkAuthorization);
app.post("/users/:id", userControlloer.adminEditUsers, checkAuthorization);

//product
app.get("/all_products", productController.getAllProducts, checkAuthorization);
app.get("/products", productController.getProducts);
app.get("/product/:id", productController.getProduct);
app.post("/product", productController.addProduct, checkAuthorization);
app.put("/product/:id", productController.editProduct, checkAuthorization);
app.delete("/product/:id", productController.deleteProduct, checkAuthorization);

// category
app.get("/category", categoryController.getCategory);
app.post("/category", categoryController.addCategory, checkAuthorization);
app.put("/category/:id", categoryController.editCategory, checkAuthorization);
app.delete(
  "/category/:id",
  categoryController.deleteCategory,
  checkAuthorization
);

// Feature
app.post("/feature/:id", featureController.addFeature, checkAuthorization);
app.put("/feature/:id", featureController.editFeature, checkAuthorization);
app.delete("/feature/:id", featureController.deleteFeature, checkAuthorization);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

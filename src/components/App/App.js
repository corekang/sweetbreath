import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
<<<<<<< HEAD
import Navbar from "./Navbar";
import Footer from "./Footer";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProductListPage from "../pages/ProductListPage";
import ProductPage from "../pages/ProductPage";
import NewsPage from "../pages/NewsPage";
import ContactUsPage from "../pages/ContactUsPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import OrderListPage from "../pages/OrderListPage";
import MemberPage from "../pages/MemberPage";
import AdminPage from "../pages/admin/AdminPage";
import AdminProductListPage from "../pages/admin/AdminProductListPage";
import AdminProductPage from "../pages/admin/AdminProductPage";
import AdminMemberPage from "../pages/admin/AdminMemberPage";
import AdminOrderListPage from "../pages/admin/AdminOrderListPage";
import AdminNewsPage from "../pages/admin/AdminNewsPage";
=======
import Navbar from "../Navbar";
import Footer from "../Footer";
import HomePage from "../../pages/HomePage";
import AboutPage from "../../pages/AboutPage";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
import ProductListPage from "../../pages/ProductListPage";
import ProductPage from "../../pages/ProductPage";
import NewsPage from "../../pages/NewsPage";
import ContactUsPage from "../../pages/ContactUsPage";
import CartPage from "../../pages/CartPage";
import CheckoutPage from "../../pages/CheckoutPage";
import OrderListPage from "../../pages/OrderListPage";
import MemberPage from "../../pages/MemberPage";
import AdminPage from "../../pages/admin/AdminPage";
import AdminProductListPage from "../../pages/admin/AdminProductListPage";
import AdminProductPage from "../../pages/admin/AdminProductPage";
import AdminMemberPage from "../../pages/admin/AdminMemberPage";
import AdminOrderListPage from "../../pages/admin/AdminOrderListPage";
import AdminNewsPage from "../../pages/admin/AdminNewsPage";
>>>>>>> f018a17f35848d6e402cc92f9c490b99f2b452fa

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/register">
          <RegisterPage />
        </Route>
        <Route exact path="/products">
          <ProductListPage />
        </Route>
        <Route exact path="/product/:id">
          <ProductPage />
        </Route>
        <Route exact path="/news">
          <NewsPage />
        </Route>
        <Route exact path="/contact">
          <ContactUsPage />
        </Route>
        <Route exact path="/cart">
          <CartPage />
        </Route>
        <Route exact path="/checkout">
          <CheckoutPage />
        </Route>
        <Route exact path="/orders">
          <OrderListPage />
        </Route>
        <Route exact path="/member">
          <MemberPage />
        </Route>
        <Route exact path="/admin/">
          <AdminPage />
        </Route>
        <Route exact path="/admin/products">
          <AdminProductListPage />
        </Route>
        <Route exact path="/admin/product/:id">
          <AdminProductPage />
        </Route>
        <Route exact path="/admin/member">
          <AdminMemberPage />
        </Route>
        <Route exact path="/admin/orders">
          <AdminOrderListPage />
        </Route>
        <Route exact path="/admin/news">
          <AdminNewsPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

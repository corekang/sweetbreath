import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import {
  HomePage,
  AboutPage,
  LoginPage,
  RegisterPage,
  ProductListPage,
  ProductPage,
  NewsPage,
  ContactUsPage,
  CartPage,
  CheckoutPage,
  OrderListPage,
  MemberPage,
  AdminPage,
  AdminProductListPage,
  AdminProductPage,
  AdminMemberPage,
  AdminOrderListPage,
  AdminNewsPage,
} from "../../pages";

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

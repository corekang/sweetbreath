import React, { useState, useEffect } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Up, scrollToAnchor } from "../Anchor";
import Navbar from "../Navbar";
import AdminNavbar from "../AdminNavbar";
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
  MemberPage,
  AdminPage,
  AdminProductListPage,
  AdminProductPage,
  AdminEditProductPage,
  AdminMemberPage,
  AdminOrderListPage,
  AdminCategoryPage,
} from "../../pages";
import { AuthContext, LoadingContext } from "../../contexts";
import { getMe } from "../../webAPI/userAPI";
import { getAuthToken, ScrollToTop } from "../../utils";

function Navbars({ user }) {
  if (!user || !user.is_admin) {
    return <Navbar />;
  }
  return <AdminNavbar />;
}

function App() {
  const [isLoadingGetMe, setLoadingGetMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (getAuthToken()) {
      getMe().then((response) => {
        if (response.ok) {
          setUser(response.data);
          setLoadingGetMe(false);
        }
      });
    } else {
      setLoadingGetMe(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <LoadingContext.Provider
        value={{ isLoading, setIsLoading, isLoadingGetMe }}
      >
        <Router>
          <Navbars user={user} />
          <ScrollToTop />
          <Up onClick={() => scrollToAnchor("top")}>
            <span>⇧</span>
          </Up>
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
            <Route exact path="/member/:target">
              <MemberPage />
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
            <Route exact path="/admin/product">
              <AdminProductPage />
            </Route>
            <Route exact path="/admin/product/:id">
              <AdminEditProductPage />
            </Route>
            <Route path="/admin/category/">
              <AdminCategoryPage />
            </Route>
            <Route exact path="/admin/member">
              <AdminMemberPage />
            </Route>
            <Route exact path="/admin/orders">
              <AdminOrderListPage />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </LoadingContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;

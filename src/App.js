import React, { useEffect } from "react";
import Layout from "./components/Layout/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
// import { useDispatch, useSelector } from "react-redux";
// import { uiActions } from "./store/ui";
// import Modal from "./components/UI/Modal";
// import Register from "./pages/Register/Register";
// import Login from "./pages/Login/Login";
// import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Error from "./pages/NotFound/Error";
import Profile from "./pages/Profile/Profile";
import Product from "./pages/Product/Product";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Cart from "./pages/ShoppingCart/Cart";
import SearchProduct from "./pages/SearchProduct/SearchProduct";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "./actions/product";

const App = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);
  // const dispatch = useDispatch();
  // const { isRegistered, isLoggedIn, isForgotPassword } = useSelector(
  //   (state) => state.ui
  // );
  // const closeRegisteredModal = () => {
  //   dispatch(uiActions.hideRegisteredModal());
  // };
  // const closeLoggedInModal = () => {
  //   dispatch(uiActions.hideLoggedInModal());
  // };
  // const closeForgotPasswordModal = () => {
  //   dispatch(uiActions.hideForgotPasswordModal());
  // };
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        {/* <Route path="/register">
          {isRegistered && (
            <Modal closeModalHandler={closeRegisteredModal}>
              <Register closeModalHandler={closeRegisteredModal} />
            </Modal>
          )}
          <Home />
        </Route>
        <Route path="/login">
          {isLoggedIn && (
            <Modal closeModalHandler={closeLoggedInModal}>
              <Login closeModalHandler={closeLoggedInModal} />
            </Modal>
          )}
          <Home />
        </Route>
        <Route path="/forgot-password">
          {isForgotPassword && (
            <Modal closeModalHandler={closeForgotPasswordModal}>
              <ForgotPassword closeModalHandler={closeForgotPasswordModal} />
            </Modal>
          )}
          <Home />
        </Route> */}

        <Route path="/user/account-setting">
          {user ? <Profile /> : <Home />}
        </Route>
        <Route path="/Ladies/*" exact>
          <Product />
        </Route>
        <Route path="/Men/*" exact>
          <Product />
        </Route>
        <Route path="/Girls/*" exact>
          <Product />
        </Route>
        <Route path="/Boys/*" exact>
          <Product />
        </Route>
        {/* <Route path="/category/:categoryId">
          <Product />
        </Route> */}
        <Route path="/cart" exact>
          <Cart />
        </Route>
        <Route path="/products/search">
          <SearchProduct />
        </Route>
        {/* <Route path="/product/:productId">
          <ProductDetail />
        </Route> */}
        <Route path="/product">
          <ProductDetail />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Layout>
  );
};

// {/* <Route path="/reset-password/:token">
//   {isForgotPassword && (
//     <Modal closeModalHandler={closeForgotPasswordModal}>
//       <ForgotPassword closeModalHandler={closeForgotPasswordModal} />
//     </Modal>
//   )}
//   <Home />
// </Route>; */}
export default App;

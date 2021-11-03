import React, { useEffect } from "react";
import Layout from "./components/Layout/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Error from "./pages/NotFound/Error";
import Profile from "./pages/Profile/Profile";
import Product from "./pages/Product/Product";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Cart from "./pages/ShoppingCart/Cart";
import SearchProduct from "./pages/SearchProduct/SearchProduct";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "./actions/product";
import Loader from "./components/Loader/Loader";

const App = () => {
  const { user } = useSelector((state) => state.auth);
  const { isLoading } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);
  if (isLoading) {
    return (
      <div className="w-screen h-screen grid place-items-center">
        <Loader />
      </div>
    );
  }
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
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
        <Route path="/categories">
          <Product />
        </Route>
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

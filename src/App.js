import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Checkout from "./pages/checkuot/Checkout";
import About from "./pages/aboutUs/About";
import Cart from "./pages/cart/Cart";
import Contact from "./pages/contact/Contact";
import DetailPage from "./pages/detailPage/DetailPage";
import Home from "./pages/home/Home";
import Kids from "./pages/kids/Kids";
import Mens from "./pages/mens/Mens";
import Womens from "./pages/womens/Womens";
import { BrowserRouter as Routers, Routes, Route, useLocation } from "react-router-dom";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import User from "./pages/user-profile/User";
import Return_Policy from "./pages/return-policy/Return_Policy";
import Bot from "./pages/bot/Bot";
import Shop from "./pages/shop/Shop";
import Profile from "./pages/user-profile/Profile";
import Edit from "./pages/user-profile/Edit";
import MyOrder from "./pages/user-profile/MyOrder";
import MyReturn from "./pages/user-profile/MyReturn";
import Layout from "./layout/Layout";
import ProtectedRoute from "./routes/ProtectedRoute";
import { AuthProvider } from "./Context/AuthContext";
import AdminDashboard from "./admin/AdminDashboard";


function App() {
  return (
    <>
    <AuthProvider>
      <Routers>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/mens" element={<Mens />} />
            <Route path="/womens" element={<Womens />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/bot" element={<Bot />} />
            <Route path="/about" element={<About />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/return-policy" element={<Return_Policy />} />
            <Route path="/products/:id" element={<DetailPage />} />

            <Route path="/user-profile/:id" element={<User />}>
              <Route
                path="profile"
                index
                element={<Profile />}
              />
              <Route path="edit" element={<Edit />} />
              <Route path="orders" element={<MyOrder />} />
              <Route path="returns" element={<MyReturn />} />
            </Route>
          </Route>
          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        </Routers>
        </AuthProvider>
    </>
  );
}

export default App;

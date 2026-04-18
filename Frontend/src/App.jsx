import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import "./Responsive.css";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import BuildGift from "./pages/BuildGift/BuildGift";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Checkout from "./pages/Checkout/Checkout";
import Success from "./pages/Success/Success";
import SelectedItems from "./pages/SelectedItems/SelectedItems";
import Wishlist from "./pages/Wishlist/Wishlist";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  const { user } = useContext(AuthContext);

  return (
    <>
      <Navbar />

      <Routes>

        {/* DEFAULT */}
        <Route path="/" element={<Navigate to={user ? "/home" : "/login"} />} />

        {/* AUTH */}
        <Route
          path="/login"
          element={user ? <Navigate to="/home" /> : <Login />}
        />

        <Route path="/signup" element={<Signup />} />

        {/* PROTECTED ROUTES */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/build"
          element={
            <ProtectedRoute>
              <BuildGift />
            </ProtectedRoute>
          }
        />

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />

        <Route
          path="/success"
          element={
            <ProtectedRoute>
              <Success />
            </ProtectedRoute>
          }
        />

        <Route
          path="/selected"
          element={
            <ProtectedRoute>
              <SelectedItems />
            </ProtectedRoute>
          }
        />

        <Route
          path="/wishlist"
          element={
            <ProtectedRoute>
              <Wishlist />
            </ProtectedRoute>
          }
        />

      </Routes>

      <Toaster position="top-center" reverseOrder={false} />

      <Footer />
    </>
  );
}

export default App;
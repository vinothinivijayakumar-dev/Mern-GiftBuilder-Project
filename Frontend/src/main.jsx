import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./context/CartContext";
import "./App.css";
import { WishlistProvider } from "./context/WishlistContext";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
      <WishlistProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </WishlistProvider>
    </CartProvider>
  </BrowserRouter>
);






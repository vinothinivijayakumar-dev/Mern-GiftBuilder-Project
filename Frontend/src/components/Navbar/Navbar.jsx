import { NavLink, useNavigate } from "react-router-dom";
import { FaGift, FaShoppingCart, FaUser, FaHome, FaHeart, FaBars } from "react-icons/fa";
import { useState, useRef, useEffect, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const { wishlist } = useContext(WishlistContext);
  const { cartItems } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (

    <nav className="nav">
      <h2 className="logo">
        <FaGift className="logo-icon" /> GiftBuilder
      </h2>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </div>

      <div className={`links ${menuOpen ? "open" : ""}`}>
        <NavLink to="/home" onClick={() => setMenuOpen(false)}>
          <FaHome /> Home
        </NavLink>

        <NavLink to="/build" onClick={() => setMenuOpen(false)}>
          <FaGift /> Build Gift
        </NavLink>

        <NavLink to="/wishlist" className="wishlist-nav" onClick={() => setMenuOpen(false)}>
          <FaHeart /> Wishlist ({wishlist.length})
        </NavLink>

        <NavLink to="/cart" onClick={() => setMenuOpen(false)}>
          <FaShoppingCart /> Cart ({cartItems.length})
        </NavLink>

        {user ? (
          <div className="profile-dropdown" ref={dropdownRef}>

            <div
              className="profile-trigger"
              onClick={() => setOpen(!open)}
            >
              <FaUser /> {user.name} ▼
            </div>

            {open && (
              <div className="dropdown-menu">

                <div onClick={() => navigate("/cart")}>
                  Cart
                </div>

                <div onClick={() => navigate("/wishlist")}>
                  Wishlist
                </div>

                <div
                  className="logout-item"
                  onClick={() => {
                    logout();
                    setMenuOpen(false);
                    navigate("/login");
                  }}
                >
                  Logout
                </div>

              </div>
            )}

          </div>
        ) : (
          <NavLink to="/login">
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Navbar;



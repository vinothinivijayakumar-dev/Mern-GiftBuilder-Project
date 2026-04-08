import { Link } from "react-router-dom";
import giftImg from "../../assets/images/gift.png";
import { FaGift, FaTruck, FaHeart, FaRegHeart } from "react-icons/fa";
import products from "../../utils/products";
import { CartContext } from "../../context/CartContext";
import { useState, useContext } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { WishlistContext } from "../../context/WishlistContext";
import { useNavigate } from "react-router-dom";

function Home() {
  const { addToCart } = useContext(CartContext);
  const [addedId, setAddedId] = useState(null);
  const { wishlist, toggleWishlist } = useContext(WishlistContext);
  const navigate = useNavigate();

  return (
    <div className="home">

      {/* HERO SECTION */}
      <div className="hero">
        <div className="hero-container">

          <div className="hero-text">
            <h1>
              <FaGift className="hero-icon" /> Create Your Perfect Gift
            </h1>

            <p>
              Create beautiful gift boxes for your loved ones.
            </p>

            <Link to="/build">
              <button className="hero-btn">Start Building</button>
            </Link>
          </div>

          <div className="hero-image">
            <img src={giftImg} alt="Gift Box" />

            <span className="image-label">
              Gift Mood
            </span>
          </div>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="features">

        <h2 className="features-title">Why Choose Us</h2>
        <p className="why-subtitle">
          We deliver thoughtful gifts with quality, love, and fast service always.
        </p>

        <div className="features-container">

          <div className="feature-card">
            <FaGift className="feature-icon" />
            <h3>Custom Gifts</h3>
            <p>Create personalized gift boxes for every special moment.</p>
          </div>

          <div className="feature-card">
            <FaTruck className="feature-icon" />
            <h3>Fast Delivery</h3>
            <p>Get your gifts delivered quickly and safely.</p>
          </div>

          <div className="feature-card">
            <FaHeart className="feature-icon" />
            <h3>Made with Love</h3>
            <p>Every gift is packed with care and love.</p>
          </div>

        </div>
      </div>

      {/* POPULAR PRODUCTS */}
      <div className="products">

        <h2 className="products-title">Popular Gifts</h2>
        <p className="popular-subtitle">
          Explore trending gifts loved by everyone and perfect for every occasion.
        </p>

        <div className="products-container">

          {products.slice(0, 4).map((item) => {

            const isWishlisted = wishlist.find((p) => p.id === item.id);

            return (
              <div className="product-card" key={item.id}>

                <div
                  className="wishlist-icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(item);
                  }}
                >
                  {isWishlisted ? <FaHeart /> : <FaRegHeart />}
                </div>

                <div className="product-img-box">
                  <img src={item.image} alt={item.name} />
                </div>

                <h3>{item.name}</h3>
                <p>₹{item.price}</p>

                <div className="product-actions">

                  <button
                    onClick={() => {
                      if (addedId === item.id) {
                        navigate("/cart");
                      } else {
                        addToCart(item);
                        setAddedId(item.id);
                      }
                    }}
                  >
                    {addedId === item.id ? "Go to Cart" : "Add to Cart"}
                  </button>

                  <button
                    className="buy-now-btn"
                    onClick={() =>
                      navigate("/checkout", {
                        state: { singleItem: { ...item, quantity: 1 } }
                      })
                    }
                  >
                    Buy Now
                  </button>

                </div>

              </div>
            );
          })}

        </div>
      </div>

    </div>
  );
}

export default Home;
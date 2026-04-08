import { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContext";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaGift } from "react-icons/fa";
import empty from "../../assets/images/empty.jpg";

function Wishlist() {

  const { wishlist, toggleWishlist } = useContext(WishlistContext);

  const navigate = useNavigate();

  return (
    <div className="wishlist-page">

      <h2 className="wishlist-title"><FaHeart className="heart-icon" /> Your Wishlist</h2>

      <p className="wishlist-subtitle">
        Save your favorite gifts here and shop them anytime with ease <FaGift className="gift-icon" />
      </p>

      {wishlist.length === 0 ? (
        <div className="empty-box">
          <img src={empty} alt="Empty Wishlist" className="emptywishlist-img" />

          <p className="empty-text">No items in your wishlist yet</p>
          <button
            className="start-shopping-btn"
            onClick={() => navigate("/build")}
          >
            Start Shopping
          </button>
        </div>

      ) : (
        <>
          {wishlist.map((item) => (
            <div key={item.id} className="wishlist-card">

              <div className="wishlist-img">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="wishlist-details">

                <h3>{item.name}</h3>
                <p>₹{item.price}</p>

                <div className="wishlist-actions">

                  <button
                    className="remove-btn"
                    onClick={() => toggleWishlist(item)}
                  >
                    Remove
                  </button>

                  <button
                    className="buy-btn"
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
            </div>
          ))}

          <div className="wishlist-total-box">
            <p className="wishlist-total-text">
              Total: ₹
              {wishlist.reduce(
                (sum, item) => sum + item.price * (item.quantity || 1),
                0
              )}
            </p>
          </div>

        </>
      )
      }
    </div >
  );
}

export default Wishlist;
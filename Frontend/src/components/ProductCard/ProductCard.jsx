import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {

  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [added, setAdded] = useState(false);   // track click

  return (
    <div className="product-card">

      <div className="product-img-box">
        <img src={product.image} alt={product.name} />
      </div>

      <h3>{product.name}</h3>
      <p className="price">₹{product.price}</p>

      <button
        className="add-cart-btn"
        onClick={() => {
          if (added) {
            navigate("/cart");   // go to cart
          } else {
            addToCart(product);  // add item
            setAdded(true);      // change button text
          }
        }}
      >
        {added ? "Go to Cart" : "Add to Cart"}
      </button>

    </div>
  );
}

export default ProductCard;
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import cartImg from "../../assets/images/Cart.png";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Cart() {

    const { cartItems, removeFromCart, updateQty } = useContext(CartContext);

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const navigate = useNavigate();

    return (
        <div className="cart">

            {cartItems.length === 0 ? (
                <div className="empty-cart">

                    <img src={cartImg} alt="Empty Cart" className="empty-img" />

                    <h2>Your cart is empty</h2>

                    <p>
                        Relax and explore gifts to make someone smile today.
                    </p>

                    <Link to="/build">
                        <button className="shop-btn">Start Shopping</button>
                    </Link>

                </div>
            ) : (
                <div className="cart-container">

                    {cartItems.map((item) => (
                        <div className="cart-item" key={item.id}>

                            <div className="cart-left">
                                <img src={item.image} alt={item.name} />

                                <div className="qty-box">

                                    <button className="qty-btn">
                                        Qty: {item.quantity} ▼
                                    </button>

                                    <select
                                        className="qty-dropdown"
                                        value={item.quantity}
                                        onChange={(e) =>
                                            updateQty(item.id, Number(e.target.value))
                                        }
                                    >
                                        {[1, 2, 3, 4, 5].map((num) => (
                                            <option key={num} value={num}>
                                                {num}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                            </div>

                            <div className="cart-details">
                                <h3>{item.name}</h3>

                                <div className="stars">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStarHalfAlt />
                                </div>

                                <p className="price">₹{item.price}</p>

                                <div className="cart-buttons">
                                    <button
                                        className="remove-btn"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        Remove
                                    </button>

                                    <button
                                        className="buy-btn"
                                        onClick={() =>
                                            navigate("/checkout", { state: { singleItem: item } })
                                        }
                                    >
                                        Buy Now
                                    </button>
                                </div>
                            </div>

                        </div>
                    ))}

                    <div className="cart-total">
                        <h3>Total: ₹{total}</h3>
                        <button
                            className="checkout-btn"
                            onClick={() => navigate("/checkout")}
                        >
                            Checkout
                        </button>
                    </div>

                </div>
            )}

        </div>
    );
}

export default Cart;
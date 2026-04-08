import { useLocation, useNavigate } from "react-router-dom";
import { FaGift } from "react-icons/fa";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import emptySelect from "../../assets/images/empty.webp";

function SelectedItems() {

    const location = useLocation();
    const navigate = useNavigate();

    const items = location.state?.selectedItems || [];

    const [selectedList, setSelectedList] = useState(items);

    // UPDATE QTY
    const updateQuantity = (id, qty) => {
        const updated = selectedList.map((item) =>
            item.id === id ? { ...item, quantity: qty } : item
        );
        setSelectedList(updated);
    };

    // REMOVE ITEM
    const removeItem = (id) => {
        const updated = selectedList.filter((item) => item.id !== id);
        setSelectedList(updated);
    };
    const { addToCart } = useContext(CartContext);
    const [addedId, setAddedId] = useState(null);
    const total = selectedList.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="selected-page">

            <h2><FaGift className="hero-icon" /> Your Selected Gift</h2>
            <p className="selected-subtitle">
                Review your chosen gifts and customize them before placing order.
            </p>

            {selectedList.length === 0 ? (

                <div className="selected-empty">

                    <img src={emptySelect} alt="No Items" className="selected-emptyImg" />

                    <p className="selectedEmpty-text">You haven't selected any items yet</p>

                    <button
                        className="start-btn"
                        onClick={() => navigate("/build")}
                    >
                        Start Selecting
                    </button>

                </div>
            ) : (
                <div className="selected-container">

                    {selectedList.map((item) => (
                        <div key={item.id} className="selected-card">

                            <img src={item.image} alt={item.name} className="selected-img" />

                            <div className="selected-details">
                                <h3>{item.name}</h3>
                                <p className="price">₹{item.price}</p>

                                <div className="qty-wrapper">
                                    <span>Qty:</span>

                                    <select
                                        value={item.quantity}
                                        onChange={(e) =>
                                            updateQuantity(item.id, Number(e.target.value))
                                        }
                                    >
                                        {[1, 2, 3, 4, 5].map((q) => (
                                            <option key={q} value={q}>
                                                {q}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="selected-actions">

                                <button
                                    className="remove-btn"
                                    onClick={() => removeItem(item.id)}
                                >
                                    Remove
                                </button>

                                <button
                                    className="add-cart-btn"
                                    onClick={() => {
                                        if (addedId === item.id) {
                                            navigate("/cart");   // Go to cart
                                        } else {
                                            addToCart(item);
                                            setAddedId(item.id); // Change button text
                                        }
                                    }}
                                >
                                    {addedId === item.id ? "Go to Cart" : "Add to Cart"}
                                </button>

                            </div>

                        </div>
                    ))}

                    <div className="total-card">
                        <h3>Total: ₹{total}</h3>

                        <button
                            className="checkout-btn"
                            onClick={() =>
                                navigate("/checkout", { state: { selectedItems: selectedList } })
                            }
                        >
                            Proceed to Checkout
                        </button>
                    </div>

                </div>
            )}

        </div>
    );
}

export default SelectedItems;
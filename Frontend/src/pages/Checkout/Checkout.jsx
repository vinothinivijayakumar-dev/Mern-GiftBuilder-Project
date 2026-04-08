import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";

function Checkout() {

  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const location = useLocation();

  const singleItem = location.state?.singleItem;
  const selectedItems = location.state?.selectedItems;

  const itemsToShow =
    singleItem
      ? [singleItem]                 // Buy Now (single item)
      : selectedItems && selectedItems.length > 0
        ? selectedItems               // Selected page items
        : cartItems;                  // Default cart

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [payment, setPayment] = useState("");
  const [loading, setLoading] = useState(false);

  const [upiId, setUpiId] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loading]);

  const total = itemsToShow.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const handleOrder = () => {

    if (!name || !phone || !address) {
      setError("Please complete your delivery details before placing the order.");
      return;
    }

    const phoneRegex = /^[0-9]{10}$/;

    if (!phoneRegex.test(phone)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!payment) {
      setError("Please select a payment method.");
      return;
    }

    if (payment === "upi") {
      if (!upiId) {
        setError("Please enter your UPI ID.");
        return;
      }
    }

    if (payment === "card") {
      if (!cardNumber || !expiry || !cvv) {
        setError("Please fill all card details.");
        return;
      }
    }

    setError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/success");
    }, 2000);
  };

  return (
    <div className="checkout">

      <div className="checkout-container">

        <div className="checkout-form">

          <h2>Delivery Details</h2>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            maxLength={10}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
          />

          <textarea
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>

          {error && <p className="form-error">{error}</p>}

          <button
            className="place-order-btn"
            onClick={handleOrder}
            disabled={loading}
          >
            {loading ? "Processing..." : "Place Order"}
          </button>

        </div>

        <div className="checkout-summary">

          <h2 className="summary-title">Order Summary</h2>

          {itemsToShow.map((item) => (
            <div key={item.id} className="summary-item">
              <span>{item.name} x {item.quantity}</span>
              <span>₹{item.price * item.quantity}</span>
            </div>
          ))}

          <div className="summary-divider"></div>

          <h3 className="summary-total">Total: ₹{total}</h3>

          <h4 className="payment-title">Payment Method</h4>

          <div className="payment-section">

            <label className="payment-option">
              <input
                type="radio"
                name="payment"
                value="cod"
                onChange={(e) => setPayment(e.target.value)}
              />
              <span>Cash on Delivery</span>
            </label>

            <label className="payment-option">
              <input
                type="radio"
                name="payment"
                value="upi"
                onChange={(e) => setPayment(e.target.value)}
              />
              <span>UPI Payment</span>
            </label>

            <label className="payment-option">
              <input
                type="radio"
                name="payment"
                value="card"
                onChange={(e) => setPayment(e.target.value)}
              />
              <span>Debit / Credit Card</span>
            </label>

            {payment === "upi" && (
              <input
                type="text"
                placeholder="Enter UPI ID"
                className="payment-input"
              />
            )}

            {payment === "card" && (
              <div className="card-fields">

                <input
                  type="text"
                  placeholder="Card Number"
                  className="payment-input"
                  maxLength={16}
                />

                <input
                  type="text"
                  placeholder="Expiry (MM/YY)"
                  className="payment-input"
                />

                <input
                  type="password"
                  placeholder="CVV"
                  className="payment-input"
                  maxLength={3}
                />

              </div>
            )}

          </div>

        </div>

      </div>

      {loading && (
        <div className="fullscreen-loader">
          <div className="loader-content">
            <div className="spinner"></div>
            <p>Processing Payment...</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;
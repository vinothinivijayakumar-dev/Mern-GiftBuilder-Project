import { FaCheckCircle, FaGift } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Success() {

  const navigate = useNavigate();

  return (
    <div className="success">

      <div className="success-card">

        <FaCheckCircle className="success-icon" />

        <h2>Order Placed Successfully!</h2>

        <p className="success-text">
          Thank you for making someone smile today! <FaGift className="gift-icon" />
        </p>

        <button
          className="continue-btn"
          onClick={() => navigate("/build")}
        >
          Continue Shopping
        </button>

      </div>

    </div>
  );
}

export default Success;
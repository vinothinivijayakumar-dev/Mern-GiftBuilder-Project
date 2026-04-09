import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [error] = useState("");

  const [success] = useState("");

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!form.firstName || !form.lastName || !form.email || !form.password || !form.confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    if (!isValidEmail(form.email)) {
      toast.error("Enter a valid email");
      return;
    }

    if (form.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      await axios.post("https://giftbuilder-backend.onrender.com/api/auth/signup", {
        name: form.firstName + " " + form.lastName,
        email: form.email,
        password: form.password
      });

      toast.success("Signup successful");

      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (err) {
      toast.error(err.response?.data || "Signup failed");
    }
  };

  return (
    <div className="auth-container">

      <h2 className="signup-title">Create Account</h2>

      <p className="signup-subtitle">
        Join us and start creating memorable gift experiences today
      </p>

      <div className="auth-card">

        <input
          type="text"
          placeholder="First Name"
          value={form.firstName}
          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
        />

        <input
          type="text"
          placeholder="Last Name"
          value={form.lastName}
          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
        />

        <input
          type="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <div className="signup-password">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Create password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <span className="signup-eye" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <div className="signup-password">
          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm password"
            value={form.confirmPassword}
            onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
          />
          <span className="signup-eye" onClick={() => setShowConfirm(!showConfirm)}>
            {showConfirm ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {error && <p className="auth-error">{error}</p>}
        {success && <p className="auth-success">{success}</p>}

        <button onClick={handleSignup}>
          Sign Up
        </button>

        <p className="auth-switch">
          Already have an account?
          <span onClick={() => navigate("/login")}> Login</span>
        </p>

      </div>

    </div>
  );
}

export default Signup;
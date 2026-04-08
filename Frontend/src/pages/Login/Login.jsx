import { useState, useContext } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FaUser, FaFacebookF, FaApple, FaEye, FaEyeSlash } from "react-icons/fa";
import googleIcon from "../../assets/images/google-icon.png";

function Login() {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);

  const [error] = useState("");

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // HANDLE LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();

    // Empty validation
    if (!form.email || !form.password) {
      toast.error("Please enter email and password");
      return;
    }

    // Email format
    if (!isValidEmail(form.email)) {
      toast.error("Enter a valid email");
      return;
    }

    // Password length
    if (form.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        form
      );

      login(res.data);

      toast.success("Login successful");

      navigate("/home");

    } catch (err) {
      toast.error(err.response?.data || "Invalid email or password");
    }
  };

  return (
    <div className="auth-container">

      <h2 className="auth-title"><FaUser className="login-icon" /> Login</h2>

      <p className="auth-subtitle">
        Access your account to explore and build amazing gift combos
      </p>

      <div className="auth-card">

        <form onSubmit={handleLogin}>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
          />

          <div className="password-box">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
            />

            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {error && <p className="auth-error">{error}</p>}

          <button type="submit">
            Login
          </button>

          <div className="auth-divider">
            <span>OR</span>
          </div>

          <div className="social-login">

            <div className="social-btn google">
              <img src={googleIcon} alt="googleImg" />
            </div>

            <div className="social-btn facebook">
              <FaFacebookF />
            </div>

            <div className="social-btn apple">
              <FaApple />
            </div>

          </div>

        </form>

        <p className="auth-switch">
          Don't have an account?
          <span onClick={() => navigate("/signup")}> Sign up</span>
        </p>

      </div>

    </div>
  );
}

export default Login;
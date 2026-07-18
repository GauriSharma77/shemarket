import "../App.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="login-page">

      <div className="login-box">

        <h1>Welcome Back!</h1>

        <p>
          Sign in to continue shopping or selling.
        </p>

        <label>Email Address</label>

        <input
          type="email"
          placeholder="Enter your email"
        />

        <label>Password</label>

        <input
          type="password"
          placeholder="Enter your password"
        />

        <button
  className="login-btn"
  onClick={() => navigate("/")}
>
  Login
</button>

        <p className="signup-text">
          Don't have an account?
        </p>

        <div className="signup-buttons">

          <button>
            Become a Seller
          </button>

          <button>
            Customer Signup
          </button>

        </div>

      </div>

    </div>
  );
}

export default Login;
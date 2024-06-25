import { useState } from "react";
import "./LoginForm.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="wrapper">
      <form action="">
        <h1>Hello Again!</h1>
        <h3>Welcome Back</h3>
        <div className="input-box">
          <input type="email" placeholder="Email Address" required />
          <MdOutlineEmail className="icon" />
        </div>

        <div className="input-box">
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Password"
            required
          />
          <FaLock className="icon" />
          {passwordVisible ? (
            <FaEyeSlash className="icons toggle-password" onClick={togglePasswordVisibility} />
          ) : (
            <FaEye className="icons toggle-password" onClick={togglePasswordVisibility} />
          )}
        </div>

        <div className="forget">
          <a href="#">Forgot Password?</a>
        </div>

        <button type="submit"> Login </button>



        <div className="register">
          <p>
            Dont have an account?{" "}
            <a onClick={() => navigate('/Register')}>Register now</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

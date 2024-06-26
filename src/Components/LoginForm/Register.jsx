import  { useState } from "react";
import "./LoginForm.css";
import { MdOutlineEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaLock, FaUser, FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="wrapper">
      <form action="">
        <h1>Hello!</h1>
        <h3>Sign Up to Get Started</h3>

        <div className="input-box">
          <input type="text" placeholder="Full Name" required />
          <FaUser className="icon" />
        </div>

        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <FaUser className="icon" />
        </div>

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
          <span onClick={togglePasswordVisibility} className="toggle-password">
            {passwordVisible ? <FaEyeSlash className="icons" /> : <FaEye className="icons" />}
          </span>
        </div>

        <button type="submit" /*onClick={()=>navigate()}*/> Register </button>

        <div className="register">
          <p> 
            Already have an account?{" "}
            <a onClick={() => navigate('/')}>Login now</a>
          </p>
        </div>

      </form>

    </div>
  );
};

export default Register;

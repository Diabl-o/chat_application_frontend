import { useState } from "react";
import "./LoginForm.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const Reset = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
  
    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };
  
  
    return (
      <div className="wrapper">
        <form action="">
          <h1>Reset Password</h1>
          <h3>Forgetting something isn't a mistake ;)</h3>

          <div className="input-box">
          <input type="email" placeholder="Email Address" required />
          <MdOutlineEmail className="icon" />
        </div>
  
          <div className="input-box"> 
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="New Password"
              required
            />

            <FaLock className="icon" />
            {passwordVisible ? (
              <FaEyeSlash className="icons toggle-password" onClick={togglePasswordVisibility} />
            ) : (
              <FaEye className="icons toggle-password" onClick={togglePasswordVisibility} />
            )}
            </div>

            <div className="input-box"> 
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Confirm Password"
              required
            />
            <FaLock className="icon" />
            {passwordVisible ? (
              <FaEyeSlash className="icons toggle-password" onClick={togglePasswordVisibility} />
            ) : (
              <FaEye className="icons toggle-password" onClick={togglePasswordVisibility} />
            )}
            </div>


        
          <button type="submit"> Reset Password </button>
          
        </form>
      </div>
    );
  };
  
  export default Reset;
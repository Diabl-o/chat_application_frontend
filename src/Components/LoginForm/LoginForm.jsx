import { useState } from "react";
import "./LoginForm.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { API } from "../../../../axios";
import toast from "react-hot-toast";

const LoginForm = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    try {
      const response = await API.post("/auth/login", data);
      console.log(response.data);
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
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
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            required
            value={data.email}
            onChange={handleOnChange}
          />
          <MdOutlineEmail className="icon" />
        </div>

        <div className="input-box">
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Password"
            name="password"
            required
            value={data.password}
            onChange={handleOnChange}
          />
          <FaLock className="icon" />
          {passwordVisible ? (
            <FaEyeSlash
              className="icons toggle-password"
              onClick={togglePasswordVisibility}
            />
          ) : (
            <FaEye
              className="icons toggle-password"
              onClick={togglePasswordVisibility}
            />
          )}
        </div>

        <div className="forget">
          <a onClick={() => navigate("/Reset")}>Forgot Password?</a>
        </div>

        <button type="submit" onClick={handleSubmit}>
          {" "}
          Login{" "}
        </button>

        <div className="register">
          <p>
            Dont have an account?{" "}
            <a onClick={() => navigate("/Register")}>Register now</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

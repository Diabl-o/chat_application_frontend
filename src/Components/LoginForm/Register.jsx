import { useState } from "react";
import "./LoginForm.css";
import { MdOutlineEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaLock, FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { API } from "../../../axios";
import toast from "react-hot-toast";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    try {
      const response = await API.post("/auth/register", data);
      console.log(response.data);
      toast.success(response.data.message, {
        duration: 1000,
      });
      setTimeout(() => {
        toast(
          `We have sent an OTP to ${data.email}. Please check your email and verify it.`,
          {
            duration: 6000,
          }
        );
        navigate("/OTPInput", { state: { email: data.email } });
      }, 1000);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
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
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            required
            value={data.name}
            onChange={handleOnChange}
          />
          <FaUser className="icon" />
        </div>

        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            name="username"
            required
            value={data.username}
            onChange={handleOnChange}
          />
          <FaUser className="icon" />
        </div>

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
          <span onClick={togglePasswordVisibility} className="toggle-password">
            {passwordVisible ? (
              <FaEyeSlash className="icons" />
            ) : (
              <FaEye className="icons" />
            )}
          </span>
        </div>

        <button type="submit" onClick={handleSubmit}>
          {" "}
          Register{" "}
        </button>

        <div className="register">
          <p>
            Already have an account?{" "}
            <a onClick={() => navigate("/")}>Login now</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;

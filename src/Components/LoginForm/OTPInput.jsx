import { useState, useRef } from "react";
import "./LoginForm.css";
import "./Reset.css";
import { API } from "../../../axios";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const OTPInput = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);
  const location = useLocation();
  const { email } = location.state;

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    let newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Move to the next input field
    if (element.value !== "" && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleBackspace = (element, index) => {
    if (element.value === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("/auth/otpVerify", {
        otp: otp.join(""),
        email,
      });
      console.log(response.data);
      toast.success(response.data.message);
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="otp-input-wrapper">
      <form onSubmit={handleSubmit} className="otp-form">
        {otp.map((data, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={data}
            onChange={(e) => handleChange(e.target, index)}
            onKeyDown={(e) =>
              e.key === "Backspace" && handleBackspace(e.target, index)
            }
            ref={(el) => (inputRefs.current[index] = el)}
            className="otp-input"
          />
        ))}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default OTPInput;

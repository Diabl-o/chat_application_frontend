import { useState, useRef, useEffect } from "react";
import "./LoginForm.css";
import "./Reset.css";

const OTPInput = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [secondsLeft, setSecondsLeft] = useState(180); // 3 minutes = 180 seconds
  const [resendVisible, setResendVisible] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (secondsLeft > 0) {
      const timerId = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timerId);
    } else {
      setResendVisible(true);
    }
  }, [secondsLeft]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle OTP submission
    alert(`OTP Submitted: ${otp.join("")}`);
  };

  const handleResend = () => {
    setOtp(new Array(6).fill(""));
    setSecondsLeft(180);
    setResendVisible(false);
    inputRefs.current[0].focus(); // Focus the first input field
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div>
      <div className="timer">
        {secondsLeft > 0
          ? `Your OTP will expire in ${formatTime(secondsLeft)}`
          : "Your OTP has expired"}
      </div>
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
      {resendVisible && (
          <button onClick={handleResend} className="resend-button">
            Resend OTP
          </button>
        )}
    </div>
  );
};

export default OTPInput;

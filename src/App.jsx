import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./Components/LoginForm/LoginForm";
import Register from "./Components/LoginForm/Register";
import Reset from "./Components/LoginForm/Reset";
import OTPInput from "./Components/LoginForm/OTPInput";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Reset" element={<Reset />} />
          <Route path="/OTPInput" element={<OTPInput />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

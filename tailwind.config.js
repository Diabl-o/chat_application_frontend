/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./Components/LoginForm/LoginForm.jsx",
    "./Components/LoginForm/Register.jsx",
    "./Components/LoginForm/Reset.jsx",
    "./Components/LoginForm/OTPInput.jsx",
    "./Components/MessageUI/Sidenav.jsx",
    "./Components/MessageUI/Chat.jsx",
    "./src/App.jsx",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


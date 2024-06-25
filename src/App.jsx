import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./Components/LoginForm/LoginForm"
import Register from "./Components/LoginForm/Register"

function App() {
  return (
<>
<BrowserRouter>
<Routes>
  <Route path='/'element={<LoginForm/>}/>
  <Route path='/Register'element={<Register/>}/>
</Routes>

</BrowserRouter>
</>
  );
}

export default App;

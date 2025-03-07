import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from './pages/registration/Registration';
import Login from "./pages/login/Login";
import ForgoutPassword from "./pages/forgoutPassword/ForgoutPassword";
import Information from "./pages/information/Information";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgout_password" element={<ForgoutPassword />} />
        <Route path="/information" element={<Information />} />
      </Routes>
    </Router>
  );
}

export default App;

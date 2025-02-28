import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Registration } from "./pages";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/registration_one" element={<Registration />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

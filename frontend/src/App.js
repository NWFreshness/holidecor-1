import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import House from "./pages/House";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/houses/:houseId" element={<House />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;

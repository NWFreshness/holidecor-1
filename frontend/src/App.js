import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import House from "./pages/House";
import Map from "./pages/Map";
import Blog from "./pages/Blog";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/map" element={<Map />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/houses/:houseId" element={<House />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;

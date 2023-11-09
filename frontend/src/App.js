import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import House from "./pages/House";
import Map from "./pages/Map";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
  const { user } = useAuthContext();
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route
            path="/map"
            element={user ? <Map /> : <Navigate to="/login" />}
          />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/register"
            element={!user ? <Register /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route path="/houses/:houseId" element={<House />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;

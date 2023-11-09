import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

function Header() {
  const { logout } = useLogout();
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const handleClick = () => {
    logout();
    navigate("/");
  };
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">HoliDecor</Link>
      </div>
      <div>
        <Link to="/map">Map</Link>
      </div>
      <nav>
        {user && (
          <div>
            <span>{user.email}</span>
            <button onClick={handleClick}>Log out</button>
          </div>
        )}
        {!user && (
          <div>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </div>
        )}
      </nav>

      <ul></ul>
    </header>
  );
}

export default Header;

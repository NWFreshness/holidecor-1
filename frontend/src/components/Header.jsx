import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">HoliDecor</Link>
      </div>
      <ul></ul>
    </header>
  );
}

export default Header;

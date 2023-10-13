import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header_end">
        <Link to="/checkout" style={{textDecoration: "none", color: "white"}}>
          <span>
            Cart <strong>0</strong>
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Header;

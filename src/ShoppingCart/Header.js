import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header_end">
        <span>
          Cart <strong>0</strong>
        </span>
      </div>
    </div>
  );
}

export default Header;

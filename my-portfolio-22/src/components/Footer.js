import React from "react";
import { Link } from "react-router-dom";
import "../css/footer.css";

export default function Header() {
  return (
    <div className="main-footer">
      <nav>
      <span>
  
          <Link to="/about">About</Link>
        </span>
        <span>
          <Link to="/projects">Projects</Link>
        </span>
      </nav>
    </div>
  );
}

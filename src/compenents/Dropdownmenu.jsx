import { useState } from "react";
import { Link } from "react-router-dom";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      {!isOpen && (
        <button onClick={toggleDropdown} className="dropdown-toggle">
          Menu
        </button>
      )}
      {isOpen && (
        <div className="dropdown-content">
          <Link to="/">home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/ourvision" id="vision">
            Our Vision
          </Link>
          <Link to="/ourtechnology" id="tech">
            Our Technology
          </Link>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;

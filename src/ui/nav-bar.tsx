import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import wurst from "../components/pictures/wurst.png";
import { totalCount } from "../pages/cart";

const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const itemCount = totalCount();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleMouseEnter = () => {
    setScale(1.1);
  };

  const handleMouseLeave = () => {
    setScale(1);
  };

  useEffect(() => {
    let interval: any;

    if (scale > 1) {
      interval = setInterval(() => {
        if (scale < 10) {
          setScale((prevScale) => prevScale * 1.05);
        }
      }, 100);
    }

    return () => clearInterval(interval);
  }, [scale]);

  return (
    <div className="bg-white shadow">
      <div className="container mx-auto flex items-center justify-center p-4">
        <NavLink to="/main" className="mr-auto">
          <img
            src={wurst}
            alt="Wurstlogo"
            className="h-14 transform transition-transform duration-300 ease-in-out"
            style={{
              transform: `scale(${scale})`,
              maxWidth: "100px",
              maxHeight: "100px",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </NavLink>
        <div className="mx-50 mt-1">
          <h1>Souvenirs aus dem Meer und mehr</h1>
        </div>

        <input
          type="text"
          placeholder="Suche..."
          className="mr-4 w-1/4 rounded-md border p-2"
        />

        <div className="relative inline-block">
          <button
            onClick={toggleDropdown}
            className="inline-flex items-center rounded bg-gray-200 px-4 py-2 font-semibold text-gray-700"
          >
            Kategorien
          </button>
          {dropdownOpen && (
            <div className="absolute z-10 mt-1 w-48 rounded-md bg-white shadow-md">
              <NavLink
                to="/clothing"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Kleidung
              </NavLink>
              <NavLink
                to="/electronics"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Elektroschrott
              </NavLink>
              <NavLink
                to="/hoam"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Dahoam
              </NavLink>
              <NavLink
                to="/beautyhealth"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Drogeriezeugs
              </NavLink>
              <NavLink
                to="/gifts"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Giftige Geschenke
              </NavLink>
            </div>
          )}
        </div>

        <div className="mx-4 h-6 border-l"></div>

        <NavLink
          to="/cart"
          className="relative rounded bg-blue-500 px-4 py-2 font-semibold text-white"
        >
          Warenkorb
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
              {itemCount}
            </span>
          )}
        </NavLink>

        <div className="mx-4 h-6 border-l"></div>

        <NavLink
          to="/"
          className="rounded bg-green-500 px-4 py-2 font-semibold text-white"
        >
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;

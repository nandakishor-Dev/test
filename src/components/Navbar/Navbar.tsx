// src/components/Navbar.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useIsScreenBelowLg from "../../hooks/useIsScreenBelowLg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const isBelowLg = useIsScreenBelowLg();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-primary m-0 lg:px-16 px-4 border-black">
      <div className="container  lg:py-6 py-4 mx-auto  flex items-center justify-between">
        <div className="text-2xl font-bold flex items-center gap-2">
          <img
            onClick={() => navigate("/")}
            src="/images/logo.png"
            className="cursor-pointer"
            alt="logo"
          />
          <span className="font-semibold">Furniro</span>
        </div>
        <div className="flex items-center">
          <div className="lg:flex flex-grow items-center gap-8 justify-end mr-6 font-poppins">
            <a
              href="#"
              className="text-black px-4 py-2 text-navLg font-poppins"
            >
              Home
            </a>
            <a
              href="#"
              className="text-black px-4 py-2 text-navLg font-poppins"
            >
              Shop
            </a>

            <a
              href="#"
              className="text-black px-4 py-2 text-navLg font-poppins"
            >
              About
            </a>
            <a
              href="#"
              className="text-black px-4 py-2 text-navLg font-poppins"
            >
              Contact
            </a>
          </div>

          {/*icons section */}

          <div>

            
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

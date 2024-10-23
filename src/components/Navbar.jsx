import React from "react";
import { useRef } from "react";
const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <nav className="navbar bg-black w-full p-6 fixed flex justify-between z-10 bg-opacity-50 backdrop-blur-lg">
        <a href="/">
          <div className="logo text-purple-500 text-3xl font-bold">
            Vikram Portfolio
          </div>
        </a>
        <ul ref={navRef} className="flex gap-10 text-white text-xl">
          <li className="tracking-wider">
            <a
              href="#home"
              className="hover:text-purple-500 font-bold transition duration-200"
            >
              Home
            </a>
          </li>
          <li className="tracking-wider">
            <a
              href="./#about"
              className=" hover:text-purple-500 font-bold transition duration-200"
            >
              About
            </a>
          </li>
          <li className="tracking-wider">
            <a
              href="#projects"
              className="hover:text-purple-500 font-bold transition duration-200"
            >
              Projects
            </a>
          </li>
          <li className="tracking-wider">
            <a
              href="#contact"
              className="hover:text-purple-500 font-bold transition duration-200"
            >
              Contact
            </a>
          </li>

          <button
            
            className="ul-btn ul-close-btn hidden opacity-0 text-white" onClick={showNavbar}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </ul>

        <button className="ul-btn hidden opacity-0" onClick={showNavbar}>
          <i className="text-white fa-solid fa-bars"></i>
        </button>
      </nav>
    </>
  );
};

export default Navbar;

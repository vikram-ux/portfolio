import React from "react";

const Footer = () => {
  return (
    <>
    <footer className="footer-section w-screen h-96 bg-black text-white flex justify-around items-center">
      <div className="footer-left w-1/2">
        <h1 className="footer-heading text-3xl">Vikram Singh</h1>
        <p className="footer-para mt-10 ">
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product
        </p>
      </div>

      <div className="social-section">
        <h1 className="social-heading text-3xl">social</h1>
        <div className="icons text-2xl flex gap-5 mt-7">
          <a href="https://www.linkedin.com/feed/"><i className="fa-brands fa-linkedin"></i></a>
          <a href="/"><i className="fa-brands fa-twitter"></i></a>
          <a href="https://github.com/vikram-ux"><i className="fa-brands fa-github"></i></a>
          <a href="https://www.instagram.com/vick_y_04/?hl=en"><i className="fa-brands fa-instagram"></i></a>
        </div>
       
      </div>
    </footer>

    <hr className="border-t border-gray-300 m-auto" />

    <div className="copyright w-screen h-24 bg-black text-white text-sm flex justify-center items-center">
    © Copyright 2024 . Made by  <span className=" underline pl-1 font-bold text-slate-300"> <a href="/">Vikram Singh</a></span>
    </div>
    </>

    
  );
};

export default Footer;

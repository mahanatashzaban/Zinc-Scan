import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="relative py-8 mt-10 bg-[#F87316] text-gray-200"
    >
      {/* SVG Overlay (optional, currently invisible) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-0 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 100 20"
        fill="none"
      >
        <defs>
          <pattern
            id="footerPattern"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="10" cy="10" r="5" fill="#ffffff" />
          </pattern>
        </defs>
        <rect width="100" height="20" fill="url(#footerPattern)" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col items-center">
        {/* Links */}
        <nav className="mb-6 flex flex-wrap justify-center gap-6 text-gray-100 font-semibold">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/blockchain" className="hover:underline">Blockchain</Link>
          <Link to="/tokens" className="hover:underline">Tokens</Link>
          <Link to="/validators" className="hover:underline">Validators</Link>
          <Link to="/signin" className="hover:underline">Sign In/Up</Link>
          <Link to="/contact" className="hover:underline">Contact Us</Link>
          <Link to="/about" className="hover:underline">About Us</Link>
          <Link to="/wallet" className="hover:underline">Zinc Wallet</Link>
        </nav>

        {/* Powered By text */}
        <div className="text-center text-gray-300 font-bold text-lg mb-1 select-none">
          Powered By ZINC Smart Chain
        </div>

        {/* Subtitle */}
        <div className="text-center text-gray-200 text-sm max-w-xl select-none">
          ZincScan is a Block Explorer and Analytics Platform for ZINC Smart Chain.
        </div>

        {/* Copyright */}
        <span className="mt-6 text-gray-100 text-xs select-none">
          © {new Date().getFullYear()} ZincScan. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;

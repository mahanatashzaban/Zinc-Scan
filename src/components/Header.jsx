import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="relative shadow overflow-hidden" style={{ backgroundColor: "#F87316" }}>
      {/* SVG overlay pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-0 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 100 20"
        fill="none"
      >
        <defs>
          <pattern
            id="headerPattern"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="10" cy="10" r="4" fill="#ffffff" />
            <circle cx="5" cy="5" r="2" fill="#ffffff" />
          </pattern>
        </defs>
        <rect width="100" height="20" fill="url(#headerPattern)" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          to="/blockchain"
          className="text-xl font-bold text-white hover:text-gray-200 transition-colors duration-300"
        >
          ZincScan
        </Link>
        <nav className="space-x-6 hidden md:flex">
          {[
            { to: "/home", label: "Home" },
            { to: "/blockchain", label: "Blockchain" },
            { to: "/tokens", label: "Tokens" },
            { to: "/validators", label: "Validators" },
            { to: "/more", label: "Sign In/Up" },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="text-sm text-white hover:text-gray-200 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;

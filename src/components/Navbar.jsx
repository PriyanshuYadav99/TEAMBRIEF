import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav
      className="absolute z-20 flex justify-between items-center mx-auto"
      style={{
        width: "1240px",
        height: "44px",
        top: "18px",
        left: "50%",
        transform: "translateX(-50%)",
        fontFamily: "Lexend, sans-serif",
      }}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img 
          src="/image/team-brief-logo.png" 
          alt="Team Brief Logo" 
          style={{
            width: "128px",
            height: "40px",
            objectFit: "contain"
          }}
        />
      </Link>

      {/* Nav Links */}
      <div className="flex items-center space-x-8 text-sm font-medium">
        
        <Link to="/how-it-works" className="text-gray-900 hover:text-blue-600 transition">
          How It Works
        </Link>
        <Link to="/features" className="text-gray-900 hover:text-blue-600 transition">
          Features
        </Link>
        <Link to="/pricing" className="text-gray-900 hover:text-blue-600 transition">
          Pricing
        </Link>
        
        <div className="relative flex items-center">
          <button className="text-gray-900 hover:text-blue-600 flex items-center transition">
            Company
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition">
          Log In
        </button>
      </div>
    </nav>
  );
}
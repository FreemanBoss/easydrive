import { useState } from "react";

const NavBarComponent: React.FC = () => {
  const Links = ["Home", "About", "Contact"];
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<null | { name: string; avatar: string }>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Simulate Login
  const handleLogin = () => {
    setUser({
      name: "John Doe",
      avatar:
        "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9",
    });
  };

  // Simulate Logout
  const handleLogout = () => {
    setUser(null);
    setDropdownOpen(false);
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#B9C2C8] shadow-md top-0 sticky w-full z-100">
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        {/* Brand */}
        {/* Logo */}
        <img
          src="/images/logo3.png"
          alt="EasyDrive Logo"
          style={{ width: "170px", objectFit: "contain" }}
        />
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          {Links.map((link) => (
            <a
              key={link}
              href={`/${link.toLowerCase()}`}
              className="#0d5f07 hover:text-gray-300"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Hamburger Menu, Avatar, and Logout */}
        <div className="flex items-center space-x-4 md:hidden">
          {user ? (
            <>
              <img
                src={user.avatar}
                alt="User Profile"
                className="w-10 h-10 rounded-full border-2 border-white object-cover cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              />
              {dropdownOpen && (
                <div className="absolute right-4 top-16 w-48 bg-white rounded-md shadow-lg z-50">
                  <a
                    href="/profile"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Profile
                  </a>
                  <a
                    href="/settings"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Settings
                  </a>
                  <div className="border-t my-2"></div>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </>
          ) : null}
          <button
            className="text-white hover:text-gray-300"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Right Section for Desktop */}
        <div className="hidden md:flex space-x-4 items-center relative">
          {user ? (
            <div className="relative">
              <img
                src={user.avatar}
                alt="User Profile"
                className="w-10 h-10 rounded-full border-2 border-white object-cover cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              />
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                  <a
                    href="/profile"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Profile
                  </a>
                  <a
                    href="/settings"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Settings
                  </a>
                  <div className="border-t my-2"></div>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <button
                className="#0d5f07 border border-white px-4 py-2 rounded hover:bg-white hover:text-[#526877]"
                onClick={handleLogin}
              >
                Sign In
              </button>
              <button className="bg-white text-[#526877] px-4 py-2 rounded hover:bg-gray-200">
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg p-4">
          {Links.map((link) => (
            <a
              key={link}
              href={`/${link.toLowerCase()}`}
              className="block text-gray-800 px-4 py-2 hover:text-[#526877]"
            >
              {link}
            </a>
          ))}
          <div className="border-t mt-2 pt-2 space-y-2">
            {user ? (
              <a
                href="#"
                className="block text-gray-800 px-4 py-2 hover:text-[#526877]"
              >
                Setting
              </a>
            ) : (
              <>
                <button
                  className="w-full text-[#526877] border border-[#526877] px-4 py-2 rounded hover:bg-[#526877] hover:text-white"
                  onClick={handleLogin}
                >
                  Sign In
                </button>
                <button className="w-full bg-[#526877] text-white px-4 py-2 rounded hover:bg-[#526877]/90">
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBarComponent;

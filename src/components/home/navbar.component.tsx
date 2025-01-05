import { useState } from "react";

const NavBarComponent: React.FC = () => {
  const Links = ["Home", "Cars", "About", "Contact"];
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
    <nav className="bg-[#970747] shadow-md top-0 fix w-full z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Brand */}
        <a href="/" className=" cursor-pointer">
        <img
          src="/images/newlogo.png"
          alt="EasyDrive Logo"
          style={{ width: "120px", objectFit: "contain" }}
        />
        </a>
        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-8">
          {Links.map((link) => (
            <a
              key={link}
              href={link === "Home" ? "/" : `/${link.toLowerCase().replace(/\s+/g, '')}`}
              className="text-white hover:text-gray-300"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Hamburger Menu and User Section (Mobile) */}
        <div className="flex items-center space-x-4 md:hidden">
          {user && (
            <img
              src={user.avatar}
              alt="User Profile"
              className="w-10 h-10 rounded-full border-2 border-white object-cover cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />
          )}
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

        {/* User Section (Desktop) */}
        <div className="hidden md:flex space-x-4 items-center">
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
                className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-[#970747]"
                onClick={handleLogin}
              >
                Sign In
              </button>
              <button className="bg-white text-[#970747] px-4 py-2 rounded hover:bg-gray-200">
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
              href={link === "Home" ? "/" : `/${link.toLowerCase().replace(/\s+/g, '')}`}
              className="block text-gray-800 px-4 py-2 hover:text-[#970747]"
            >
              {link}
            </a>
          ))}
          <div className="border-t mt-2 pt-2 space-y-2">
            {user ? (
              <>
                <a
                  href="/profile"
                  className="block text-gray-800 px-4 py-2 hover:bg-gray-100"
                >
                  Profile
                </a>
                <a
                  href="/settings"
                  className="block text-gray-800 px-4 py-2 hover:bg-gray-100"
                >
                  Settings
                </a>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left text-gray-800 px-4 py-2 hover:bg-gray-100"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  className="w-full text-[#970747] border border-[#970747] px-4 py-2 rounded hover:bg-[#970747] hover:text-white"
                  onClick={handleLogin}
                >
                  Sign In
                </button>
                <button className="w-full bg-[#970747] text-white px-4 py-2 rounded hover:bg-[#970747]/90">
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

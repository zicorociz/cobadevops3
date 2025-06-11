import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [theme, setTheme] = useState("light");
  const [isChecked, setIsChecked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Load theme and login state on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const userData = localStorage.getItem("user");

    if (storedTheme) {
      setTheme(storedTheme);
      setIsChecked(storedTheme === "dark");
    }

    try {
      const user = JSON.parse(userData);
      setIsLoggedIn(!!user?.email); // hanya login kalau ada email
    } catch {
      setIsLoggedIn(false); // kalau gagal parse JSON
    }
  }, []);

  // Update body class and save theme
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleCheckbox = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    setIsChecked(newTheme === "dark");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <header className="text-gray-600 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10 p-2 bg-yellow-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3 text-xl">Ecommerce</span>
        </Link>

        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-white">
          <Link to="/" className="mr-5 hover:text-yellow-500">Home</Link>
          <Link to="/ProductPage" className="mr-5 hover:text-yellow-500">Product</Link>
          <Link to="/About" className="mr-5 hover:text-yellow-500">About</Link>
          <Link to="/Context" className="mr-5 hover:text-yellow-500">Context</Link>
        </nav>
        <div className="flex items-center space-x-4">
          {!isLoggedIn ? (
            <>
              <Link
                to="/signup"
                className="inline-flex items-center border border-yellow-500 text-yellow-500 py-2 px-4 rounded text-base hover:bg-yellow-500 hover:text-white transition-colors"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center border border-yellow-500 text-yellow-500 py-2 px-4 rounded text-base hover:bg-yellow-500 hover:text-white transition-colors"
              >
                Login
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="inline-flex items-center text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-700 rounded text-base"
            >
              Logout
            </button>
          )}

          {/* Tambahkan margin agar lebih rapi */}
          <Link
            to="/ShoppingCard"
            className="inline-flex items-center text-white bg-yellow-500 border-0 py-2 px-4 focus:outline-none hover:bg-yellow-700 rounded text-base ml-6"
          >
            Add to Cart
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <button
          onClick={toggleCheckbox}
          className="ml-4 mt-4 md:mt-0 focus:outline-none"
          aria-label="Toggle Dark Mode"
        >
          {theme === "dark" ? (
            <svg
              className="text-yellow-400 fill-current w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {/* Sun icon */}
              <path d="M6.995 12c0 2.761 2.246 5.005 5.005 5.005s5.005-2.244 5.005-5.005c0-2.761-2.246-5.005-5.005-5.005s-5.005 2.244-5.005 5.005zm13.002-.005h2a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2zm-18.002 0h2a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2zm9.001-9.001a1 1 0 0 0-2 0v2a1 1 0 0 0 2 0v-2zm0 18.002a1 1 0 0 0-2 0v2a1 1 0 0 0 2 0v-2zm7.071-14.142a1 1 0 1 0-1.414-1.414l-1.415 1.415a1 1 0 1 0 1.415 1.414l1.414-1.415zm-12.728 12.728a1 1 0 1 0-1.414-1.414l-1.415 1.414a1 1 0 0 0 1.415 1.414l1.414-1.414zm0-12.728l-1.414-1.415a1 1 0 1 0-1.415 1.414l1.415 1.415a1 1 0 1 0 1.414-1.414zm12.728 12.728l-1.414-1.414a1 1 0 1 0-1.415 1.414l1.415 1.414a1 1 0 0 0 1.414-1.414z" />
            </svg>
          ) : (
            <svg
              className="text-yellow-400 fill-current w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {/* Moon icon */}
              <path d="M21.752 15.002A9.718 9.718 0 0 1 12 22C6.486 22 2 17.514 2 12S6.486 2 12 2c.338 0 .672.018 1.002.051a1 1 0 0 1 .213 1.957A7.001 7.001 0 0 0 17 14a6.978 6.978 0 0 0 4.539-1.753 1 1 0 0 1 1.213 1.755z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;

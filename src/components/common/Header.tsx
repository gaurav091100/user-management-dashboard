import { Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-xl font-bold text-gray-900 dark:text-white"
        >
          Dashboard
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            to="/"
            className="text-gray-700 dark:text-gray-50 hover:text-blue-600"
          >
            Users
          </Link>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-black dark:text-white hover:scale-105 transition"
          >
            {theme === "dark" ? (
              <Sun size={20} className="text-gray-50" />
            ) : (
              <Moon size={20} className="text-gray-700" />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;

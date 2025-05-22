import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-[90%] mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-700">
          📚 ShelfLog
        </Link>

        <nav className="flex gap-6 items-center text-gray-700 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-600 underline" : "hover:text-blue-600"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/add-book"
            className={({ isActive }) =>
              isActive ? "text-blue-600 underline" : "hover:text-blue-600"
            }
          >
            Add Book
          </NavLink>
          <NavLink
            to="/books/list"
            className={({ isActive }) =>
              isActive ? "text-blue-600 underline" : "hover:text-blue-600"
            }
          >
            Book List
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;

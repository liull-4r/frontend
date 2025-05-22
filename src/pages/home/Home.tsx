import { Link } from "react-router-dom";
import { FaPlus, FaListUl } from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="bg-white shadow-md rounded-lg p-10 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          📚 Welcome to ShelfLog
        </h1>
        <p className="text-gray-600 mb-8">
          Manage your personal book collection with ease.
        </p>

        <div className="flex flex-col gap-4">
          <Link
            to="/add-book"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
          >
            <FaPlus /> Add New Book
          </Link>

          <Link
            to="/books/list"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-gray-800 hover:bg-gray-900 text-white font-medium transition"
          >
            <FaListUl /> View Book List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

import { Routes, Route } from "react-router-dom";
import AddBook from "./pages/books/add/AddBook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BooksList from "./pages/books/list/BooksList";
import EditBook from "./pages/books/edit/EditBook";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/books/list" element={<BooksList />} />
        <Route path="/book/edit/:bookId" element={<EditBook />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;

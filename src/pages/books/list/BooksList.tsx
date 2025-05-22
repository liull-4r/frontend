import Table from "../../../components/table/Table";
import { useNavigate } from "react-router-dom";
import { useDeleteBook, useGetBooks } from "../../../services/bookApi";
import { useBookFilterStore } from "../../../store/useBookFilterStore";
import Swal from "sweetalert2";

const BookList = () => {
  const navigate = useNavigate();
  const { data: books = [], isLoading } = useGetBooks();
  const { mutate: deleteBook } = useDeleteBook();
  const { setCategory, setStatus, category, status } = useBookFilterStore();
  const handleDelete = (book_id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This book will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteBook(book_id);
        Swal.fire("Deleted!", "The book has been removed.", "success");
      }
    });
  };

  const columns = [
    { key: "title", label: "Title" },
    { key: "author", label: "Author" },
    { key: "category", label: "Category" },
    { key: "status", label: "Status" },
    { key: "notes", label: "Notes" },
    {
      key: "actions",
      label: "Actions",
      render: (row: any) => (
        <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
          <button
            className="text-blue-600 cursor-pointer"
            onClick={() =>
              navigate(`/book/edit/${row.book_id}`, { state: row })
            }
          >
            Edit
          </button>
          <button
            className="text-red-600 cursor-pointer ml-2"
            onClick={() => handleDelete(row.book_id)}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-4 space-y-6">
      <div className="flex gap-4 flex-wrap items-center">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          <option value="">All Categories</option>
          <option value="fiction">Fiction</option>
          <option value="non-fiction">Non-Fiction</option>
          <option value="tech">Tech</option>
        </select>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          <option value="">All Status</option>
          <option value="to-read">To Read</option>
          <option value="reading">Reading</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <Table
        title="Books"
        data={books}
        columns={columns}
        loading={isLoading}
        emptyMessage="No books found"
        onRowClick={(row) =>
          navigate(`/book/edit/${row.book_id}`, { state: row })
        }
      />
    </div>
  );
};

export default BookList;

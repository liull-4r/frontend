import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import type { Book, BookFormType } from "../types/Book";
import { useBookFilterStore } from "../store/useBookFilterStore";
import Swal from "sweetalert2";
const API = import.meta.env.VITE_API_URL;
export const createBookApi = async (data: BookFormType): Promise<Book> => {
  const res = await axios.post(`${API}/create-book`, data);
  return res.data.data;
};


export const getBooksApi = async (
  filters?: Partial<Pick<Book, "category" | "status">>
): Promise<Book[]> => {
  // Remove any key where the value is falsy (e.g., "", null, undefined)
  const cleanedFilters: Record<string, string> = {};
  if (filters) {
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        cleanedFilters[key] = value;
      }
    });
  }

  const query = new URLSearchParams(cleanedFilters).toString();
  const res = await axios.get(`${API}/books${query ? `?${query}` : ""}`);
  return res.data.data;
};

export const updateBookApi = async ({
  book_id,
  data,
}: {
  book_id: string;
  data: BookFormType;
}): Promise<Book> => {
  const res = await axios.put(`${API}/books/${book_id}`, data);
  return res.data.data;
};
export const deleteBookApi = async (book_id: string) => {
  const res = await axios.delete(`${API}/books/${book_id}`);
  return res.data.data;
};

export const useCreateBook = () => {
  const queryClient = useQueryClient();
  let toastId: any;

  return useMutation({
    mutationFn: createBookApi,
    onMutate: () => {
      toastId = toast.loading("Creating book...");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
      toast.update(toastId, {
        render: "✅ Book created!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
        closeOnClick: true,
      });
    },

    onError: (error: any) => {
      toast.update(toastId, {
        render: error?.response?.data?.error || "Failed to create book",
        type: "error",
        isLoading: false,
        autoClose: 3000,
        closeOnClick: true,
      });
    },
  });
};

export const useGetBooks = () => {
  const { category, status } = useBookFilterStore();
  return useQuery({
    queryKey: ["books", category, status],
    queryFn: () =>
      getBooksApi({
        category,
        status: status as "to-read" | "reading" | "completed" | undefined,
      }),
  });
};

export const useDeleteBook = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteBookApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },

    onError: (error: any) => {
      Swal.fire(
        error?.response?.data?.error || "Error",
        "Something went wrong while deleting",
        "error"
      );
    },
  });
};
export const useUpdateBook = () => {
  const queryClient = useQueryClient();
  let toastId: any;
  return useMutation({
    mutationFn: updateBookApi,
    onMutate: () => {
      toastId = toast.loading("Updating book...");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
      toast.update(toastId, {
        render: "Book updated!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
        closeOnClick: true,
      });
    },

    onError: (error: any) => {
      toast.update(toastId, {
        render: error?.response?.data?.error || "Failed to update book",
        type: "error",
        isLoading: false,
        autoClose: 3000,
        closeOnClick: true,
      });
    },
  });
};

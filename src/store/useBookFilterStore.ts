import { create } from "zustand";
import type { BookFilterState } from "../types/Book";

export const useBookFilterStore = create<BookFilterState>((set) => ({
  category: "",
  status: "",
  setCategory: (category) => set({ category }),
  setStatus: (status) => set({ status }),
  resetFilters: () => set({ category: "", status: "" }),
}));

export interface Book {
  book_id: string;
  title: string;
  author: string;
  category: string;
  status: "to-read" | "reading" | "completed";
  notes?: string;
  created_at?: string;
  updated_at?: string;
}

export interface BookFormType {
  title: string;
  author: string;
  category: string;
  status: "to-read" | "reading" | "completed";
  notes?: string;
}


export interface BookFilterState {
  category: string;
  status: string;
  setCategory: (category: string) => void;
  setStatus: (status: string) => void;
  resetFilters: () => void;
}

# 📚 ShelfLog — Frontend

ShelfLog is a personal book logging app that allows users to track their reading journey — including books they want to read, are currently reading, or have completed.

This is the **frontend** of the app, built using a modern, scalable tech stack focused on developer productivity and performance.

---

## 🚀 Tech Stack

- ⚛️ **React + TypeScript** – Strongly typed UI development
- 🗂 **Zustand** – Lightweight state management for filters
- ⚡️ **React Query** – Data fetching, caching, and syncing
- 🧾 **React Hook Form + Zod** – Form validation and control
- 🎨 **Tailwind CSS** – Utility-first styling
- 🔔 **Toastify & SweetAlert2** – Elegant user notifications

---

## 🔧 Features

- ✅ Add a book with title, author, category, status, and notes
- ✏️ Edit/update existing book entries
- ❌ Delete books with confirmation prompts
- 🔍 Filter books by category and reading status
- 📋 Responsive table
- 🔄 Real-time UI sync with backend after add/update/delete

---

## ⚙️ Setup & Run

### 1. Install dependencies

```bash
git clone https://github.com/liull-4r/frontend.git
cd frontend
npm install
```

### 2. Set environment


---
## 📄 Environment Variable

Create a `.env` file in the root of the `frontend` directory with:
---
VITE_API_URL=[http://localhost:3000/api/v1](http://localhost:3000/api/v1)

### 3. Run the app

npm run dev

The app will start at: [http://localhost:517](http://localhost:5174)3 (or the port assigned by Vite)


## 🧠 Implementation Approach

ShelfLog’s frontend is built with simplicity, modularity, and developer efficiency in mind.

* **Zustand** is used for local UI state such as filters without boilerplate.
* **React Query** manages API calls with built-in caching, loading states, and auto-refresh.
* **React Hook Form + Zod** ensures clean form validation and user-friendly error handling.
* **SweetAlert2** provides confirmation modals for destructive actions like deletes.
* **Toastify** gives real-time feedback on success or failure.

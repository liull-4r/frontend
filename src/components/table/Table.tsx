import React from "react";

interface Column {
  key: string;
  label: string;
  render?: (row: any) => React.ReactNode;
}

interface TableProps {
  data: any[];
  columns: Column[];
  title?: string;
  emptyMessage?: string;
  loading?: boolean;
  onRowClick?: (row: any) => void;
}
const Table = ({
  data,
  columns,
  title,
  emptyMessage = "No data found.",
  loading = false,
  onRowClick,
}: TableProps) => {
  if (loading) return <p>Loading...</p>;
  if (!data || data.length === 0) return <p>{emptyMessage}</p>;

  return (
    <div className="w-full overflow-x-auto bg-white shadow rounded p-4">
      {title && <h2 className="text-lg font-semibold mb-4">{title}</h2>}
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100">
            {columns.map((col) => (
              <th key={col.key} className="p-3 border-b">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={row.book_id || idx}
              className="group transition"
              onClick={() => onRowClick?.(row)}
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className="p-3 border-b"
                  onClick={(e) => e.stopPropagation()}
                >
                  {col.render ? col.render(row) : row[col.key] ?? "—"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

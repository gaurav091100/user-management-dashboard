import React from "react";

interface Column<T> {
  key: keyof T | string;
  title: string;
  render?: (row: T) => React.ReactNode;
}

interface TableProps<T> {
  columns?: Column<T>[];
  data?: T[];
  emptyMessage?: string;
  loading?: boolean;
}

const Table = <T extends { id?: string | number }>({
  columns = [],
  data = [],
  emptyMessage = "No data found",
  loading = false,
}: TableProps<T>) => {
  return (
    <div className="w-full overflow-x-auto rounded-xl border bg-white min-h-[400px]">
      <table className="min-w-full border-collapse">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((column) => (
              <th
                key={String(column.key)}
                className="p-4 text-left text-sm font-semibold text-gray-700 whitespace-nowrap"
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {loading ? (
            [...Array(10)].map((_, index) => (
              <tr key={index} className="border-t">
                {columns.map((column) => (
                  <td key={String(column.key)} className="p-4">
                    <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
                  </td>
                ))}
              </tr>
            ))
          ) : data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr
                key={row.id || rowIndex}
                className="border-t hover:bg-gray-50 transition"
              >
                {columns.map((column) => (
                  <td
                    key={String(column.key)}
                    className="p-4 text-sm text-gray-700 whitespace-nowrap"
                  >
                    {column.render
                      ? column.render(row)
                      : String(row[column.key as keyof T] ?? "")}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="p-10 text-center text-gray-500"
              >
                {emptyMessage}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
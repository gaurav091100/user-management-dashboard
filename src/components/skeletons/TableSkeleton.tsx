import type { Column } from "../ui/Table";

interface TableSkeletonProps<T> {
  columns: Column<T>[];
}

const TableSkeleton = <T,>({
  columns,
}: TableSkeletonProps<T>) => {
  return [...Array(10)].map((_, index) => (
    <tr key={index} className="border-t dark:border-t-gray-500">
      {columns.map((column) => (
        <td key={String(column.key)} className="p-2 lg:p-4">
          <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
        </td>
      ))}
    </tr>
  ));
};

export default TableSkeleton;

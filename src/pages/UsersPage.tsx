import { useState } from "react";
import ConfirmDialog from "../components/ui/ConfirmDialog";
import Pagination from "../components/ui/Pagination";
import UserFilters from "../components/users/UserFilters";
import UserTable from "../components/users/UserTable";
import useUsers from "../hooks/useUsers";
import type { User } from "../types/user";

const UsersPage = () => {
  const [deleteUserId, setDeleteUserId] = useState<number | null>(null);
  const {
    users,
    loading,
    error,
    search,
    gender,
    role,
    sort,
    setGender,
    setRole,
    setSort,
    handleSearch,
    isDeleting,
    handleDelete,
    page,
    setPage,
    totalPages,
  } = useUsers();

  const handleEdit = (user: User) => {
    console.log("Edit user:", user);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              User Management Dashboard
            </h1>

            <p className="text-gray-600 mt-1">
              Manage users, roles, and information
            </p>
          </div>

          <button className="bg-black text-white px-5 py-2 rounded-lg hover:opacity-90">
            Add User
          </button>
        </div>

        <UserFilters
          search={search}
          gender={gender}
          role={role}
          sort={sort}
          onSearch={handleSearch}
          onGenderChange={setGender}
          onRoleChange={setRole}
          onSortChange={setSort}
        />

        {error && (
          <div className="bg-red-100 text-red-600 border border-red-200 rounded-xl p-4 mb-4">
            {error}
          </div>
        )}

        {!error && (
          <UserTable
            loading={loading}
            users={users}
            onEdit={handleEdit}
            onDelete={(id) => setDeleteUserId(id)}
          />
        )}

        <div className="flex items-center justify-center mt-6">
          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </div>
      </div>
      <ConfirmDialog
        open={deleteUserId !== null}
        title="Delete User"
        message="Are you sure you want to delete this user?"
        confirmText="Delete"
        cancelText="Cancel"
        loading={isDeleting}
        onCancel={() => setDeleteUserId(null)}
        onConfirm={async () => {
          if (deleteUserId) {
            await handleDelete(deleteUserId);
            setDeleteUserId(null);
          }
        }}
      />
    </div>
  );
};

export default UsersPage;

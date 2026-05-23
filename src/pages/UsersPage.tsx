import { useState } from "react";
import ConfirmDialog from "../components/ui/ConfirmDialog";
import Pagination from "../components/ui/Pagination";
import UserFilters from "../components/users/UserFilters";
import UserTable from "../components/users/UserTable";
import useUsers from "../hooks/useUsers";
import type { User } from "../types/user";
import type { UserFormValues } from "../types/user";
import UserFormModal from "../components/users/UserFormModal";
import { mapUserToFormValues } from "../utils/userMapper";

const UsersPage = () => {
  const [deleteUserId, setDeleteUserId] = useState<number | null>(null);
  const [editUserId, setEditUserId] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const [editUser, setEditUser] = useState<UserFormValues | undefined>();
  const [mode, setMode] = useState<"create" | "edit">("create");
  const {
    users,
    isFetching,
    error,
    search,
    gender,
    role,
    sort,
    setGender,
    setRole,
    setSort,
    handleSearch,
    isAdding,
    handleCreateUser,
    isUpdating,
    handleUpdateUser,
    isDeleting,
    handleDelete,
    page,
    setPage,
    totalPages,
  } = useUsers();

  const handleEdit = (user: User) => {
    if (user) {
      setEditUserId(user.id);
      setEditUser(mapUserToFormValues(user));
      setMode("edit");
      setOpen(true);
    }
  };


  const handleUserFormSubmit = async (data: UserFormValues) => {
    if (mode === "create") {
      await handleCreateUser(data);
    } else {
      await handleUpdateUser(editUserId as number, data);
      setEditUserId(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
              User Management
            </h1>

            <p className="text-gray-600 dark:text-gray-50  mt-1 text-sm lg:text-md">
              Manage users, roles, and information
            </p>
          </div>

          <button
            onClick={() => {
              setMode("create");
              setEditUser(undefined);
              setOpen(true);
            }}
            className="bg-black dark:bg-white text-white dark:text-black px-5 py-2 rounded-lg hover:opacity-90 text-xs lg:text-sm"
          >
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
            loading={isFetching}
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
      <UserFormModal
        open={open}
        mode={mode}
        isSubmitting={mode === "create" ? isAdding : isUpdating}
        initialData={editUser}
        onClose={() => {
          setOpen(false);
          setEditUserId(null);
          setEditUser(undefined);
        }}
        onSubmit={(data:UserFormValues) => handleUserFormSubmit(data)}
      />
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

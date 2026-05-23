import React from "react";
import { Link } from "react-router-dom";
import Table from "../ui/Table";
import Chip from "../ui/Chip";
import type { User } from "../../types/user";
import { getRoleChipVariant } from "../../utils/getRoleChipVariant";


interface UserTableProps {
  loading: boolean;
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}



const UserTable: React.FC<UserTableProps> = ({
  loading,
  users,
  onEdit,
  onDelete,
}) => {
  const columns = [
    {
      key: "user",
      title: "User",
      render: (user: User) => (
        <div className="flex items-center gap-3">
          <img
            src={user.image}
            alt={user.firstName}
            className="w-10 h-10 rounded-full"
          />
          <span>
            {user.firstName} {user.lastName}
          </span>
        </div>
      ),
    },
    {
      key: "email",
      title: "Email",
    },
    {
      key: "phone",
      title: "Phone",
    },
    {
      key: "company",
      title: "Company",
      render: (user: User) => user.company?.name || "-",
    },
    {
      key: "role",
      title: "Role",
      render: (user: User) => (
        <Chip
          label={user.role}
          variant={getRoleChipVariant(user.role)}
        />
      ),
    },
    {
      key: "actions",
      title: "Actions",
      render: (user: User) => (
        <div className="flex gap-2">
          <Link
            to={`/users/${user.id}`}
            className="px-3 py-1 border border-blue-800 text-blue-800 rounded-full"
          >
            View
          </Link>
          <button
            onClick={() => onEdit(user)}
            className="px-3 py-1 border border-gray-800 text-gray-800 rounded-full"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(user.id)}
            className="px-3 py-1 bg-red-600 text-white rounded-full"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return <Table<User> loading={loading} columns={columns} data={users} />;
};

export default UserTable;
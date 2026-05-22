import React from "react";
import { Link } from "react-router-dom";
import Table from "../ui/Table";
import Chip, { type ChipVariant } from "../ui/Chip";
import type { User } from "../../types/user";


interface UserTableProps {
  loading: boolean;
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}

const getChipVariant = (role: string): ChipVariant => {
  switch (role?.toLowerCase()) {
    case "admin":
      return "success";
      
    case "moderator":
      return "primary";

    default:
      return "default";
  }
};

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
          variant={getChipVariant(user.role)}
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
            className="px-3 py-1 rounded bg-blue-500 text-white"
          >
            View
          </Link>
          <button
            onClick={() => onEdit(user)}
            className="px-3 py-1 rounded bg-yellow-500 text-white"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(user.id)}
            className="px-3 py-1 rounded bg-red-500 text-white"
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
/* eslint-disable react-hooks/set-state-in-effect */
import { mapUserPayload } from '../utils/userMapper';
import { useEffect, useState } from "react";
import { addUser, deleteUser, getUsers, updateUser } from "../api/userApi";
import type { User, UsersResponse } from "../types/user";
import axios from "axios";
import type { UserFormValues } from "../types/user";

const LIMIT = 10;

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [gender, setGender] = useState<string>("all");
  const [role, setRole] = useState<string>("all");
  const [sort, setSort] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);

  const skip = (page - 1) * LIMIT;

  const fetchUsers = async () => {
    try {
      setIsFetching(true);
      setError("");

      let sortBy = "";
      let order: "asc" | "desc" = "asc";

      if (sort === "name-asc") {
        sortBy = "firstName";
        order = "asc";
      }

      if (sort === "name-desc") {
        sortBy = "firstName";
        order = "desc";
      }

      if (sort === "age-asc") {
        sortBy = "age";
        order = "asc";
      }

      if (sort === "age-desc") {
        sortBy = "age";
        order = "desc";
      }

      const response:UsersResponse = await getUsers({
        limit: LIMIT,
        skip,
        search,
        gender,
        role,
        sortBy,
        order,
      });

      setUsers(response.users);
      setTotal(response.total);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(
          error.response?.data?.message ||
            error.message ||
            "Failed to fetch users",
        );
      } else {
        setError("Unexpected error occurred");
      }
    } finally {
      setIsFetching(false);
    }
  };

  const handleSearch = (value: string) => {
    setPage(1);
    setSearch(value);
  };

  const handleCreateUser = async (formData: UserFormValues) => {
  try {
    setIsAdding(true);
    const payload = mapUserPayload(formData);
    const newUser = await addUser(payload);

  setUsers((prev) => [newUser, ...prev]);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert(
        error.response?.data?.message ||
          error.message ||
          "Failed to add user"
      );
    } else {
      alert("Unexpected error occurred");
    }
  } finally {
    setIsAdding(false);
  }
};

const handleUpdateUser = async (id: number, formData: UserFormValues) => {
  try {
    setIsUpdating(true);
    const payload = mapUserPayload(formData);
    const updatedUser = await updateUser(id, payload);

    setUsers((prev) =>
      prev.map((user) => (user.id === id ? updatedUser : user)),
    );
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert(
        error.response?.data?.message ||
          error.message ||
          "Failed to update user"
      );
    } else {
      alert("Unexpected error occurred");
    }
  } finally {
    setIsUpdating(false);
  }
};

  const handleDelete = async (id: number) => {
    try {
      setIsDeleting(true);
      await deleteUser(id);

      setUsers((prev) => prev.filter((user) => user.id !== id));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(
          error.response?.data?.message ||
            error.message ||
            "Failed to delete user",
        );
      } else {
        alert("Unexpected error occurred");
      }
    } finally{
      setIsDeleting(false)
    }
  };

  useEffect(() => {
    fetchUsers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, search, gender, role, sort]);

  return {
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
    totalPages: Math.ceil(total / LIMIT),
  };
};

export default useUsers;

/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { deleteUser, getUsers } from "../api/userApi";
import type { User, UsersResponse } from "../types/user";
import axios from "axios";

const LIMIT = 10;

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
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
      setLoading(true);
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
      setLoading(false);
    }
  };

  const handleSearch = (value: string) => {
    setPage(1);
    setSearch(value);
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
    totalPages: Math.ceil(total / LIMIT),
  };
};

export default useUsers;

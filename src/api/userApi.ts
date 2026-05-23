import axios from "axios";
import type { UserPayload } from "../types/user";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

type GetUsersParams = {
  limit?: number;
  skip?: number;
  search?: string;
  role?: string;
  gender?: string;
  sortBy?: string;
  order?: "asc" | "desc";
};

export const getUsers = async ({
  limit = 10,
  skip = 0,
  search = "",
  role = "",
  gender = "",
  sortBy = "",
  order = "asc",
}: GetUsersParams) => {
  let endpoint = "/users";

  // Search endpoint
  if (search.trim()) {
    endpoint = `/users/search?q=${search}`;
  }

  // Filter by role endpoint
  if (role !== "all" && role) {
    endpoint = `/users/filter?key=role&value=${role}`;
  }
  // Filter by gender endpoint
  if (gender !== "all" && gender) {
    endpoint = `/users/filter?key=gender&value=${gender}`;
  }

  const params = new URLSearchParams();

  params.append("limit", String(limit));
  params.append("skip", String(skip));

  if (sortBy) {
    params.append("sortBy", sortBy);
    params.append("order", order);
  }

  const response = await api.get(
  `${endpoint}${
    endpoint.includes("?") ? "&" : "?"
  }${params.toString()}`
);
  return response.data;
};

export const addUser = async (payload: UserPayload) => {
  const response = await api.post(`/users/add`, payload);
  return response.data;
};

export const updateUser = async (
  id: number,
  payload: UserPayload
) => {
  const response = await api.put(
    `/users/${id}`,
    payload
  );

  return response.data;
};

export const deleteUser = async (id: number) => {
  const response = await api.delete(`/users/${id}`);
  return response.data;
};

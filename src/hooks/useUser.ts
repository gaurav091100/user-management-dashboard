import { useEffect, useState } from "react";
import { getUserById } from "../api/userApi";
import type { User } from "../types/user";
import { getErrorMessage } from "../utils/getErrorMessage";

const useUser = (id: number | undefined) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    const fetchUser = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getUserById(id);
        setUser(data);
      } catch (error) {
        setError(getErrorMessage(error));
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  return {
    user,
    loading,
    error,
  };
};

export default useUser;
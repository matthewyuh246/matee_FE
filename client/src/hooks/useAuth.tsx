import { useEffect, useState } from "react";
import axios from "axios";

export interface User {
  id: number;
  name: string;
  email: string;
  avatar_url: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:8080/me", {
          withCredentials: true, // Cookie を送信
        });
        setUser(res.data);
      } catch (error: any) {
        setUser(null);
        setError("Failed to fetch user data");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { user, loading, error };
};
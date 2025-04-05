// src/pages/Dashboard.tsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../hooks/useAuth";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    if (user) {
      setUserName(user.name);
    }
  }, [user]);

  const handleLogout = async () => {
    try {
      const response = await axios.get("http://localhost:8080/logout", {
        withCredentials: true, // Cookie を送信
      });
      if (response.status === 200) {
        navigate("/");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout", error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow p-4 flex justify-between items-center">
        <span className="font-bold text-xl">Dashboard</span>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </button>
      </nav>
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">
          Welcome, {userName || "User"}!
        </h2>
        <p>ここにユーザー固有のダッシュボードコンテンツを配置します。</p>
      </div>
    </div>
  );
};

export default Dashboard;

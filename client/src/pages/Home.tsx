import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && user) {
      // 認証済みの場合、ダッシュボードへリダイレクト
      navigate("/dashboard");
    }
  }, [user, loading, navigate]);

  const handleGitHubLogin = () => {
    // GitHub 認証開始 → バックエンドの /auth/github にリダイレクト
    window.location.href = "http://localhost:8080/auth/github";
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to Matee</h1>
      <button
        onClick={handleGitHubLogin}
        className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Sign in with GitHub
      </button>
    </div>
  );
};

export default Home;
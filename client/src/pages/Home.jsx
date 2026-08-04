import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { user, loading, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/signin");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="min-w-screen min-h-screen flex justify-center pt-[25vh]">
      {user ? (
        <div>
          <h1>Hello, {user.username}</h1>
          <p>{user.email}</p>
          <button onClick={handleLogout}>Log out</button>
          <img src="/mage.svg" alt="Pixel art mage" width="128" height="256" />
        </div>
      ) : (
        <p>Not signed in.</p>
      )}
    </div>
  );
}
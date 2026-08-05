import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { user, loading, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="min-w-screen min-h-screen flex justify-center pt-[25vh]">
      {user ? (
        <div className="flex min-w-full flex-col items-center">
          <h1>Hello, {user.username}</h1>
          <button onClick={handleLogout}>Log out</button>
          <button onClick={() => navigate("/quest")}>Accomplishments</button>
          <img className="flex pt-[2vh]" src="/mage.svg" alt="Pixel art mage" width="128" height="256" />
        </div>
      ) : (
        <p>Not signed in.</p>
      )}
    </div>
  );
}
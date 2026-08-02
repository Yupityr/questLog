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
    <div style={{ maxWidth: 360, margin: "0 auto" }}>
      {user ? (
        <>
          <h1>Hello, {user.username}</h1>
          <p>{user.email}</p>
          <button onClick={handleLogout}>Log out</button>
        </>
      ) : (
        <p>Not signed in.</p>
      )}
    </div>
  );
}
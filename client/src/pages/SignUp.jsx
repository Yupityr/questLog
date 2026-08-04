import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function SignUp() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (form.username.length < 6 || form.username.length > 16) {
      return setError("Username must be 6-16 characters.");
    }
    if (form.password.length < 8 || form.password.length > 16) {
      return setError("Password must be 8-16 characters.");
    }

    setSubmitting(true);
    try {
      await register(form.username, form.email, form.password);
      navigate("/dashboard"); // redirect wherever your app goes post-signup
    } catch (err) {
      setError(err?.response?.data?.message || "Something went wrong. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center pt-[25vh]">
      <h1>Sign up</h1>

      <form onSubmit={handleSubmit}>
        <div className="flex gap-1 justify-between">
          <label htmlFor="username">Username</label>
          <input
            className="border rounded"
            id="username"
            name="username"
            type="text"
            value={form.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex gap-1 justify-between">
          <label htmlFor="email">Email</label>
          <input
            className="border rounded"
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex gap-1 justify-between">
          <label htmlFor="password">Password</label>
          <input
            className="border rounded"
            id="password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>

        {error && <p role="alert">{error}</p>}

        <button className="flex justify-center min-w-full" type="submit" disabled={submitting}>
          {submitting ? "Creating account..." : "Create account"}
        </button>
      </form>

      <p>
        Already have an account? <Link to="/signin">Sign in</Link>
      </p>
    </div>
  );
}
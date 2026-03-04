import { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);   // ✅ ADD THIS
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);     // ✅ STOP LOADING
      })
      .catch(() => {
        setError(true);
        setLoading(false);     // ✅ STOP LOADING
      });
  }, []);

  if (loading) return <p>Loading...</p>;   // ✅ REQUIRED
  if (error) return <p>Failed to fetch users</p>;

  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default UserList;
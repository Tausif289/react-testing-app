import React, { useState, useEffect } from "react";

function PracticeComponent() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Simulate fetching users
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setUsers(["John", "Alice", "Bob"]);
      setLoading(false);
    }, 500); // faster for testing

    return () => clearTimeout(timer);
  }, []);

  const handleAdd = () => {
    if (!name) {
      setMessage("Name required");
      return;
    }
    setUsers([...users, name]);
    setMessage("User added successfully");
    setName("");
  };

  const handleClear = () => {
    setName("");
    setMessage("");
  };

  return (
    <div>
      {/* Header */}
      <header>
        <h1>User Management</h1>
        <h2>Practice Testing</h2>
        <p data-testid="description">This component is used for testing practice.</p>
      </header>

      {/* Add User Section */}
      <section>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleAdd}>Add User</button>
        <button onClick={handleClear}>Clear</button>
      </section>

      {/* Search Section */}
      <section>
        <h3>Search</h3>
        <input placeholder="Search user" aria-label="search-user" />
        <button>Search</button>
      </section>

      {/* User List */}
      <section>
        <h3>User List</h3>
        {loading && <p>Loading...</p>}
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      </section>

      {/* Alert message */}
      {message && <p role="alert">{message}</p>}

      {/* Footer */}
      <footer>
        <p>© 2026 Practice App</p>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </footer>
    </div>
  );
}

export default PracticeComponent;
import React, { useState, useEffect } from "react";

function AdvancedPractice() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [selected, setSelected] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setUsers([
        { id: 1, name: "Alice", email: "alice@example.com" },
        { id: 2, name: "Bob", email: "bob@example.com" },
        { id: 3, name: "Charlie", email: "charlie@example.com" },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleSelect = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((i) => i !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const handleAddUser = (name) => {
    if (!name) return setMessage("Name required");
    const newUser = { id: users.length + 1, name, email: `${name}@example.com` };
    setUsers([...users, newUser]);
    setMessage(`User ${name} added`);
  };

  return (
    <div>
      <header>
        <h1>Advanced Practice</h1>
        <h2>Test all queries here</h2>
        <p data-testid="desc">Use this component to practice testing-library queries.</p>
      </header>

      <section>
        <h3>Users Table</h3>
        {loading && <p>Loading...</p>}
        {!loading && (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Select</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <input
                      type="checkbox"
                      aria-label={`Select ${user.name}`}
                      checked={selected.includes(user.id)}
                      onChange={() => handleSelect(user.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      <section>
        <h3>Add New User</h3>
        <input placeholder="Enter user name" aria-label="user-name" />
        <button onClick={() => handleAddUser("David")}>Add User</button>
        {message && <p role="alert">{message}</p>}
      </section>

      <section>
        <h3>Links & Images</h3>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <img src="/logo.png" alt="Logo" />
      </section>

      <section>
        <h3>Form Example</h3>
        <form>
          <label htmlFor="email">Email</label>
          <input id="email" placeholder="Enter email" />
          <label htmlFor="password">Password</label>
          <input id="password" type="password" placeholder="Enter password" />
          <button type="submit">Login</button>
        </form>
      </section>
    </div>
  );
}

export default AdvancedPractice;
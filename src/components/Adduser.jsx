import React, { useState } from "react";

function AddUser() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("User");
  const [agree, setAgree] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setMessage("Name is required");
      return;
    }

    if (!agree) {
      setMessage("You must accept terms");
      return;
    }

    setMessage(`User ${name} added as ${role}`);
    setName("");
    setAgree(false);
  };

  const handleReset = () => {
    setName("");
    setRole("User");
    setAgree(false);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add User Form</h2>

      <label htmlFor="name">Name</label>
      <input
        id="name"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="role">Role</label>
      <select
        id="role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option>User</option>
        <option>Admin</option>
        <option>Manager</option>
      </select>

      <div>
        <label>
          <input
            type="checkbox"
            checked={agree}
            onChange={() => setAgree(!agree)}
          />
          Accept Terms
        </label>
      </div>

      <button type="submit">Add User</button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>

      <p data-testid="form-message">{message}</p>
    </form>
  );
}

export default AddUser;
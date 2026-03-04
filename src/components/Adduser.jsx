import React, { useState } from "react";

function AddUser() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setMessage("Name is required");
      return;
    }
    setMessage(`User ${name} added`);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add User</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default AddUser;
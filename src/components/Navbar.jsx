import React from "react";

function Navbar() {
  return (
    <nav>
      <h1>User Dashboard</h1>

      <p>Welcome to the user management system</p>
      <p data-testid="navbar-text">Manage users efficiently</p>

      <div>
        <button>Home</button>
        <button>Users</button>
        <button>Settings</button>
        <button>Logout</button>
      </div>

      <div>
        <a href="/profile">Profile</a>
        <a href="/help">Help</a>
      </div>
    </nav>
  );
}

export default Navbar;
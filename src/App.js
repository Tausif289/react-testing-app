import React from "react";
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import AddUser from "./components/Adduser";
import PracticeComponent from "./components/practice";
import FormComponent from "./components/formcomponent";

function App() {
  return (
    <div>
      <Navbar />

      <header>
        <h1>User Management System</h1>
        <h1>User Dashboard</h1>

        <p data-testid="app-description">
          Manage users by adding and viewing them.
        </p>
        <p data-testid="app-description">
          Search and manage all users easily.
        </p>
      </header>

      <section>
        <h2>Add New User</h2>
        <AddUser />

        <button>Add</button>
        <button>Reset</button>
      </section>

      <section>
        <h2>User List</h2>
        <PracticeComponent/>
        <UserList />
        <FormComponent/>

        <ul>
          <li>User A</li>
          <li>User B</li>
          <li>User C</li>
        </ul>
      </section>

      <section>
        <h2>Search User</h2>

        <input type="text" placeholder="Search user" />
        <input type="text" placeholder="Search user" />

        <button>Search</button>
        <button>Clear</button>
      </section>

      <footer>
        <p>© 2026 User App</p>
        <p>All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;
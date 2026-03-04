import React from "react";
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import AddUser from "./components/Adduser";

function App() {
  return (
    <div>
      <Navbar />
      <AddUser />
      <UserList />
    </div>
  );
}

export default App;
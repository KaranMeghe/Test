import { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);
  console.log("🚀 ~ file: App.js:6 ~ App ~ users:", users);

  const addUsers = (name, email) => {
    setUsers([...users, { name: `${name}`, email: `${email}` }]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <UserForm addUsers={addUsers} />
        <UserList displayUsers={users} />
      </header>
    </div>
  );
}

export default App;

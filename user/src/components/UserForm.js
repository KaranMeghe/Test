import { useState } from "react";

const UserForm = ({ addUsers }) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    addUsers(userName, userEmail);
    setUserEmail("");
    setUserName("");
  };
  return (
    <form onSubmit={handleForm} style={{ marginBottom: "50px" }}>
      <label name="name">Name</label> <br />
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Enter Your Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <br />
      <label name="email">Email</label> <br />
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter Your Email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <br />
      <button>Submit</button>
    </form>
  );
};

export default UserForm;

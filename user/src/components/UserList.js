const UserList = ({ displayUsers }) => {
  console.log(
    "🚀 ~ file: UserList.js:2 ~ UserList ~ displayUsers:",
    displayUsers
  );
  return (
    <tabel style={{ border: "1px solid black" }}>
      <tr style={{ width: "100%" }}>
        <th style={{ width: "32%" }}>Name</th>
        <th style={{ width: "68%" }}>Email</th>
      </tr>
      {displayUsers.map((user) => {
        return (
          <tr style={{ border: "1px solid black" }} key={user.name}>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              {user.name}
            </td>
            <td style={{ border: "1px solid black", padding: "5px" }}>
              {user.email}
            </td>
          </tr>
        );
      })}
    </tabel>
  );
};

export default UserList;

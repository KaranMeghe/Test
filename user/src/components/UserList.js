const UserList = ({ displayUsers }) => {
  console.log(
    "🚀 ~ file: UserList.js:2 ~ UserList ~ displayUsers:",
    displayUsers
  );
  return (
    <tabel>
      <tr>
        <th>Name</th>
        <th>Email</th>
      </tr>
      {displayUsers.map((user) => {
        return (
          <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        );
      })}
    </tabel>
  );
};

export default UserList;

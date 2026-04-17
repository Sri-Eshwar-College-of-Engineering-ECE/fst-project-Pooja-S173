import React, { useState } from "react";

function Users() {

  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const addUser = () => {

    if (name === "" || role === "") return;

    const newUser = {
      id: Date.now(),
      name: name,
      role: role
    };

    setUsers([...users, newUser]);

    setName("");
    setRole("");
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (

    <div>

      <h1>Users Management</h1>

      <div className="form">

        <input
          placeholder="User Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Role (Admin / Staff)"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <button onClick={addUser}>Add User</button>

      </div>

      <table border="1" cellPadding="10">

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {users.map((user) => (

            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => deleteUser(user.id)}>
                  Delete
                </button>
              </td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );
}

export default Users;
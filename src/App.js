import React, { useState, useEffect } from 'react';
import { getUsers, createUser, updateUser, deleteUser } from './services/userService';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({ name: '', username: '', email: '' });
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const response = await getUsers();
    setUsers(response.data);
  };

  const handleCreateUser = async () => {
    await createUser(selectedUser);
    loadUsers();
    setSelectedUser({ name: '', username: '', email: '' });
  };

  const handleUpdateUser = async (user) => {
    try {
      const response = await updateUser(user.id, user);
      console.log('Update response:', response.data);
      loadUsers(); 
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };
  

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setEditing(true);
  };

  const handleDeleteUser = async (id) => {
    await deleteUser(id);
    loadUsers();
  };

  return (
    <div>
      <h1>User Management</h1>
      <UserForm
        user={selectedUser}
        onChange={setSelectedUser}
        onSubmit={editing ? handleUpdateUser : handleCreateUser}
        buttonLabel={editing ? 'Update User' : 'Create User'}
      />
      <h2>Users</h2>
      <UserList users={users} onEdit={handleEditUser} onDelete={handleDeleteUser} />
    </div>
  );
}

export default App;
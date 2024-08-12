import React from 'react';

const UserForm = ({ user, onChange, onSubmit, buttonLabel }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={user.name}
        onChange={(e) => onChange({ ...user, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Username"
        value={user.username}
        onChange={(e) => onChange({ ...user, username: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={user.email}
        onChange={(e) => onChange({ ...user, email: e.target.value })}
      />
      <button onClick={onSubmit}>{buttonLabel}</button>
    </div>
  );
};

export default UserForm;
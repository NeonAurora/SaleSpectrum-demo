import React, { useState } from "react";
import userService from "services/usersService";

const UserDeletion = () => {
  const [_id, setId] = useState("");
  const [message, setMessage] = useState("");

  const onDelete = async (e) => {
    e.preventDefault();
    try {
      const res = await userService.deleteUser(_id);
      setMessage(res.data.message);
    } catch (error) {
      setMessage("Error deleting user");
    }
  };

  return (
    <div>
      <h2>Delete User</h2>
      <form onSubmit={onDelete}>
        <label htmlFor="_id">ID:</label>
        <input
          type="text"
          id="_id"
          value={_id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <button type="submit">Delete</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UserDeletion;

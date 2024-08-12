import axios from "axios";

const apiUrl = "http://localhost:5000/users";

export const getUsers = () => axios.get(apiUrl);

export const createUser = (user) => axios.post(apiUrl, user);

export const updateUser = (id, updatedUser) => axios.put(`${apiUrl}/${id}`, updatedUser);

export const deleteUser = (id) => axios.delete(`${apiUrl}/${id}`);

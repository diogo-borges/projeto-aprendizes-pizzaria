import User from "../models/users.models.js";

function storageCreate(user) {
  let storageUsers = JSON.parse(localStorage.getItem('users'))
  if (!storageUsers) storageUsers = [];
  storageUsers.push(user);
  localStorage.setItem('users', JSON.stringify(storageUsers));
}

export default storageCreate;




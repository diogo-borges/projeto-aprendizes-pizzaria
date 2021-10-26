const UserStorageHelper = function () {
  let storageUsers = JSON.parse(localStorage.getItem('users'));
  if (!storageUsers) storageUsers = [];

  return {
    createUser: function (user) { // POST
      try {
        const findNickname = this.findByNickname(user.nickname);

        if (findNickname) throw new Error('User already exists.');

        storageUsers.push(user);
        localStorage.setItem('users', JSON.stringify(storageUsers));
        storageUsers = JSON.parse(localStorage.getItem('users'));

        return user;
      } catch (error) {
        throw error;
      }
    },
    findByNickname: function (nickname) { // GET
      return storageUsers.find(user => user.nickname === nickname);
    },
  }
}

export default UserStorageHelper;


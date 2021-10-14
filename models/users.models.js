import iduser from "../utils/UserId.util";

class User {
  constructor(nickname, password) {
    this.id = iduser();
    this.nickname = nickname;
    this.password = btoa(password);
    this.createdAt = new Date(Date.parse()).toISOString();
  }
};

export default User; 
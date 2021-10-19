import iduser from "../utils/UserId.util";
class User {
  constructor(nickname, password) {
    this.id = iduser().toString();
    this.nickname = nickname;
    this.password = btoa(password);
    this.createdAt = new Date(Date.now()).toISOString();
  }
};

export default User; 
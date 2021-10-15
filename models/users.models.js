import iduser from "../utils/UserId.util.js" ;

class User {
  constructor(nickname, password) {
    this.id = iduser;
    this.nickname = nickname;
    this.password = btoa(password);
    this.createdAt = new Date(Date.now()).toLocaleString();
  }
};

export default User; 
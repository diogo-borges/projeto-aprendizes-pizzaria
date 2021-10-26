import idUser from "../utils/UserId.util.js" ;

class User {
  constructor(nickname, password) {
    this.id = idUser().toString();
    this.nickname = nickname;
    this.password = btoa(password);
    this.createdAt = new Date(Date.now()).toISOString();
  }
};

export default User; 
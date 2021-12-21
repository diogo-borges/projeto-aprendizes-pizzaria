import generateId from "../utils/generateId.util.js" ;

class User {
  constructor(nickname, password, name = '', address = {}, phone = '', updateAt = '', createdAt = new Date(Date.now()).toISOString()) {
    this.id = generateId().toString();
    this.nickname = nickname.toLowerCase();
    this.password = btoa(password);
    this.name = name || '' ;
    this.address = {
      description:  address.description || '',
      number:  address.number  || '',
      landmark:  address.landmark  || '',
      complement:  address.complement  || '',
    }
    this.phone = phone;
    this.createdAt = createdAt;
    this.updateAt = updateAt;
  }
};

export default User; 
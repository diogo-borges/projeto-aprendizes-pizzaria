import User from "../../models/users.models.js"

const formSignup = document.querySelector('form');
formSignup.addEventListener('submit', signup)

function signup(event) {
  validUser();
  validPassword();
  event.preventDefault();

  if (validUser && validPassword === true) {
    let newUser = new User(user.value, password.value);
    alert(user.value)
  }
}

const user = document.querySelector('.input-user');
const password = document.querySelector('.input-password');
const passwordConfirm = document.querySelector('.input-confirm-password');

function validUser() {
  const regex = /^(?=.{6,20}$)[a-zA-Z0-9]+([-._]?[a-zA-Z0-9])+([-_])*$/;
  const userTest = regex.test(user.value.trim());

  if (!userTest) {
    user.nextElementSibling.classList.remove('hide')
    user.nextElementSibling.innerHTML = 'Usuário inválido'
  }

  if (userTest) {
    user.nextElementSibling.innerHTML = ''
    user.nextElementSibling.classList.add('hide')
  }
}

function validPassword() {
  const regex = /^(?=.{6,}$)(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&+])[A-Za-z\d@$!%*#?&+]/
  const passwordTest = regex.test(password.value)
  const confirmTest = regex.test(passwordConfirm.value)

  if (!passwordTest || !confirmTest) {
    password.nextElementSibling.classList.remove('hide')
    password.nextElementSibling.innerHTML = 'Senha inválida'

    passwordConfirm.nextElementSibling.classList.remove('hide')
    passwordConfirm.nextElementSibling.innerHTML = 'Senha inválida'
  }
  if (passwordTest && confirmTest) {
    password.nextElementSibling.innerHTML = ''
    password.nextElementSibling.classList.add('hide')

    passwordConfirm.nextElementSibling.innerHTML = ''
    passwordConfirm.nextElementSibling.classList.add('hide')
  }

  if (password.value !== passwordConfirm.value) {
    passwordConfirm.nextElementSibling.classList.remove('hide')
    passwordConfirm.nextElementSibling.innerHTML = 'Senhas não coicidem'

    password.nextElementSibling.classList.remove('hide')
    password.nextElementSibling.innerHTML = 'Senhas não coicidem'
  }
}


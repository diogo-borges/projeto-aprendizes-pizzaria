const formSignup = document.querySelector('form');
formSignup.addEventListener('submit', signup)

function signup(e) {
  validUser();
  validPassword();
  confirmPassword();
  
  e.preventDefault();
}

function validUser() {
  const user = document.querySelector('.input-user');
  const regex = /^(?=.{6,20}$)[a-zA-Z0-9]+([-._]?[a-zA-Z0-9])+([-_])*$/;
  const userTest = regex.test(user.value.trim());

  if (!userTest) {
    user.nextElementSibling.classList.remove('hide')
    user.nextElementSibling.innerHTML = 'Usuário inválido'
  }

  if (userTest) {
    user.nextElementSibling.innerHTML = ''
    user.nextElementSibling.classList.add('hide')

    // let storageUsers = JSON.parse(localStorage.getItem('user'))
    // if (!storageUsers) storageUsers = [];
    // const user = {
    //   description: user.value
    // }
    // storageUsers.push(user)
  }
}

function validPassword() {
  const password = document.querySelector('.input-password');
  const regex = /^(?=.{6,}$)(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&+])[A-Za-z\d@$!%*#?&+]/
  const passwordTest = regex.test(password.value)

  if (!passwordTest) {
    password.nextElementSibling.classList.remove('hide')
    password.nextElementSibling.innerHTML = 'Senha inválida'
  }
  if (passwordTest) {
    password.nextElementSibling.innerHTML = ''
    password.nextElementSibling.classList.add('hide')
  }
}

function confirmPassword() {
  const passwordConfirm = document.querySelector('.input-confirm-password');
  const password = document.querySelector('.input-password');

  if (passwordConfirm.value !== password.value) {
    passwordConfirm.nextElementSibling.classList.remove('hide')
    passwordConfirm.nextElementSibling.innerHTML = 'Senhas não coicidem'
  }

  if (passwordConfirm.value === password.value) {
    passwordConfirm.nextElementSibling.classList.add('hide')
    passwordConfirm.nextElementSibling.innerHTML = ''
  }
}

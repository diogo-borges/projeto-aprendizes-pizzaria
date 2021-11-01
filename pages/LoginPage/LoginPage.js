import UserStorageHelper from "../../helpers/user-storage.helper.js"

const container = document.querySelector('.inputs-section')
container.classList.remove('hidden')

const signupBtn = document.getElementById('signup-btn')
signupBtn.addEventListener('click', signupRedirect)

function signupRedirect(e) {
  location.href = "../SignupPage/SignupPage.html"
  e.preventDefault()
}

const submitToMainPage = document.querySelector('form')
submitToMainPage.addEventListener('submit', mainPageRedirect)

const user = document.querySelector('.input-login')
const password = document.querySelector('.input-password')

function mainPageRedirect(e) {
  storageCompare(user.value, password.value)
  e.preventDefault()
}

function storageCompare(userInput, passwordInput) {
  const userExists = document.querySelector('#user-error');
  const userPasswordExists = document.querySelector('#password-error')
  const findNickname = UserStorageHelper().findByNickname(userInput)

  try {
    if (!findNickname) throw new Error('User does not exist');
    if (passwordInput !== atob(findNickname.password)) throw new Error('Password does not match');
    success();
  } catch (error) {
    if (error.message === 'User does not exist') return userExists.classList.remove('hide')
    userExists.classList.add('hide')
    if (error.message === 'Password does not match') return userPasswordExists.classList.remove('hide')
    userPasswordExists.classList.add('hide')
  }
}

function success() {
  const loader = document.querySelector('.loader') //classe loader
  const container = document.querySelector('.inputs-section') //container com inputs
  container.classList.add('hidden')
  loader.classList.remove('hidden')
  setTimeout(function () {
    location.href = "../MainPage/MainPage.html"
  }, 1000)
}
function storageCreate(userInput, user) {
  let storageUsers = JSON.parse(localStorage.getItem('users'))
  if (!storageUsers) storageUsers = [];
  const userExists = document.querySelector('#user-exists');
  const findNickname = storageUsers.find(usernames => usernames.nickname === userInput.toLowerCase())
  if (findNickname) {
    userExists.classList.remove('hide')
  } else {
    userExists.classList.add('hide')
    storageUsers.push(user);
    localStorage.setItem('users', JSON.stringify(storageUsers));
    ifWorks();
  }
}

export default storageCreate;

function ifWorks() {
  const successfulSignUp = document.querySelector('#successful-signUp')
  const container = document.querySelector('.signup-inputs')
  const loaderCatch = document.querySelector('.loader')
  successfulSignUp.classList.remove('hidden')
  let hideContainer = setTimeout(function () {
    container.classList.add('hidden')
  }, 2000)
  let showLoader = setTimeout(function () {
    loaderCatch.classList.remove('hidden')
  }, 2000)
  let redirect = setTimeout(function () {
    location.href = "../LoginPage/LoginPage.html"
  }, 5000)
}
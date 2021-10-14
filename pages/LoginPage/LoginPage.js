const submitToMainPage = document.querySelector('form')
submitToMainPage.addEventListener('submit', mainPageRedirect)

function mainPageRedirect(e) {
  location.href = "../MainPage/MainPage.html"
  e.preventDefault()
}

const signupBtn = document.getElementById('signup-btn')
signupBtn.addEventListener('click', signupRedirect)

function signupRedirect(e) {
  location.href = "../SignupPage/SignupPage.html"
  e.preventDefault()
}
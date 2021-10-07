const signupBtn = document.getElementById('signup-btn')
signupBtn.addEventListener('click', signupRedirect)

function signupRedirect() {
    location.href = "../SignupPage/SignupPage.html"
}
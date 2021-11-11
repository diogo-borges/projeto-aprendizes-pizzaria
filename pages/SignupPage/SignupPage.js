import User from "../../models/users.models.js"
import userStorageHelper from '../../helpers/user-storage.helper.js'
import userValidation from "../../utils/UserValidation.util.js";
import loading from "../../assets/components/Loading/loading.js";

function onLoad(){
  loading('.SingupPage-container');
}
onLoad();

const container = document.querySelector('.signup-inputs')
container.classList.remove('hidden')

const formSignup = document.querySelector('form');
formSignup.addEventListener('submit', signup);

const user = document.querySelector('.input-user');
const password = document.querySelector('.input-password');
const passwordConfirm = document.querySelector('.input-confirm-password');

function signup(event) {
  validAndCreate(user.value.trim(), password.value, passwordConfirm.value);
  event.preventDefault();
}

function validAndCreate(userValue, passwordValue, passwordToConfirm) {
  // User Params
  const userExists = document.querySelector('#user-exists');
  const userError = document.querySelector('#user-error');
  const passwordError = document.querySelector('#password-error');
  const confirmPassword = document.querySelector('#confirm-password-error');

  // Load
  const successfulSignUp = document.querySelector('#successful-signUp');
  const loaderCatch = document.querySelector('#loader');
  const container = document.querySelector('.signup-inputs');

  const regex = /^(?=.{6,20}$)[a-zA-Z0-9]+([-._]?[a-zA-Z0-9])+([-_])*$/;
  const userTest = regex.test(userValue);

  const regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&+])[A-Za-z\d@$!%*#?&+]{6,}$/
  const passwordTest = regexp.test(passwordValue);
  const userValidations = [
    { isValid: userTest, errorElement: userError },
    { isValid: passwordTest, errorElement: passwordError },
    { isValid: passwordValue === passwordToConfirm, errorElement: confirmPassword }
  ];

  try {
    const allValid = userValidations.every(validation => validation.isValid);

    if (!allValid) throw new Error('Invalid Params.');

    let newUser = new User(userValue, passwordValue);
    loaderCatch.classList.remove('hidden'); // Mostra o Loading
    container.classList.add('hidden'); // Esconde o Form
    userStorageHelper().createUser(newUser);

    successfulSignUp.classList.remove('hidden');

    setTimeout(function () { location.href = "../LoginPage/LoginPage.html" }, 1500);
  } catch (error) {
    loaderCatch.classList.add('hidden'); // Esconde o Loading
    container.classList.remove('hidden'); // Mostra o Form

    if (error.message === 'User already exists.') return userExists.classList.remove('hide');

    userExists.classList.add('hide');

    if (error.message === 'Invalid Params.') {
      for (const validation of userValidations) {
        userValidation(validation.isValid, validation.errorElement)
      }
    }
    console.log(error);
  }
}

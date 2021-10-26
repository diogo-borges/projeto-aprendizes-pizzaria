import User from "../../models/users.models.js"
import storageCreate from '../../helpers/storage.helper.js'
import userValidation from "../../utils/UserValidation.util.js";

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
  const userError = document.querySelector('#user-error');
  const passwordError = document.querySelector('#password-error');
  const confirmPassword = document.querySelector('#confirm-password-error')

  const regex = /^(?=.{6,20}$)[a-zA-Z0-9]+([-._]?[a-zA-Z0-9])+([-_])*$/;
  const userTest = regex.test(userValue);

  const regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&+])[A-Za-z\d@$!%*#?&+]{6,}$/
  const passwordTest = regexp.test(passwordValue)

  const userValidations = [
    {
      isValid: userTest, errorElement: userError
    },

    {
      isValid: passwordTest, errorElement: passwordError
    },

    {
      isValid: passwordValue === passwordToConfirm, errorElement: confirmPassword
    }
  ]
  for (const validation of userValidations) {
    userValidation(validation.isValid, validation.errorElement)
  }

  const allValid = userValidations.every(validation => validation.isValid)
  if (allValid) {
    let newUser = new User(userValue, passwordValue);
    storageCreate(userValue, newUser);
  }
}
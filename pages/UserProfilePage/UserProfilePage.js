import UserStorageHelper from '../../helpers/user-storage.helper.js';
function phoneMask() {
  var element = document.getElementById('telephone-input');
  var maskOptions = {
    mask: '+{55}(00) 00000-0000'
  };
  var mask = IMask(element, maskOptions);
}
phoneMask();

//Inputs
const nicknameInput = document.getElementById('nickname-input')
const nameInput = document.getElementById('name-input')
const addressInput = document.getElementById('address-input')
const numberInput = document.getElementById('number-input')
const complementInput = document.getElementById('complement-input')
const referenceInput = document.getElementById('reference-input')
const telephoneInput = document.getElementById('telephone-input')

// Session & Local GETS
const sessionLogged = JSON.parse(sessionStorage.getItem('userSession'))
const storageLogged = JSON.parse(localStorage.getItem('users'))

//getId function
const user = UserStorageHelper().findById(sessionLogged.id)
console.log(user)

function pushNickname() {
  nicknameInput.value = user.nickname
  if (nicknameInput.value !== user.nickname) return user.nickname
}
pushNickname();

function updateProfile(id) {
  const findLoggedId = storageLogged.find(user => user.id === id)
  findLoggedId.name = nameInput.value
  findLoggedId.phone = telephoneInput.value
  findLoggedId.address.description = addressInput.value
  findLoggedId.address.number = numberInput.value
  findLoggedId.address.complement = complementInput.value
  findLoggedId.address.landmark = referenceInput.value
  findLoggedId.updateAt = new Date(Date.now()).toISOString()
  localStorage.setItem('users', JSON.stringify(storageLogged));
}

function inputValue(id) {
  const findLoggeduser = storageLogged.find(user => user.id === id)
  nameInput.value = findLoggeduser.name
  telephoneInput.value = findLoggeduser.phone
  addressInput.value =   findLoggeduser.address.description
  numberInput.value = findLoggeduser.address.number
  complementInput.value = findLoggeduser.address.complement
  referenceInput.value = findLoggeduser.address.landmark
} inputValue(sessionLogged.id);

const saveForm = document.querySelector('form')
saveForm.addEventListener('submit', saveProfile);

function saveProfile(e) {
  e.preventDefault();
  updateProfile(sessionLogged.id);
  const successBar = document.getElementById('successful-saving')
  successBar.classList.remove('hidden')
  setTimeout(function () {
    successBar.classList.add('hidden')
  }, 1700)
}






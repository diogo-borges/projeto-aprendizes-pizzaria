const userValidation = function (isValid, errorElement) {
	return !isValid ? errorElement.classList.remove('hide') : errorElement.classList.add('hide')
}

export default userValidation;
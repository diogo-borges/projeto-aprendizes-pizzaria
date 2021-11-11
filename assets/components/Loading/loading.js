function loading(query) {
	const element = document.querySelector(query)
	element.innerHTML = `
	${element.innerHTML}
    <div id='loader' class="loader-modifications hidden"></div>
    `
}
export default loading;
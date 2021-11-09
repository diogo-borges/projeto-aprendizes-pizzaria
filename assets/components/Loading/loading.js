function loading(query) {
	const element = document.querySelector(query)
	element.innerHTML = `
	${element.innerHTML}
    <footer id='loader' class="loader-modifications hidden"></footer>
    `
}
export default loading;
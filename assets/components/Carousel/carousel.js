function Carousel(element, query) {
	query.innerHTML = ` 
			<div class='div-previous-arrow'>
			<a class="previous-arrow">&#10094;</a>
			</div>
			<div class='div-next-arrow'>
			<a class="next-arrow">&#10095;</a>
			</div>`

	for (var i = 0; i <= element.length; i++) {
		query.innerHTML = `
			${query.innerHTML}
			<div class="carousel-container fade">
      <img src=${element[i].image} style="width: 45%; height: 100%;">
      <div class="carousel-info">
        <p class="pizza-title">${element[i].name}</p>
        <p class="pizza-description">${element[i].description}</p>
      </div>
      <div class="carousel-buy-tools">
        <div class="pizza-price-container">
        <p class="pizza-price">${element[i].price}</p>
        </div>
        <input class='pizza-amount' type="number" value="1" min="1">
        <button class='pizza-buy'><img src="../../assets/img/shopping-cart-solid.svg"></button>
    </div>
    </div>`
	}

	const prev = document.querySelector('.previous-arrow');
	prev.addEventListener('click',()=>moveSlides(-1));
	console.log('funcionou')
	const next = document.querySelector('.next-arrow');
	next.addEventListener('click',()=>moveSlides(1));
}

let slideIndex = 1;
const slides = document.getElementsByClassName('.carousel-container')


function moveSlides(number) {
	showSlides(slideIndex += number);
}

function showSlides(number) {
	if (number > slides.length) {
		slideIndex = 1;
	}
	if (number < 1) {
		slideIndex = slides.length
	}
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none"
	}
	slides[slideIndex -1].style.display = "flex";
}

// const prev = document.querySelector('.previous-arrow')
// prev.setAttribute('onclick', 'moveSlides(-1)')
// const next = document.querySelector('.next-arrow')
// next.setAttribute('onclick', "moveSlides(1)")



export default Carousel;
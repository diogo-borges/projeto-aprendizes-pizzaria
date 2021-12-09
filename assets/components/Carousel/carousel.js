function getCarouselContainer(element) {
	let carouselContainer = '';

	for (var i = 0; i < element.length; i++) {
		carouselContainer = `
			${carouselContainer}
			<div class="carousel-container fade${i === 0 ? '' : ' hide'}">
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

	return carouselContainer;
}

function addCarouselEvent() {
	let slideIndex = 1;
	const slides = document.getElementsByClassName('carousel-container');

	const prev = document.querySelector('.previous-arrow');
	prev.addEventListener('click', () => moveSlides(-1));

	const next = document.querySelector('.next-arrow');
	next.addEventListener('click', () => moveSlides(1));

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
			slides[i].classList.add('hide');
		}
		slides[slideIndex - 1].classList.remove('hide');
	}
}

function Carousel(element, query) {
	query.innerHTML =
		`<section class="carousel">
			<div class='div-previous-arrow'>
				<a class="previous-arrow">&#10094;</a>
			</div>
			${getCarouselContainer(element)}
			<div class='div-next-arrow'>
				<a class="next-arrow">&#10095;</a>
			</div>
		</section>`

	addCarouselEvent();
}

export default Carousel;
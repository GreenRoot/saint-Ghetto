import gsap from "gsap";

// Анимация иконок в секции "Преимущества"
gsap.to(".home-key-star", {rotation: '+=360', repeat: -1, transformOrigin: '50% 50%', duration: 2});
gsap.to(".time-big-arrow", {rotation: '+=360', repeat: -1, transformOrigin: '0% 100%', duration: 3});
gsap.to(".time-small-arrow", {rotation: '+=360', repeat: -1, duration: 2});
gsap.to(".music-1", {y: '-5', repeat: -1, duration: 0.5, opacity: 0});
gsap.to(".music-2", {y: '-5', repeat: -1, duration: 0.9, opacity: 0});
gsap.to(".music-3", {y: '-5', repeat: -1, duration: 1.3, opacity: 0});
gsap.to(".woman-social", {x: '-5', repeat: -1, duration: 3});
gsap.to(".man-social", {x: '5', repeat: -1, duration: 3});
gsap.to(".right-social", {x: '-15', repeat: -1, duration: 3});
gsap.to(".left-social", {x: '15', repeat: -1, duration: 3});
const tl = gsap.timeline({repeat: -1});
tl.to(".social-1m", {opacity: 1, duration: 0});
tl.to(".social-1m", {opacity: 0, duration: 0, delay: 1});
tl.to(".social-2m", {opacity: 1, duration: 0});
tl.to(".social-2m", {opacity: 0, duration: 0, delay: 1});
tl.to(".social-3m", {opacity: 1, duration: 0});
tl.to(".social-4m", {opacity: 0, duration: 0, delay: 1});
gsap.to(".fitness-heart", {y: '-10', repeat: -1, duration: 2.8, opacity: 0});
gsap.to(".message-1", {y: '-15', repeat: -1, duration: 2, opacity: 0, repeatDelay: 0});
gsap.to(".message-2", {y: '-15', repeat: -1, duration: 2, opacity: 0, repeatDelay: 2});
gsap.to(".message-3", {y: '-15', repeat: -1, duration: 2, opacity: 0, repeatDelay: 4});

//
// gsap.registerPlugin(DrawSVGPlugin);


// Табы видов тренировок

const trainingImg = document.getElementsByClassName('training-img')
const trainingTitle = document.getElementsByClassName('training-list__item')

for(let i = 0; i < trainingTitle.length; i++) {
	trainingTitle[i].addEventListener('click', () => {
		for(let i = 0; i < trainingTitle.length; i++) {
			trainingTitle[i].classList.remove('active')
			trainingImg[i].style.display = 'none'
		}
		trainingTitle[i].classList.add('active')
		trainingImg[i].style.display = 'block'
	}, {passive: true})
}

// Переключение цен
const priceToggle = document.querySelectorAll('.price-toggle__botton')
const prices = document.querySelectorAll('.prices')
function activepriceToggle() {
	priceToggle.forEach((item) => {
		item.classList.remove('active');
		prices.forEach((item) => {
			item.classList.remove('active');
		})
	});
	let temp = +this.getAttribute('data')
	this.classList.add('active');
	prices[temp].classList.add('active')
	document.getElementsByClassName('price')[1].classList.add('price-hover')
}
priceToggle.forEach((item) => item.addEventListener('click', activepriceToggle, {passive: true}))


// Анимация цен на услуги
const price = document.getElementsByClassName('price')

const removePriceHover = () => {
	for(let i = 0; i < price.length; i++) {
		price[i].classList.remove('price-hover')
	}
}

for(let i = 0; i < price.length; i++) {
	price[i].addEventListener('click', () => {
		removePriceHover()
		price[i].classList.add('price-hover')
	}, {passive: true})
}
// свайпы

function swipeReg() {
	// Вешаем на прикосновение функцию handleTouchStart
	document.getElementsByClassName('prices')[0].addEventListener('touchstart', handleTouchStart,{passive: true});
	// А на движение пальцем по экрану - handleTouchMove
	document.getElementsByClassName('prices ')[0].addEventListener('touchmove', handleTouchMove, {passive: true});
}
swipeReg()


let xDown = null;
let yDown = null;

function handleTouchStart(evt) {
	xDown = evt.touches[0].clientX;
	yDown = evt.touches[0].clientY;
}

function handleTouchMove(evt) {
	if ( ! xDown || ! yDown ) {
		return;
	}

	let xUp = evt.touches[0].clientX;
	let yUp = evt.touches[0].clientY;

	let xDiff = xDown - xUp;
	let yDiff = yDown - yUp;
	// немного поясню здесь. Тут берутся модули движения по оси абсцисс и ординат
	// (почему модули? потому что если движение сделано влево или вниз,
	// то его показатель будет отрицательным) и сравнивается, чего было больше:
	// движения по абсциссам или ординатам. Нужно это для того, чтобы, если пользователь провел вправо,
	// но немного наискосок вниз, сработал именно коллбэк для движения вправо, а ни как-то иначе.

	if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
		let priceHover = document.getElementsByClassName('price-hover')
		if ( xDiff > 0 ) {
			if (priceHover.length === 0) {
				price[price.length - 2].classList.add('price-hover')
			} else if (price[0].classList.contains('price-hover')) {
				price[0].classList.remove('price-hover')
				price[1].classList.add('price-hover')
			} else if (price[1].classList.contains('price-hover')) {
				price[1].classList.remove('price-hover')
				price[2].classList.add('price-hover')
			} else if (price[2].classList.contains('price-hover')) {
				price[2].classList.remove('price-hover')
				price[3].classList.add('price-hover')
			} else if (price[3].classList.contains('price-hover')) {
				price[3].classList.remove('price-hover')
				price[0].classList.add('price-hover')
			}
			/* left swipe */
		} else {
			if (priceHover.length === 0) {
				price[0].classList.add('price-hover')
			} else if (price[3].classList.contains('price-hover')) {
				price[3].classList.remove('price-hover')
				price[2].classList.add('price-hover')
			} else if (price[2].classList.contains('price-hover')) {
				price[2].classList.remove('price-hover')
				price[1].classList.add('price-hover')
			} else if (price[1].classList.contains('price-hover')) {
				price[1].classList.remove('price-hover')
				price[0].classList.add('price-hover')
			} else if (price[0].classList.contains('price-hover')) {
				price[0].classList.remove('price-hover')
				price[3].classList.add('price-hover')
			}
			/* right swipe */
		}
	}
	/* reset values */
	xDown = null;
	yDown = null;
}

//анимация мобильного меню
const list = document.querySelectorAll('.mobile-menu__list')
function activeLink() {
	list.forEach((item) =>
	item.classList.remove('active'));
	this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click', activeLink, {passive: true}))

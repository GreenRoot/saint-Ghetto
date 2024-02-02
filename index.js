import gsap from "gsap";

// Анимация иконок в секции "Преимущества"
gsap.to(".time-big-arrow", { rotation: '+=360', repeat: -1, transformOrigin: '0% 100%', duration: 3 });
gsap.to(".time-small-arrow", { rotation: '+=360', repeat: -1, duration: 2 });
gsap.to(".music-1", { y: '-5', repeat: -1, duration: 0.5, opacity: 0 });
gsap.to(".music-2", { y: '-5', repeat: -1, duration: 0.9, opacity: 0 });
gsap.to(".music-3", { y: '-5', repeat: -1, duration: 1.3, opacity: 0 });
gsap.to(".message-1", { y: '-15', repeat: -1, duration: 2, opacity: 0, repeatDelay: 0 });
gsap.to(".message-2", { y: '-15', repeat: -1, duration: 2, opacity: 0, repeatDelay: 2 });
gsap.to(".message-3", { y: '-15', repeat: -1, duration: 2, opacity: 0, repeatDelay: 4 });

//
// gsap.registerPlugin(DrawSVGPlugin);

const cardPrice = {

}
/**
data-card="5" []
.n-card-cashback__cashback
.n-card-cashback__oldprice
.n-card-price__price
.n-card-price__min
.n-card-total__total
.n-card-total__old
.n-card-amount
.n-card-button

	"id": 0,
	"discount": false,
 	"cashBack": "кешбэк 10%",
	"oldPrice": "### р.",
	"price": "580 р.",
	"oldFullPrice": "### р.",
	"fullPrice": "всего 8700 р.",
	"min": "80 мин",

	"trainingSessions": "15 тренировок",
	"link": "https://n725762.yclients.com/"
*/

document.addEventListener('DOMContentLoaded', async function() {
	await updateCards()
});

const updateCards = async () => {
	const data = await fetchPrices();
	renderCards(data)
}

const renderCards = (listCards) => {
	const cardsElements = document.querySelectorAll('[data-card]');
	for (const card of cardsElements) {
		const cardId = card.getAttribute('data-card') * 1
		const cardData = listCards.find(obj => obj.id === cardId);
		const cardElements = {
			oldPrice: card.querySelector(`.n-card-cashback__oldprice`),
			price: card.querySelector(`.n-card-price__price`),
			oldFullPrice: card.querySelector(`.n-card-total__old`),
			fullPrice: card.querySelector(`.n-card-total__total`),
			min: card.querySelector(`.n-card-price__min`),
			cashBack: card.querySelector(`.n-card-cashback__cashback`),
			trainingSessions: card.querySelector(`.n-card-amount`),
			link: card.querySelector(`a.n-card-button`),
			discount: card,
		};
		for (const cardCell in cardElements) {
			const cardValue = cardData[cardCell];
			const cardElement = cardElements[cardCell]
			if (cardCell === "link") {cardElement.setAttribute('href', cardValue)}
			else if (cardCell === "discount") {cardElement.setAttribute('data-discount', cardValue)}
			else {cardElement.textContent = cardValue}
		}
	}
	document.querySelector(`[data-loaded="false"]`).setAttribute('data-loaded', 'true')
}
const fetchPrices = async () => {
	const res = await fetch('/prices.json?v020224');
	const data = await res.json();
	console.log(data)
	return data;
}

// Табы видов тренировок

const trainingImg = document.getElementsByClassName('training-img')
const trainingTitle = document.getElementsByClassName('training-list__item')

for (let i = 0; i < trainingTitle.length; i++) {
	trainingTitle[i].addEventListener('click', () => {
		for (let i = 0; i < trainingTitle.length; i++) {
			trainingTitle[i].classList.remove('active')
			trainingImg[i].style.display = 'none'
		}
		trainingTitle[i].classList.add('active')
		trainingImg[i].style.display = 'block'
	}, { passive: true })
}

// Переключение цен
const priceToggle = document.querySelectorAll('.price-toggle__button')
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
priceToggle.forEach((item) => item.addEventListener('click', activepriceToggle, { passive: true }))


//анимация мобильного меню
const list = document.querySelectorAll('.mobile-menu__list')
function activeLink() {
	list.forEach((item) =>
		item.classList.remove('active'));
	this.classList.add('active');
}
list.forEach((item) =>
	item.addEventListener('click', activeLink, { passive: true }))

// coach card animation
const coach = document.getElementsByClassName('coach')
const coachArrow = document.getElementsByClassName('coach-arrow')

for (let i = 0; i < coach.length; i++) {
	coachArrow[i].addEventListener('click', () => {
		coach[i].classList.toggle('active')
	}, { passive: true })
}

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
	})
}

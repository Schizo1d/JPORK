document.addEventListener('DOMContentLoaded', () => {
	const track = document.querySelector('.slider-track');
	const slides = document.querySelectorAll('.slide');
	const btnLeft = document.querySelector('.slider-btn.left');
	const btnRight = document.querySelector('.slider-btn.right');

	let index = 0;
	const total = slides.length;

	function updateSlider() {
		track.style.transform = `translateX(-${index * 100}%)`;

		slides.forEach(slide => slide.classList.remove('active'));
		slides[index].classList.add('active');
	}

	btnRight.addEventListener('click', () => {
		index = (index + 1) % total;
		updateSlider();
	});

	btnLeft.addEventListener('click', () => {
		index = (index - 1 + total) % total;
		updateSlider();
	});

	updateSlider();
});

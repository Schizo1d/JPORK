document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('.tgs-player').forEach(el => {
		lottie.loadAnimation({
			container: el,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			path: el.dataset.src,
		});
	});
});

const burger = document.getElementById('burgerBtn');
const menu = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('mobileClose');

burger.addEventListener('click', () => {
	menu.classList.add('active');
	document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
	menu.classList.remove('active');
	document.body.style.overflow = '';
});

menu.querySelectorAll('a').forEach(link => {
	link.addEventListener('click', () => {
		menu.classList.remove('active');
		document.body.style.overflow = '';
	});
});

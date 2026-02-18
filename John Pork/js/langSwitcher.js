const translations = {
	en: {
		'nav.about': 'About project',
		'nav.roadmap': 'Development',
		'nav.stickers': 'Stickers',
		'nav.game': 'Our game',

		'hero.subtitle': "Yes, this is a meme.<br> And no — it's not a joke.",
		'hero.text': `Yes, this is a meme. And no — it's not a joke. John Pork is the entry point to a community that goes beyond Telegram and doesn't live by others' rules.<br><br>This landing page isn't about selling, promised Xs, or quick hype. It's a digital bridge between memes, crypto, and people who understand why they're here.`,
		'hero.note':
			"Yes, this is a meme. And no — it's not a joke. John Pork is the entry point to a community that goes beyond Telegram and doesn't live by others' rules.",

		'buttons.buy': 'Buy',
		'buttons.join': 'Join',
		'buttons.getStickers': 'Get stickers',
		'buttons.moreDetails': 'More details',
		'buttons.try': 'Soon',

		'roadmap.image1': '../img/roadmap-1-en.png',
		'roadmap.image2': '../img/roadmap-2-en.png',
		'roadmap.image3': '../img/roadmap-3-en.png',
		'roadmap.image4': '../img/roadmap-4-en.png',

		'meme.title': "Yes, this is a meme.<br> And no — it's not a joke.",
		'meme.text': `The power of a meme isn't in pump-and-dump schemes, but in community building; a good meme is first and foremost about fun and narrative.<br><br>If people find it funny and interesting, they believe and engage, which is why John Pork is an attempt to create such a narrative from scratch — not around an influencer, media personality, or affiliated group, but by the community and for the community!`,
		'meme.subtext': 'Add Telegram stickers to support our currency and community.',
		'meme.sticker-note': '../img/sticker-note-en.png',
		'meme.mobile-sticker-note': '../img/mobile-sticker-note-en.png',

		'jpjob.title': 'Is John Pork just a memecoin?',
		'jpjob.text1':
			"No! It's the core of a future freelance platform inside Telegram on the TON blockchain. <b>$JPORK</b> is the main platform token for payments, ensuring scarcity and value growth.",
		'jpjob.text2':
			'Freelancers (developers, designers, SMM) get access to projects and instant payments in $TON / $JPORK. Projects quickly find verified specialists and collaborate securely through smart contracts.',
		'jpjob.text3':
			"Our goal is to unite talents and simplify finding a team or work in TON, removing barriers thanks to interaction and payment through Telegram and TON. We're creating the foundation for the future of work in Telegram and Web3.",

		'game.lead': 'Remember these guys? We do too <img src="../img/smirking-face.svg" alt="">',
		'game.text1':
			"It's time to have some fun and help our John kick the crap out of them, in the good sense of crypto-memes!",
		'game.text2':
			'The most active, creative, and fierce participants of this hunt will receive solid rewards from the team. Ready to shake off the boredom? <span class="minigame-date">Start Q2 2026</span>',

		'footer.wallet': 'Public wallet',
		'footer.buyback': 'Buyback wallet',
		'footer.lock': 'Token lock',
		'footer.follow': 'Follow for updates:',

		'loader.text': 'Switching language...',
		// Архитектура страница (JP.job)
		'jpjob.page.title': 'Freelance platform',
		'jpjob.page.subtitle': 'Freelance platform',
		'jpjob.page.description1':
			'Our platform is built as a self-regulating system where every user action is embedded in the overall logic. All processes are automated, transparent, and aimed at maintaining balance between participants.',
		'jpjob.page.description2':
			'The architecture adapts to demand and load without manual intervention, turning the service into a sustainable digital infrastructure, not just a set of functions.',

		// Карточки преимуществ
		'jpjob.card1.title': 'Deflationary mechanics',
		'jpjob.card1.desc': 'Constant supply reduction through auto-burning (80%)',
		'jpjob.card2.title': 'Stabilization fund',
		'jpjob.card2.desc': '20% in cold storage + TON fees as a buffer against volatility',
		'jpjob.card3.title': 'Auto market-making',
		'jpjob.card3.desc': 'Contract buys JPORK when price falls',
		'jpjob.card4.title': 'Dual-currency system',
		'jpjob.card4.desc': 'Unit of account (TON) vs Medium of exchange (JPORK)',
		'jpjob.card5.title': 'Cyclic economy',
		'jpjob.card5.desc': "Tokens don't stagnate: part burns, part recycles",
		'jpjob.card6.title': 'Follow the news!',
		'jpjob.card6.desc': 'Go to our telegram channel',

		// Flow секция
		'flow.title': 'Basic transaction cycle:',
		'flow.userX': 'User X<br>(Client)',
		'flow.userY': 'User Y<br>(Applicant)',
		'flow.step1.title': 'X Publishes a project',
		'flow.step1.desc': 'Cost: (N JPORK)',
		'flow.step2.title': 'Y responds',
		'flow.step2.desc': 'Response fee',
		'flow.step3.title': 'Smart contract',
		'flow.step3.desc': 'automatic distribution of N JPORK',

		// Economy секция
		'economy.title': 'Economy architecture:',
		'economy.card1.title': 'Payment distribution mechanism',
		'economy.card1.sub': 'Burning + reserve',
		'economy.card1.back.title1': 'Step 1:<br>Payment decomposition',
		'economy.card1.back.text1': 'N (100% JPORK) = N1 (80%) + N2 (20%)',
		'economy.card1.back.title2': 'Step 2:<br>Fate of each part:',
		'economy.card1.back.text2':
			'N1 (80%) → <strong>Burn address</strong><br>Tokens are destroyed forever → total supply decreases → creates deflationary pressure.',
		'economy.card1.back.text3':
			'N2 (20%) → <strong>Cold Storage</strong> Reserve for market stabilization. Sold ONLY when demand is abnormally high → smoothes price spikes.',

		'economy.card2.title': 'Stabilization mechanism',
		'economy.card2.sub': 'TON Fee → JPORK',
		'economy.card2.back.title': 'How TON commissions work:',
		'economy.card2.back.text1': 'N (100% JPORK) = N1 (80%) + N2 (20%)',
		'economy.card2.back.title2': 'Logic:',
		'economy.card2.back.text2':
			'<strong>1.</strong> All network <strong>TON</strong> commissions (gas) accumulate in a special insurance fund.',
		'economy.card2.back.text3':
			'<strong>2.</strong> In case of sharp volatility (<strong>JPORK</strong> price drop > set threshold) the smart contract automatically:',
		'economy.card2.back.text4':
			'Buys JPORK for accumulated TON<br>Supports the price by adding liquidity<br>This is a built-in market-maker against panic sales.',

		'economy.card3.title': 'Dual-currency valuation',
		'economy.card3.sub': 'JPORK ⇄ TON',
		'economy.card3.back.title': 'Key innovation:',
		'economy.card3.back.text1':
			'# All calculations <strong>INSIDE</strong> the system — in <strong>JPORK</strong><br># All <strong>VALUATIONS</strong> — in <strong>TON</strong>',
		'economy.card3.back.title2': 'Advantages:',
		'economy.card3.back.text2':
			'For users: Understanding the real cost in stable currency <strong>(TON)</strong>',
		'economy.card3.back.text3':
			'For the ecosystem: All internal payments — in native token <strong>JPORK</strong>',
		'economy.card3.back.text4':
			'Volatility protection: Exchange rate reference only for valuation, not for payments',

		// Effects секция
		'effects.title': 'Economic effects of the model:',
		'effects.card1.title': 'For JPORK holders:',
		'effects.card1.text1':
			'<strong>Deflation:</strong> Constant supply reduction leads to price growth with the same demand',
		'effects.card1.text2': '<strong>Stability:</strong> Built-in mechanisms against crashes',
		'effects.card1.text3':
			'<strong>Utility:</strong> Token is needed for any operations on the platform',

		'effects.card2.title': 'For platform users:',
		'effects.card2.text1': '<strong>Predictability:</strong> Prices in TON are clear and stable',
		'effects.card2.text2': '<strong>Simplicity:</strong> One-click payment in JPORK',
		'effects.card2.text3': '<strong>Security:</strong> Smart contracts guarantee fair distribution',

		'effects.card3.title': 'For the TON ecosystem:',
		'effects.card3.text1':
			'<strong>Increased transactions:</strong> Every action generates TON fees',
		'effects.card3.text2': '<strong>Utility growth:</strong> TON becomes a measure of value',
		'effects.card3.text3': '<strong>Network effect:</strong> Growth of JP.job attracts new users',

		// Breakthrough секция
		'breakthrough.title': 'BREAKTHROUGH<br>MODEL',
		'breakthrough.item1.title': 'Balanced economy',
		'breakthrough.item1.desc': 'burning + stabilization + liquidity',
		'breakthrough.item2.title': "Protection of all parties' interests",
		'breakthrough.item2.desc': 'users, holders, ecosystem',
		'breakthrough.item3.title': 'Elegant connection',
		'breakthrough.item3.desc':
			'with the <strong>TON</strong> ecosystem without losing <strong>JPORK</strong> sovereignty',
		'breakthrough.item4.title': 'Double value',
		'breakthrough.item4.desc': 'utilitarian (platform) + investment (deflation)',
		'breakthrough.note':
			'In essence, you are creating not just a platform, but an autonomous economic system with built-in stabilizers — this is DeFi 2.0 level within a separate product.',
	},

	ru: {
		'nav.about': 'О проекте',
		'nav.roadmap': 'Развитие',
		'nav.stickers': 'Стикеры',
		'nav.game': 'Наша игра',

		'hero.subtitle': 'Да, это мем.<br> И нет — это не шутка.',
		'hero.text': `Да, это мем. И нет — это не шутка. John Pork — это точка входа в сообщество, которое выходит за пределы Telegram и не живёт по чужим правилам.<br><br>Этот лендинг — не про продажу, не про обещанные иксы и не про быстрый хайп. Это цифровой мост между мемом, криптой и людьми, которые понимают, зачем они здесь.`,
		'hero.note':
			'Да, это мем. И нет — это не шутка. John Pork — это точка входа в сообщество, которое выходит за пределы Telegram и не живёт по чужим правилам.',

		'buttons.buy': 'Купить',
		'buttons.join': 'Присоединиться',
		'buttons.getStickers': 'Получить стикеры',
		'buttons.moreDetails': 'Подробнее',
		'buttons.try': 'Скоро',

		'roadmap.image1': '../img/roadmap-1-ru.png',
		'roadmap.image2': '../img/roadmap-2-ru.png',
		'roadmap.image3': '../img/roadmap-3-ru.png',
		'roadmap.image4': '../img/roadmap-4-ru.png',

		'meme.title': 'Да, это мем.<br> И нет — это не шутка.',
		'meme.text': `Сила мема не в биржевой накачке, а в формировании комьюнити, хороший мем это в первую очередь веселье и нарратив.<br><br>Если людям смешно и интересно значит люди верят и обмениваются, поэтому John Pork это попытка создать такой нарратив с чистого листа не вокруг инфлюенсера, медийной личности или группы аффилированных лиц, а от комьюнити и для комьюнити!`,
		'meme.subtext': 'Добавить стикеры Telegram чтобы поддержать нашу валюту и комьюнити.',
		'meme.sticker-note': '../img/sticker-note-ru.png',
		'meme.mobile-sticker-note': '../img/mobile-sticker-note-ru.png',

		'jpjob.title': 'John Pork — это просто мемкоин?',
		'jpjob.text1':
			'Нет! Это — ядро будущей фриланс-платформы внутри Telegram на блокчейне TON. <b>$JPORK</b> — основной токен платформы для оплаты, обеспечивающий дефицит и рост стоимости.',
		'jpjob.text2':
			'Фрилансеры (разработчики, дизайнеры, SMM) получают доступ к проектам и моментальные выплаты в $TON / $JPORK. Проекты быстро находят проверенных специалистов и сотрудничают безопасно через смарт-контракты.',
		'jpjob.text3':
			'Наша цель — объединить таланты и упростить поиск команды или работы в TON, убрав барьеры благодаря взаимодействию и оплате через Telegram и TON. Мы создаем основу для будущего работы в Telegram и Web3.',

		'game.lead': 'А помните этих ребят? Мы тоже <img src="../img/smirking-face.svg" alt="">',
		'game.text1':
			'Пришло время немного повеселиться и помочь нашему Джону выбить из них всё дерьмо, в хорошем смысле крипто-мемов!',
		'game.text2':
			'Самые активные, креативные и яростные участники этой охоты получают солидные награды от команды. Готовы разогнать скуку? <span class="minigame-date">Старт Q2 2026</span>',

		'footer.wallet': 'Публичный кошелёк',
		'footer.buyback': 'Байбэк кошелёк',
		'footer.lock': 'Лок токенов',
		'footer.follow': 'Следите за новостями:',

		'loader.text': 'Переключение языка...',
		// Архитектура страница (JP.job)
		'jpjob.page.title': 'Фриланс платформа',
		'jpjob.page.subtitle': 'Фриланс платформа',
		'jpjob.page.description1':
			'Наша платформа построена как саморегулируемая система, где каждое действие пользователя встроено в общую логику. Все процессы автоматизированы, прозрачны и направлены на поддержание баланса между участниками.',
		'jpjob.page.description2':
			'Архитектура адаптируется к спросу и нагрузке без ручного вмешательства, превращая сервис в устойчивую цифровую инфраструктуру, а не просто набор функций.',

		// Карточки преимуществ
		'jpjob.card1.title': 'Дефляционная механика',
		'jpjob.card1.desc': 'Постоянное уменьшение supply через авто сжигание (80%)',
		'jpjob.card2.title': 'Фонд стабилизации',
		'jpjob.card2.desc': '20% в cold storage + TON fees как буфер против volatility',
		'jpjob.card3.title': 'Авто маркет-мейкинг',
		'jpjob.card3.desc': 'Контракт покупает JPORK при падении цены',
		'jpjob.card4.title': 'Двухвалютная система',
		'jpjob.card4.desc': 'Unit of account (TON) vs Medium of exchange (JPORK)',
		'jpjob.card5.title': 'Циклическая экономика',
		'jpjob.card5.desc': 'Токены не застаиваются: часть сжигается, часть рециркулирует',
		'jpjob.card6.title': 'Следите за новостями!',
		'jpjob.card6.desc': 'Переходите в наш telegram канал',

		// Flow секция
		'flow.title': 'Базовый цикл сделки:',
		'flow.userX': 'Пользователь X<br>(Заказчик)',
		'flow.userY': 'Пользователь Y<br>(Соискатель)',
		'flow.step1.title': 'X Публикует проект',
		'flow.step1.desc': 'Стоимость: (N JPORK)',
		'flow.step2.title': 'Y откликается',
		'flow.step2.desc': 'Плата за отклик',
		'flow.step3.title': 'Смарт-контракт',
		'flow.step3.desc': 'автоматическое распределение N JPORK',

		// Economy секция
		'economy.title': 'Архитектура экономики:',
		'economy.card1.title': 'Механизм распределения платежей',
		'economy.card1.sub': 'Сжигание + резерв',
		'economy.card1.back.title1': 'Шаг 1:<br> Декомпозиция платежа',
		'economy.card1.back.text1': 'N (100% JPORK) = N1 (80%) + N2 (20%)',
		'economy.card1.back.title2': 'Шаг 2:<br> Судьба каждой части:',
		'economy.card1.back.text2':
			'N1 (80%) → <strong>Адрес сжигания</strong><br>Токены уничтожаются навсегда → уменьшается общее предложение → создаётся дефляционное давление.',
		'economy.card1.back.text3':
			'N2 (20%) → <strong>Холодный кошелёк </strong> Резерв для стабилизации рынка. Продаётся ТОЛЬКО при аномально высоком спросе → сглаживает скачки цены.',

		'economy.card2.title': 'Стабилизационный механизм',
		'economy.card2.sub': 'TON Fee → JPORK',
		'economy.card2.back.title': 'Как работают комиссии TON:',
		'economy.card2.back.text1': 'N (100% JPORK) = N1 (80%) + N2 (20%)',
		'economy.card2.back.title2': 'Логика:',
		'economy.card2.back.text2':
			'<strong>1.</strong> Все сетевые комиссии <strong>TON</strong> (gas) накапливаются в специальном страхующем фонде.',
		'economy.card2.back.text3':
			'<strong>2.</strong> При резкой волатильности (падение цены <strong>JPORK</strong> > заданного порога) смарт-контракт автоматически:',
		'economy.card2.back.text4':
			'Покупает JPORK за накопленные TON<br>Поддерживает цену, добавляя ликвидность<br>Это — встроенный market-maker против панических распродаж.',

		'economy.card3.title': 'Двухвалютная оценка',
		'economy.card3.sub': 'JPORK ⇄ TON',
		'economy.card3.back.title': 'Ключевая инновация:',
		'economy.card3.back.text1':
			'# Все расчёты <strong>ВНУТРИ</strong> системы — в <strong>JPORK</strong><br># Все <strong>ОЦЕНКИ</strong> стоимости — в <strong>TON</strong>',
		'economy.card3.back.title2': 'Преимущества:',
		'economy.card3.back.text2':
			'Для пользователей: Понимание реальной стоимости в стабильной валюте <strong>(TON)</strong>',
		'economy.card3.back.text3':
			'Для экосистемы: Все внутренние платежи — в нативном токене <strong>JPORK</strong>',
		'economy.card3.back.text4':
			'Защита от волатильности: Курсовая привязка только для оценки, не для платежей',

		// Effects секция
		'effects.title': 'Экономические эффекты модели:',
		'effects.card1.title': 'Для держателей JPORK:',
		'effects.card1.text1':
			'<strong>Дефляция:</strong> Постоянное сокращение предложения ведёт к росту цены при том же спросе',
		'effects.card1.text2': '<strong>Стабильность:</strong> Встроенные механизмы защиты от обвалов',
		'effects.card1.text3': '<strong>Utility:</strong> Токен нужен для любых операций на платформе',

		'effects.card2.title': 'Для пользователей платформы:',
		'effects.card2.text1': '<strong>Предсказуемость:</strong> Цены в TON понятны и стабильны',
		'effects.card2.text2': '<strong>Простота:</strong> Оплата в один клик в JPORK',
		'effects.card2.text3':
			'<strong>Безопасность:</strong> Смарт-контракты гарантируют честное распределение',

		'effects.card3.title': 'Для экосистемы TON:',
		'effects.card3.text1':
			'<strong>Увеличение транзакций:</strong> Каждое действие генерирует TON fees',
		'effects.card3.text2': '<strong>Рост utility:</strong> TON становится мерилом стоимости',
		'effects.card3.text3':
			'<strong>Сетевой эффект:</strong> Рост JP.job привлекает новых пользователей',

		// Breakthrough секция
		'breakthrough.title': 'ПРОРЫВНАЯ<br>МОДЕЛЬ',
		'breakthrough.item1.title': 'Равновесная экономика',
		'breakthrough.item1.desc': 'сжигание + стабилизация + ликвидность',
		'breakthrough.item2.title': 'Защита интересов всех сторон',
		'breakthrough.item2.desc': 'пользователей, держателей, экосистемы',
		'breakthrough.item3.title': 'Элегантная связка',
		'breakthrough.item3.desc':
			'с экосистемой <strong>TON</strong> без потери суверенитета <strong>JPORK</strong>',
		'breakthrough.item4.title': 'Двойная ценность',
		'breakthrough.item4.desc': 'утилитарная (платформа) + инвестиционная (дефляция)',
		'breakthrough.note':
			'По сути, вы создаёте не просто платформу, а автономную экономическую систему с встроенными стабилизаторами — это уровень DeFi 2.0 в рамках отдельного продукта.',
	},
};

class LanguageManager {
	constructor() {
		this.currentLang = 'en';
		this.langSwitcher = document.getElementById('langSwitcher');
		this.mobileLangSwitcher = document.querySelector('.mobile-lang-switcher');

		this.langIcon = document.getElementById('langIcon');
		this.mobileLangIcon = document.querySelector('.mobile-lang-icon');

		this.languageLoader = document.getElementById('languageLoader');
		this.loaderText = document.querySelector('.loader-text');

		this.isSwitching = false;
		this.switchDuration = 1200;

		this.init();
	}

	init() {
		const savedLang = localStorage.getItem('preferredLanguage');
		if (savedLang) {
			this.currentLang = savedLang;
		}

		this.applyLanguage();

		this.langSwitcher.addEventListener('click', e => {
			e.preventDefault();
			if (!this.isSwitching) {
				this.toggleLanguageWithLoader();
			}
		});

		if (this.mobileLangSwitcher) {
			this.mobileLangSwitcher.addEventListener('click', e => {
				e.preventDefault();
				if (!this.isSwitching) {
					this.toggleLanguageWithLoader();
				}
			});
		}

		this.updateButtonImage();
	}

	toggleLanguageWithLoader() {
		const mobileMenu = document.getElementById('mobileMenu');
		if (mobileMenu && mobileMenu.classList.contains('active')) {
			mobileMenu.classList.remove('active');
			document.body.style.overflow = '';
		}

		this.isSwitching = true;

		this.showLoader();

		setTimeout(() => {
			this.currentLang = this.currentLang === 'en' ? 'ru' : 'en';

			localStorage.setItem('preferredLanguage', this.currentLang);

			if (this.loaderText) {
				const loaderKey = 'loader.text';
				const langData = translations[this.currentLang];
				if (langData[loaderKey]) {
					this.loaderText.textContent = langData[loaderKey];
				}
			}

			this.updateButtonImage();

			setTimeout(() => {
				this.applyLanguage();
				setTimeout(() => {
					this.hideLoader();
					this.isSwitching = false;
				}, 300);
			}, 200);
		}, 500);
	}

	showLoader() {
		this.languageLoader.classList.add('active');
		document.body.style.overflow = 'hidden';

		const loaderKey = 'loader.text';
		const currentLang = this.currentLang === 'en' ? 'ru' : 'en';
		const langData = translations[currentLang];
		if (this.loaderText && langData[loaderKey]) {
			this.loaderText.textContent = langData[loaderKey];
		}
	}

	hideLoader() {
		this.languageLoader.classList.remove('active');
		document.body.style.overflow = '';
	}

	applyLanguage() {
		const langData = translations[this.currentLang];

		this.updateTextElements(langData);
		this.updateImages(langData);
		document.documentElement.lang = this.currentLang;
	}

	updateTextElements(langData) {
		const textElements = document.querySelectorAll('[data-key]:not(img)');

		textElements.forEach(element => {
			const key = element.getAttribute('data-key');
			if (langData[key]) {
				if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
					element.value = langData[key];
				} else {
					if (!element.classList.contains('loader-text')) {
						element.innerHTML = langData[key];
					}
				}
			}
		});
	}

	updateImages(langData) {
		const imageElements = document.querySelectorAll('img[data-key]');

		imageElements.forEach(img => {
			const key = img.getAttribute('data-key');
			if (langData[key]) {
				const newImage = new Image();

				newImage.onload = () => {
					img.src = langData[key];
					img.style.opacity = '0.7';
					setTimeout(() => {
						img.style.opacity = '1';
					}, 50);
				};

				newImage.src = langData[key];

				if (newImage.complete) {
					img.src = langData[key];
					img.style.opacity = '1';
				}
			}
		});

		const dataAttrImages = document.querySelectorAll('img[data-en][data-ru]');

		dataAttrImages.forEach(img => {
			const newSrc =
				this.currentLang === 'en' ? img.getAttribute('data-en') : img.getAttribute('data-ru');

			if (newSrc && img.src !== newSrc) {
				const newImage = new Image();

				newImage.onload = () => {
					img.src = newSrc;
					img.style.opacity = '0.7';
					setTimeout(() => {
						img.style.opacity = '1';
					}, 50);
				};

				newImage.src = newSrc;

				if (newImage.complete) {
					img.src = newSrc;
					img.style.opacity = '1';
				}
			}
		});
	}

	updateButtonImage() {
		if (this.currentLang === 'en') {
			this.langIcon.src = '../img/langRu.svg';
			this.langIcon.alt = 'Switch to Russian';

			if (this.mobileLangIcon) {
				this.mobileLangIcon.src = '../img/langRu.svg';
				this.mobileLangIcon.alt = 'Switch to Russian';
			}
		} else {
			this.langIcon.src = '../img/langEng.svg';
			this.langIcon.alt = 'Switch to English';

			if (this.mobileLangIcon) {
				this.mobileLangIcon.src = '../img/langEng.svg';
				this.mobileLangIcon.alt = 'Switch to English';
			}
		}
	}

	getCurrentLanguage() {
		return this.currentLang;
	}
}

document.addEventListener('DOMContentLoaded', () => {
	window.languageManager = new LanguageManager();
});

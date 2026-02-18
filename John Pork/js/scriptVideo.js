document.addEventListener('DOMContentLoaded', () => {
	const video = document.getElementById('heroVideo');
	const playBtn = document.getElementById('videoPlayBtn');
	const volumeBtn = document.getElementById('volumeBtn');
	const videoContainer = document.querySelector('.hero-video');

	if (!video || !playBtn || !volumeBtn) return;

	const volumeIcons = {
		mute: '../img/volume-mute.svg',
		low: '../img/volume-low.svg',
		medium: '../img/volume-medium.svg',
		high: '../img/volume-high.svg',
	};

	function getVolumeIcon(volume) {
		if (volume === 0 || video.muted) {
			return volumeIcons.mute;
		} else if (volume < 0.3) {
			return volumeIcons.low;
		} else if (volume < 0.7) {
			return volumeIcons.medium;
		} else {
			return volumeIcons.high;
		}
	}

	function updateVolumeIcon() {
		const volumeIcon = volumeBtn.querySelector('.volume-icon');
		volumeIcon.src = getVolumeIcon(video.volume);
	}

	function toggleSound() {
		if (video.muted) {
			video.muted = false;
			video.volume = 0.5;
		} else {
			video.muted = true;
		}
		updateVolumeIcon();
	}
	function enableSound() {
		if (video.muted) {
			video.muted = false;
			video.volume = 0.5;
			updateVolumeIcon();
			showSoundNotification();
		}
	}

	function showSoundNotification() {
		const notification = document.createElement('div');
		notification.className = 'sound-notification';
		notification.textContent = 'Sound is now enabled';
		notification.style.cssText = `
      position: absolute;
      bottom: 80px;
      right: 20px;
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 14px;
      z-index: 100;
      animation: fadeInOut 2s ease forwards;
    `;

		document.querySelector('.hero-video').appendChild(notification);

		setTimeout(() => {
			if (notification.parentNode) {
				notification.remove();
			}
		}, 2000);
	}

	function resetToPreview() {
		video.pause();
		video.currentTime = 0;
		playBtn.style.display = 'flex';
		videoContainer.classList.remove('playing');
	}

	playBtn.addEventListener('click', () => {
		video
			.play()
			.then(() => {
				playBtn.style.display = 'none';
				videoContainer.classList.add('playing');

				if (video.muted && video.volume === 0) {
				}
			})
			.catch(error => {
				console.error('Video play failed:', error);
				playBtn.style.display = 'flex';
			});
	});

	volumeBtn.addEventListener('click', e => {
		e.stopPropagation();
		toggleSound();
	});

	video.addEventListener('click', e => {
		if (!video.paused && video.currentTime > 0) {
			resetToPreview();
		}
	});

	video.addEventListener('ended', () => {
		resetToPreview();
	});

	video.addEventListener('pause', () => {
		if (!video.ended) {
			playBtn.style.display = 'flex';
			videoContainer.classList.remove('playing');
		}
	});

	video.addEventListener('volumechange', updateVolumeIcon);

	resetToPreview();
	updateVolumeIcon();

	const style = document.createElement('style');
	style.textContent = `
    @keyframes fadeInOut {
      0% { opacity: 0; transform: translateY(10px); }
      20% { opacity: 1; transform: translateY(0); }
      80% { opacity: 1; transform: translateY(0); }
      100% { opacity: 0; transform: translateY(-10px); }
    }
  `;
	document.head.appendChild(style);
});

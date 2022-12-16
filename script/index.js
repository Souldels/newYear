for (i = 0; i < 50; i++) {
	let div = document.createElement("div");
	div.className = "snowflake";
	document.body.append(div);
}

document.addEventListener("DOMContentLoaded", () => {
	const newYear = new Date("Jan 1 2023 00:00:00");

	const daysVal = document.querySelector(".days");
	const hoursVal = document.querySelector(".hours");
	const minutesVal = document.querySelector(".minutes");
	const secondsVal = document.querySelector(".seconds");

	const daysText = document.querySelector(".days-text");
	const hoursText = document.querySelector(".hours-text");
	const minutesText = document.querySelector(".minutes-text");
	const secondsText = document.querySelector(".seconds-text");

	function declOfNum(number, titles) {
		let cases = [2, 0, 1, 1, 1, 2];
		return titles[
			number % 100 > 4 && number % 100 < 20
				? 2
				: cases[number % 10 < 5 ? number % 10 : 5]
		];
	}

	const timer = () => {
		let currentDate = new Date();
		let left = newYear - currentDate;

		let days = Math.floor(left / 1000 / 60 / 60 / 24);
		let hours = Math.floor(left / 1000 / 60 / 60) % 24;
		let minutes = Math.floor(left / 1000 / 60) % 60;
		let seconds = Math.floor(left / 1000) % 60;

		daysVal.textContent = days;
		hoursVal.textContent = hours;
		minutesVal.textContent = minutes;
		secondsVal.textContent = seconds;

		daysText.textContent = declOfNum(days, ["день", "дня", "дней"]);
		hoursText.textContent = declOfNum(hours, ["час", "часа", "часов"]);
		minutesText.textContent = declOfNum(minutes, ["минута", "минуты", "минут"]);
		secondsText.textContent = declOfNum(seconds, [
			"секунда",
			"секунды",
			"секунд"
		]);
	};
	timer();
	setInterval(timer, 1000);
});

const playBtn = document.querySelector('.play-btn');
const pauseBtn = document.querySelector('.pause-btn');


const playBtnClick = () => {

	playBtn.addEventListener('click', () => {

		playBtn.classList.add('hidden');
		pauseBtn.classList.remove('hidden');

		const playAudio = () => {
			const audio = document.getElementById('audio');
			audio.play();
		}
		playAudio();
	})
}
playBtnClick();

const pauseBtnClick = () => {
	pauseBtn.addEventListener('click', () => {
		playBtn.classList.remove('hidden');
		pauseBtn.classList.add('hidden');

		const pauseAudio = () => {
			const audio = document.getElementById('audio');
			audio.pause();
		}

		pauseAudio();
	})
}

pauseBtnClick();


function timeToString(time) {
	let diffinHrs = time / 3600000
	let hh = Math.floor(diffinHrs)

	let diffinMin = (diffinHrs - hh) * 60
	let mm = Math.floor(diffinMin)

	let diffinSec = (diffinMin - mm) * 60
	let ss = Math.floor(diffinSec)

	let diffinMs = (diffinSec - ss) * 100
	let ms = Math.floor(diffinMs)

	let formattedMM = mm.toString().padStart(2, '0')
	let formattedSS = ss.toString().padStart(2, '0')
	let formattedMS = ms.toString().padStart(2, '0')

	return `${formattedMM}:${formattedSS}:${formattedMS}`
}

let startTime
let elapsedTime = 0
let timerInterval

function print(txt) {
	document.getElementById('display').innerHTML = txt
}

function start() {
	startTime = Date.now() - elapsedTime
	timerInterval = setInterval(function printTime() {
		elapsedTime = Date.now() - startTime
		print(timeToString(elapsedTime))
	}, 10)
	showButton('PAUSE')
}

function pause() {
	clearInterval(timerInterval)
	showButton('PLAY')
}

function reset() {
	clearInterval(timerInterval)
	print('00:00:00')
	elapsedTime = 0
	showButton('PLAY')
}

function showButton(buttonKey) {
	const buttonToShow = buttonKey === 'PLAY' ? playButton : pauseButton
	const buttonToHide = buttonKey === 'PLAY' ? pauseButton : playButton
	buttonToShow.style.display = 'block'
	buttonToHide.style.display = 'none'
}

let playButton = document.getElementById('playButton')
let pauseButton = document.getElementById('pauseButton')
let resetButton = document.getElementById('resetButton')

playButton.addEventListener('click', start)
pauseButton.addEventListener('click', pause)
resetButton.addEventListener('click', reset)

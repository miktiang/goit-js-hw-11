import '../sass/main.scss';

const refs = {
    startBtn: document.querySelector('.start-btn'),
    stopBtn: document.querySelector('.stop-btn'),
}

let intervalId = null;

refs.startBtn.addEventListener('click', startBtnClick)
refs.stopBtn.addEventListener('click', stopBtnClick)

function startBtnClick() {
    console.log('start btn click')
    const body = document.querySelector('body')
    intervalId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    refs.startBtn.removeEventListener('click', startBtnClick)
}

function stopBtnClick() {
    console.log('stop btn click')
    clearInterval(intervalId)
    refs.stopBtn.removeEventListener('click', stopBtnClick)
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
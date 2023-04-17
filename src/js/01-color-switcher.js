function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
let timerId = null;

function getStarted() {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  btnStart.disabled = true;
}

function getStoped() {
  clearInterval(timerId);
  btnStart.disabled = false;
}

btnStart.addEventListener('click', getStarted);
btnStop.addEventListener('click', getStoped);

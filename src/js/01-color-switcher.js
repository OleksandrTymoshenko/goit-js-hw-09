let timeId = null;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
    btnStart: document.querySelector('[data-start]'),
    btnStop: document.querySelector('[data-stop]')
};

refs.btnStart.addEventListener('click', hendleChangeBodyColor);

function hendleChangeBodyColor(e) {
    refs.btnStop.style.backgroundColor = 'red';
    refs.btnStart.style.backgroundColor = '';
    timeId = setInterval(() => {
        console.log(timeId);
        document.body.style.backgroundColor = getRandomHexColor();
}, 1000);
    if (timeId) {
        refs.btnStart.disabled = true;
refs.btnStop.disabled = false;
    }
}

refs.btnStop.addEventListener('click', hendlerStopChangeBodyColor);

function hendlerStopChangeBodyColor(e) {
    clearInterval(timeId);
    refs.btnStart.disabled = false;
    refs.btnStart.style.backgroundColor = 'green';
    refs.btnStop.disabled = true;
refs.btnStop.style.backgroundColor = '';
}
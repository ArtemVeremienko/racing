const score = document.querySelector('.score');
const game = document.querySelector('.game');
const start = document.querySelector('.start');
const gameArea = document.querySelector('.gamearea');

const car = document.createElement('div');
car.classList.add('car');

start.addEventListener('click', startGame);

document.addEventListener('keydown', startMove);
document.addEventListener('keyup', stopMove);

const keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowRight: false,
  ArrowLeft: false,
};

const setting = {
  start: false,
  score: 0,
  speed: 3,
}

function startGame() {
  start.classList.add('hide');
  setting.start = true;
  gameArea.append(car);
  requestAnimationFrame(playGame);
}

function playGame() {
  if (setting.start) {
    requestAnimationFrame(playGame);
  }
}

function startMove(event) {
  event.preventDefault();
  keys[event.key] = true;
}

function stopMove() {
  event.preventDefault();
  keys[event.key] = false;
}

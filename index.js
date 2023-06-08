const ball = document.getElementById("ball");
const block = document.getElementById("block");
const exit = document.getElementById("exit");
const startGame = document.getElementById("start");
const startGameBtn = document.getElementById("startGame-btn");
const restartGame = document.getElementById("restart");
const restartGameBtn = document.getElementById("restart-btn");

var leftx;
var topx;
function randomPosition() {
  var blockHeight = block.offsetHeight;
  var blockWidth = block.offsetWidth;
  var exitHeight = exit.offsetHeight;
  var exitWidth = exit.offsetWidth;
  var heightMax = blockHeight - exitHeight;
  var widthMax = blockWidth - exitWidth;
  leftx = Math.floor(Math.random() * widthMax);
  topx = Math.floor(Math.random() * heightMax);
  exit.style.left = `${leftx}px`;
  exit.style.top = `${topx}px`;
}

var moveRight = 0;
var moveDown = 0;
function eventListeners() {
  document.addEventListener("keydown", moveBall);
  function moveBall(event) {
    if (event.key === "d" && moveRight < 630) {
      moveRight += 5;
      ball.style.marginLeft = `${moveRight}px`;
    }
    if (event.key === "a" && moveRight > 0) {
      moveRight -= 5;
      ball.style.marginLeft = `${moveRight}px`;
    }
    if (event.key === "s" && moveDown < 430) {
      moveDown += 5;
      ball.style.marginTop = `${moveDown}px`;
    }
    if (event.key === "w" && moveDown > 0) {
      moveDown -= 5;
      ball.style.marginTop = `${moveDown}px`;
    }
  }

  document.addEventListener("keyup", correct);
  function correct(event) {
    if (
      moveRight > leftx &&
      moveRight < leftx + 10 &&
      moveDown > topx &&
      moveDown < topx + 10
    ) {
      alert("Yeah ! You Won ");
      restartGame.style.display = "block";
      document.removeEventListener("keydown", moveBall);
      document.removeEventListener("keyup", correct);
      moveDown = 0;
      moveRight = 0;
    }
  }
}
eventListeners();

startGameBtn.addEventListener("click", startTheGame);
function startTheGame() {
  block.style.display = "block";
  randomPosition();
  startGame.style.display = "none";
}

restartGameBtn.addEventListener("click", RestartTheGame);
function RestartTheGame() {
  ball.style.marginLeft = "0px";
  ball.style.marginTop = "0px";
  randomPosition();
  eventListeners();
}

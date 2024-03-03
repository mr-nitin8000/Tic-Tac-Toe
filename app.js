let boxes = document.querySelectorAll(".box");
let gameContainer = document.querySelector(".container");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let showBtn = document.querySelector("#show-btn");
let hideBtn = document.querySelector("#hide-btn");
let mgContainer = document.querySelector(".msg-container");
let mg = document.querySelector("#mg");
let turnO = true;
let turnCount = 0;
const winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.style.color = "black";
      box.style.backgroundColor = "white";

      box.innerText = "O";
      turnCount++;
      checkDraw();
      turnO = false;
    } else {
      box.style.color = "blue";
      box.style.backgroundColor = "yellow";
      box.innerText = "X";
      turnCount++;
      checkDraw();
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
const checkDraw = () => {
  console.log(turnCount);
  if (turnCount === 9) {
    mg.innerText = `OOPS, Match has been Draw`;
    mgContainer.classList.remove("hide");
    gameContainer.classList.add("hide");
    resetBtn.classList.add("hide");
  }
};
const disabledBox = () => {
  for (const box of boxes) {
    box.disabled = true;
  }
};
const enabledBox = () => {
  for (const box of boxes) {
    box.disabled = false;
    box.style.backgroundColor = "#ffffc7";
    box.innerText = "";
  }
};
const showWinner = (win) => {
  if (win === "O") {
    mg.style.color = "black";
  } else {
    mg.style.color = "blue";
  }
  mg.innerText = `Congratulations, Winner is ${win}`;
  mgContainer.classList.remove("hide");
  gameContainer.classList.add("hide");
  resetBtn.classList.add("hide");
};

const checkWinner = () => {
  for (let pattern of winpatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos2Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      }
    }
  }
};
const resetGame = () => {
  turnCount = 0;
  turnO = true;
  enabledBox();
  mgContainer.classList.add("hide");
  gameContainer.classList.remove("hide");
  resetBtn.classList.remove("hide");
  hideBtn.classList.add("hide");
};
const showBoard = () => {
  mgContainer.classList.add("hide");
  gameContainer.classList.remove("hide");
  hideBtn.classList.remove("hide");
};
const hideBoard = () => {
  mgContainer.classList.remove("hide");
  gameContainer.classList.add("hide");
  hideBtn.classList.add("hide");
  hideBtn.classList.add("hide");
};
newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
showBtn.addEventListener("click", showBoard);
hideBtn.addEventListener("click", hideBoard);

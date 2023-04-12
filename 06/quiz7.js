const $score = document.querySelector("#point");
const $life = document.getElementById("life");
const $box = document.querySelector(".box");
const $bug = document.querySelector("#bug");

let score = parseInt($score.innerText);
let life = parseInt($life.innerText);

const bugOnclick = (event) => {
  event.stopPropagation();
  score++;
  $score.innerText = score;
  $bug.style.left = `${Math.floor(Math.random() * 380)}px`;
  $bug.style.top = `${Math.floor(Math.random() * 380)}px`;
};

const boxOnclick = (event) => {
  life--;
  $life.innerText = life;
  if (life == 0) {
    alert("gameover");
  }
};

$bug.addEventListener("click", bugOnclick);
$box.addEventListener("click", boxOnclick);

const $progress = document.querySelector("#progress");

let percent = 0;
let wayPlue = 1;

const changePer = () => {
  if (percent <= 0) {
    percent = 0;
    wayPlue = wayPlue * -1;
  } else if (percent >= 100) {
    percent = 100;
    wayPlue = wayPlue * -1;
  }
  percent += wayPlue;
  $progress.style.width = `${percent}%`;
};
setInterval(changePer, 10);

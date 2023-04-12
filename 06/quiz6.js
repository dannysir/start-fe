const $userNum = document.querySelector("#num");
const $result = document.querySelector("#result");
const $btn = document.querySelector("#btn");
const isNum = true;

const gugudan = (a) => {
  let str = ``;
  for (let i = 1; i < 10; i++) {
    str += `<div>${a} x ${i} = ${a * i}</div>`;
  }
  $result.innerHTML = str;
};

const onClick = (event) => {
  event.preventDefault();
  const choosenNum = $userNum.value;
  if (isNaN(choosenNum)) {
    alert("Only Number");
  } else {
    gugudan(choosenNum);
  }
};

$btn.addEventListener("click", onClick);

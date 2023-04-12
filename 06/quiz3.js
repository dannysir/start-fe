const $red = document.querySelector(".add-red");
const $box = document.querySelector(".box");
const $addBtn = document.querySelector("add-btn");
$red.addEventListener("click", () => {
  $box.classList.add("red");
});

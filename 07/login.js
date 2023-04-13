//const $id = document.querySelector("[name = id]");
const $id = document.getElementsByName("id");
const $pw = document.querySelector("[name = pw]");
const $btn = document.querySelector("button");
const $form = document.querySelector("form");

const loginFun = (event) => {
  event.preventDefault();
  const id = $id.value;
  const pw = $pw.value;

  saveName(id);
};

const saveName = (name) => {
  console.log(name);
};

$form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log($form);
  console.log($pw.value);
});

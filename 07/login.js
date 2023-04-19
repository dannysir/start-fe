const $id = document.querySelector("[name = id]");
const $pw = document.querySelector("[name = pw]");
const $btn = document.querySelector("button");
const $form = document.querySelector("form");
const $result = document.querySelector("#result");
// 입력한 id,pw가 맞을경우엔 success , 아니면 error출력
const realId = "hello";
const realPw = "world";

const loginFun = (event) => {
  event.preventDefault();
  const id = $id.value;
  const pw = $pw.value;

  saveName(id, pw);
};

const saveName = (name, password) => {
  console.log(name, password);
  if (name == realId && password == realPw) {
    $result.innerHTML = "<div class = success>success</div>";
  } else {
    $result.innerHTML = "<div class = error>error</div>";
  }
};

$form.addEventListener("submit", loginFun);

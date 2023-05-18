const eng = document.querySelector("#eng");
const kor = document.querySelector("#kor");
const $nextBtn = document.querySelector("#next");
const $page = document.querySelector("#page");
const $timer = document.querySelector(".timer");
const $translateBtn = document.querySelector("#translate");
const $box = document.getElementById("box");
const $loading = document.getElementById("loading");
const listUrl =
  "https://gist.githubusercontent.com/niceaji/d34fcd2d593bef75c277fe1f4a0ee519/raw/6698dab524040e1f0d48d4f8282476a5e5b53640/sentences.json";
const translateUr = "https://translate.google.com/?sl=en&tl=ko&text=";

let page = 1;
let percent = 0;
let firstIndex = 0;
let newArr = [];
let sentence = "";
let load;

function fetchJson({ callback }) {
  fetch(listUrl)
    .then((response) => response.json())
    .then((json) => {
      callback(json);
    });
}
// fetch
function submitForm() {
  if (page < 50) {
    page++;
  } else if (page == 50) {
    alert("끝!");
  }
  percent = 0;
  fetchJson({ callback: renderItems });
}
function newFetch() {
  fetchJson({ callback: firstPage });
}

function renderItems(data) {
  let rndNum = 0;
  while (newArr.includes(rndNum)) {
    rndNum = Math.ceil(Math.random() * data.length) - 1;
  }
  newArr.push(rndNum);
  const { en, ko } = data[rndNum];
  sentence = en;
  eng.innerText = `${en}`;
  kor.innerText = `${ko}`;
  $page.innerText = `${page}/${data.length}`;
}
function firstPage(data) {
  let rndNum = Math.ceil(Math.random() * data.length);
  newArr.push(rndNum);
  const { en, ko } = data[rndNum];
  sentence = en;
  eng.innerText = `${en}`;
  kor.innerText = `${ko}`;
  $page.innerText = `${page}/${data.length}`;
}

function newWin() {
  window.open(`${translateUr}${sentence}`);
}
let newInt = setInterval(() => {
  if (page <= 50) {
    percent += 1 / 6;
    $timer.style.width = `${percent}%`;
    if (percent >= 100) {
      eng.classList.add("hidden");
      $translateBtn.disabled = true;
      submitForm();
      percent = 0;
    } else if (percent >= 50) {
      eng.classList.remove("hidden");
      $translateBtn.disabled = false;
    }
  } else {
    clearInterval(newInt);
  }
}, 10);

function loading() {
  $box.style.display = "none";

  load = setInterval(function () {
    $box.style.display = "block";
    $loading.style.display = "none";
    clearInterval(load);
  }, 500);
}

function init() {
  loading();
  newFetch();
  $nextBtn.addEventListener("click", submitForm);
  $translateBtn.addEventListener("click", newWin);
}
init();

const apiUrl = "https://dapi.kakao.com/v2/search/web";
const KAKAO_API_KEY = "9d986ddcc762c78c5e1564eb1354ceae";

const $searchForm = document.getElementById("searchForm");
const $searchInput = document.getElementById("searchInput");
const $item = document.getElementById("item");

let page = 1;

function fetchApi({ page, query, callback }) {
  const url = `${apiUrl}?query=${query}&size=10&page=${page}`;
  const options = {
    headers: {
      Authorization: `KakaoAK ${KAKAO_API_KEY}`,
    },
  };
  fetch(url, options)
    .then((response) => response.json())
    .then((json) => {
      callback(json);
    });
}

function submitForm(event) {
  event.preventDefault();
  const query = $searchInput.value;
  fetchApi({ page: 1, query, callback: renderItems });
}

function renderItems(data) {
  let result = [];
  for (let i = 0; i < date.documents.length; i++) {
    const { title, datetime, contents } = date.document[i];
    const el = `<div class="column is-one-third">
        <div class="card">
          <div class="card-content">
            <p class="title">${title}</p>
            <p class="subtitle">${datetime}</p>
            <div class="content">${contents}</div>
          </div>
        </div>
      </div>`;
    result.push(el);
  }
  //date를 item dom으로 변환

  //items에 innerHtml
  $items.innerHTML += result.join("");
}

$searchForm.addEventListener("submit", submitForm);

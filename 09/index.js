// const $plusBtn = document.querySelector("#plus");
// const $minBtn = document.querySelector("#min");
// const $count = document.querySelector(".count");
// let num = $count.innerText;
// const plusEvent = (event) => {
//     num++
//     $count.innerText = num;
// };
//
// function minEvent() {
//     num--
//     $count.innerText = num;
// }
//
// $minBtn.addEventListener("click", minEvent);
// $plusBtn.addEventListener("click", plusEvent);
const $root = document.querySelector('#root');
function createButton({text = '', onClick}) {
    const $btn = document.createElement('button');
    $btn.textContent = text;
    $btn.addEventListener("click", onClick);
    return $btn;
}
function plus(){
    console.log('plus');
    setCount(++count);
}
function minus() {
    console.log('min');
    setCount(--count);
}

function createCountWrapper({count = 0, className = ''}) {
    const setCount = (count) => {
      $wrapper.textContent = count;
    }
    const $wrapper = document.createElement('div');
    $wrapper.classList.add(className);
    $wrapper.textContent = count;
    return {$count: $wrapper, setCount};
}
$plusButton = createButton({text: 'plus', onClick: plus});
$minButton = createButton({text: 'minus', onClick: minus})
const {countWrapper, setCount} = createCountWrapper({count: 0, className:'count'})
$root.append(countWrapper, $plusButton, $minButton);

const $box = document.getElementById("box");
const $body = document.querySelector("body");

$box.style.height = "200px";
$box.style.width = "200px";
$box.style.left = "100px";
$box.style.position = "absolute";
$box.style.backgroundColor = "gray";
let x = 0;
let y = 0;
let offset = { x: 0, y: 0 };
let isDown = false;
$body.style.height = "100vh";

// $box.addEventListener("mousedown", () => {
//   $box.style.left = `${x}px`;
//   $box.style.top = `${y}px`;
//   isDown = true;
// });

// $box.addEventListener("mouseup", () => {
//   isDown = false;
// });

// document.body.addEventListener("mousemove", drag);

// function drag(event) {
//   x = event.clientX;
//   y = event.clientY;
//   if (isDown == true) {
//     $box.style.left = `${x - 100}px`;
//     $box.style.top = `${y - 100}px`;
//   }
// }

const boxMovement = (box) => {
  if (isDown) {
    box.style.left = `${event.clientX - 50}px`;
    box.style.top = `${event.clientY - 50}px`;
    console.log("move");
  }
};

const mouseDown = () => {
  isDown = true;
  console.log("down");
};

const mouseUp = () => {
  isDown = false;
  console.log("up");
};

const setEvent = (box) => {
  box.addEventListener("mouseup", mouseUp);
  box.addEventListener("mousedown", mouseDown);
  box.addEventListener("mousemove", () => {
    boxMovement(box);
  });
};

const init = () => {
  setEvent($box);
};

init();

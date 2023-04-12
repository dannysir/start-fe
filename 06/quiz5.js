const $box = document.querySelector(".box");
const $body = document.querySelector("body");
const $secBox = document.querySelector(".box1");
let isDown = false;

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
  setEvent($secBox);
};

init();

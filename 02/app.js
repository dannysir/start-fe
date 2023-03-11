//Number
var count = 5;

//String
var count = "5";

console.log(count);

var nick = "Aiden";
var nick = "Aiden";

//Boolean
var isMan = true;

//Function
var log = function (str) {
  console.log(str);
};

function log() {}

log(nick);

//Object : 이름붙은 값(프로퍼티)들의 모임
var image = { alt: "test" };

image.width = 100;
image.height = 100;

console.log(image);
console.log(image.width);
console.log(image["width"]);

//Array
var image = ["1.jpg", "2.jpg"];
console.log(image);
console.log(image, image.length);

image[0] = "3.jpg";
console.log(image);

image[3] = "4.jpg";
console.log(image);

var a;
var nick = null;
console.log(a, nick);

//주요연산자
console.log(1 + 2);
console.log("a" + "b");

//동등, 일치
"" == "0";
0 == "";
0 == "0";

//논리곱 - and
if (isHero && isHulk) {
  //둘다 true일때 실행
}

//논리합 - or
if (isHero && isHulk) {
  //둘 중 하나가 trued일때
}

//논리부정 - !
if (!isHero) {
  //영웅이 아니라면
}

a = "a";
if (a) {
  // a = true
  console.log(1);
}

if (nick) console.log("hi~" + nick);

if (!!nick) console.log("hi~" + nick);

typeof nick; //string

var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length - 1; i++) {
  console.log(arr[i]);
}

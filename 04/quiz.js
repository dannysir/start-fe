// // 문제 1
// const year = 2022;
// const month = 11;
// const day = 3;

// // quiz
// const dateString = `${year}-${month}-${day}`;
// // 출력: 2022-12-03
// console.log(dateString);

// // 문제 2
// const dateString = "2022-12-12";

// // quiz
// let arr = dateString.split("-");

// // 출력: [2022,12,12];
// console.log(arr.map((a) => parseInt(a)));

// //문제 3
// const text = "나는 XX를 좋아해";
// const item = "JS";

// // quiz
// console.log(text.replace("XX", item));
// // 출력: 나는 JS를 좋아해

// //문제 4
// const text = "안녕하세요. 나는 사람입니다.";
// const searchText = "사람";

// // quiz
// console.log(text.includes(searchText));
// // 출력: true

// //문제 5
// const point1 = [12, 34, 80, 72];
// const point2 = [1, 80, 94];
// const point3 = point2.concat(point1);
// let answer = 0;
// for (let i = 0; i < point3.length; i++) {
//   answer += point3[i];
// }
// console.log(answer);
// // quiz
// // point3이 생길수도 있을때 대응

// // 출력: 373 (모든 배열값들이 합)

// //문제 6
// const a = 1.2;
// const b = 3.4;

// // quiz
// console.log(parseInt(a) + parseInt(b));
// // 출력: 4

// //문제 7
// const min = 1;
// const max = 10;

// // quiz

// console.log(parseInt(Math.random() * (max - min) + min));
// //출력: 3 (1~10 포함한 랜덤수)

// //문제 8
// const target = 10;
// const num = 3;

// // quiz
// // target이 num이 배수인지
// console.log(target % num == 0);
// // 출력: false

// //문제 9
// const nick = "kakao";

// // quiz
// console.log(nick.toUpperCase());
// // 출력: KAKAO

// // 문제 10
// const items = [1, "a", true, ["a"], { n: 1 }];
// const arr = [];

// for (let i = 0; i < items.length; i++) {
//   if (typeof items[i] != "object") {
//     arr.push(items[i]);
//   }
// }
// // quiz
// // 출력: [1,'a',true]
// console.log(arr);

// // 문제 11
// const items = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
// const pageSize = 3;

// for (let i = pageSize; i < items.length; i += pageSize + 1) {
//   items.splice(i, 0, "---");
// }
// // quiz
// // pageSize에 따라 배열값 분리해서 출력
// // pageSize=2 일때는 맨끝에 --- 없어야함
// console.log(items.toString());
// // 출력: a,b,c---d,e,f---g,h,i---j

// // 문제 12

// const items = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
// const pageSize = 3;

// // quiz

// let newArr = [];

// while (items.length != 0) {
//   newArr.push(items.splice(0, pageSize));
// }
// console.log(newArr);

// // pageSize에 따라 배열값 분리해서 출력

// // 출력: [ [a,b,c], [d,e,f], [g,h,i], [j] ]

// // 문제 13
// const items = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
// const pageSize = 3;
// const item = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
// let newArr = [];
// while (items.length != 0) {
//   newArr.push(items.splice(0, pageSize));
// }
// const getStartIndexByPage = function (page) {
//   console.log(item.indexOf(newArr[page][0]));
//   // quiz
// };

// // 출력
// getStartIndexByPage(1); // 0
// getStartIndexByPage(2); // 3
// getStartIndexByPage(3); // 6

// // 문제 14

// const phoneNumber = `010-1234-1234`;

// // quiz

// // xxx-xxxx-xxxx 패턴찾기
// const RegNum = /\d{3}-\d{4}-\d{4}/;

// console.log(RegNum.test(phoneNumber));
// // 출력: true

// // 문제 15

// const user = { nick: "nio", age: 20, location: "제주" };

// // quiz
// user.age = 21;
// user.location = `부산`;
// console.log(user);
// // 출력: {nick:'nio', age:21, name:'부산'}

// // 문제 16
// const text = "{a:1, b:2}";
// const textToObj = JSON.parse(
//   text.replace(/'/g, '"').replace(/(\w+):/g, '"$1":')
// );

// console.log(textToObj);
// // quiz

// // 출력: {a:1 , b:2}

// // 문제 17
// const user = { nick: "nio", age: 20, location: "제주" };

// console.log(JSON.stringify(user));
// console.log(typeof JSON.stringify(user));

// // quiz

// // 출력: string "{ nick: 'nio', age: 20, location: '제주' }"

// //문제 18
// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // quiz
// const newFilter = items.filter((a) => {
//   if (a % 2 == 0) {
//     return a;
//   }
// });
// console.log(newFilter);
// // 출력: 짝수만 [2,4,6,8,10]

//문제 19
const list = [
  {
    id: 1,
    title: "JS",
    isPublic: true,
  },
  {
    id: 2,
    title: "기본",
    isPublic: true,
  },
  {
    id: 3,
    title: "ecma",
    isPublic: true,
  },
  {
    id: 4,
    title: "dom",
    isPublic: false,
  },
];

// quiz
const newArr = [];
const newFilter = list.filter((a) => {
  if (a.isPublic == true) {
    newArr.push(a.title);
  }
});
console.log(newArr);
// 출력: ['JS','기본','ecma']  isPublic=true 의  title만 뽑기

//문제 20
const dday = "2022-02-02";

//quiz
const date = new Date(dday);
date.setDate(date.getDate() + 1);

console.log(date.toISOString().slice(0, 10));
// 출력: '2022-02-03'

const title = "jeju";
const url = "http://daum.net/" + title;
const url2 = `http://daum.net/${title}`;

//console.log(url, url2);

const sum = (a, b = 1) => {
  return a + b;
};

//console.log(sum(1));
const arr = [1, 2, 3];
const [x, y, z] = [...arr];
//console.log(arr.map((item, index) => item * 2));
//console.log(...arr);
//onsole.log(x, y, z);

const obj = (...rest) => {
  console.log(rest);
};

obj(1, 3, 3, 4);

const number = 1;
const obj1 = {
  number,
  playGmae() {
    return null;
  },
};

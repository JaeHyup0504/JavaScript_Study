// 배열의 요소로 함수를 할당
const myArr = [
  function (a, b) {
    return a + b;
  },
  function (a, b) {
    return a - b;
  },
];

console.log(myArr[0](2, 4), myArr[1](2, 4));

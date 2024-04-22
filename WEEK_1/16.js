// 배열

// 1. 생성
// 1-1. 기본 생성
let fruits = ["사과", "바나나", "오렌지"];

// 1-2. 크기 지정
let number = new Array(5);

console.log(fruits.length);
console.log(number.length);

// 2. 요소 접근
console.log(fruits[0]);
console.log(fruits[1]);

// 3. 배열 메소드
// 3-1 push
fruits.push("오렌지");
// console.log(fruits)

// 3-2. pop
// 배열의 마지막 요소 제거
fruits.pop();
console.log(fruits);

// 3-3. shift
// 배열의 첫번째 요소 제거
fruits.shift();
console.log(fruits);

// 3-4 unshift
// 배열의 첫번째 요소 추가
fruits.unshift("포도");
console.log(fruits);

// 3-5. splice
// 위치를 지정하고 어떤 요소를 삭제 및 변경
fruits.splice(1, 1, "포도");
console.log(fruits);

// 3-6. slice
let slice = fruits.slice(1, 2);
console.log(slice);

// 1) forEach, map, filter, find
let numbers = [1, 2, 3, 4, 5];

// 매개변수 자리에 함수를 넣는 것 : 콜백 함수
numbers.forEach(function (item, idx) {
  console.log(item, idx);
});

// 2) map : 항상 원본 배열의 길이만큼 return 된다.
let mapArr = numbers.map(function (item) {
  // return 필수
  return item * 2;
});
console.log(mapArr);

// 3) filter
let filterArr = numbers.filter(function (item) {
  return item === 5;
});
console.log(filterArr);

// 4) find
let reuslt = numbers.find(function (item) {
  return item > 3;
});
console.log(reuslt);

// for, while => ~동안 : 반복문

// for(초기값; 조건식; 증감식){

// }

// i라는 변수는 0부터 시작할거야
// i라는 변수가 10에 도달하기 전까지 계속할거야
// i라는 변수는 한 사이클이 돌고 나면 1을 더할거야
for (let i = 0; i < 10; i++) {
  //   console.log(i);
}

// 배열과 for문은 짝궁이다.
const arr = ["one", "two", "three", "four", "five"];
for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
}

for (let i = 0; i < 10; i += 2) {
  //   console.log(i + 2);
}

// for ~ in문
// 객체의 속성을 출력하는 문법
let person = {
  name: "louis",
  age: 29,
};
for (let key in person) {
  //   console.log(key, person[key]);
}

// 구조분해할당 : destructuring(de + structure + ing)
// de = not
// structure = 구조
// 배열이나, 객체의 속성

// 1) 배열의 경우
// let [value1, value2] = [1, "new"];
// console.log(value1, value2);

// let arr = ["1", "2", "3"];
// let [a, b, c, d = "4"] = arr;
// console.log(a, b, c, d);

// 2) 객체인 경우
// 구조분해할당
// let { name, age } = {
//   name: "louis",
//   age: 29,
// };

// 새로운 이름으로 할당
let user = {
  name: "louis",
  age: 29,
};

// let { name: newName, age: newAge } = user;
// console.log(newName, newAge);

// birthday = "5월 4일" : 초기값 설정
let { name, age, birthday = "5월 4일" } = user;
console.log(name, age, birthday);

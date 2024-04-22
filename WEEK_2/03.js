// 단축 속성명 : property shorthand
const name = "abc";
const age = 29;

// key - value
const obj = { name, age };
const obj2 = { name: name, age: age };

// 전개 구문 = spread operator
// destructuring과 함께 가장 많이 사용되는 es6 문법 중 하나!
// let arr = [1, 2, 3];
// let newArr = [...arr, 4];
// console.log(newArr);

// 객체
// let user = {
//   name: "louis",
//   age: 29,
// };

// let user2 = { ...user };
// console.log(user2);

// 나머지 매개변수(rest parameter)
const exampleFuc = (a, b, c, ...args) => {
  console.log(a, b, c);
  console.log(...args);
};
// exampleFuc(1, 2, 3, 4, 5, 6);

// 템플릿 리터럴(Template Literal)
const test = "안녕하세요";
console.log(`Hello World ${test}`);
console.log(`
    Hellow
        My name is Louis

        Nice to meet you!
`);

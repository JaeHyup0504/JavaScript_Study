// 일급객체로써의 함수 (2)
const person = {
  name: "louis",
  age: 29,
  isMarried: false,
  sayHello: () => console.log(`hello ${this.name}`), // 화살표 함수는 this를 바인딩하지 않는다. undefined 나옴
  //   sayHello: function () {
  //     console.log(`hello ${this.name}`);
  //   },
};

person.sayHello();

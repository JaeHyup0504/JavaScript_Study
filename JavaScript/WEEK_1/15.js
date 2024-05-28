// 객체
// key - value pair
// value 어떠한 값이든 가능
// 하나의 변수에 여러개의 값을 넣을 수 있다 !

// 1. 객체 생성 방법
// 1-1. 기본적인 객체 생성 방법
let person = {
  name: "louis",
  age: 29,
  gender: "men",
};

// 1-2. 생성자 함수를 이용한 객체 생성 방법
function Person(name, age, gender) {
  (this.name = name), (this.age = age), (this.gender = gender);
}

let person1 = new Person("홍길동", 30, "남자");

// 2. 접근하는 방법
// console.log(person.name);

// 3. 객체 메소드(객체가 가진 여러가지 기능 : Object.~~)
let person2 = {
  name: "louis",
  age: 29,
  gender: "men",
};

// 3-1. Object.keys()
// key를 가져오는 메소드
let keys = Object.keys(person2);
// console.log(keys);

// 3-2. Object.values()
// value를 가져오는 메소드
let values = Object.values(person2);
// console.log(values);

// 3-3. Object.entries()
// key와 value를 묶어서 배열로 만든 배열!! (2차원 배열)
let entries = Object.entries(person2);
// console.log(entries);

// 3-4. Object.assign()
// 객체 복사
let newPerson = {};
Object.assign(newPerson, person2, { age: 30, gender: "girl" });
// console.log(newPerson);

// 3-5. 객체 비교
// 크기가 상당이 크다. 메모리에 저장할 때 별도의 공간에 저장
// 별도 공간에 대한 주소를 가지고 있다.
// 각 객체의 주소가 다르다.
let a = {
  name: "louis",
  age: 29,
  gender: "men",
};

let b = {
  name: "louis",
  age: 29,
  gender: "men",
};

// JSON.stringify : 문자열화 시킨다.
// console.log(JSON.stringify(a) === JSON.stringify(b));

// 3-6. 객체 병합
let c = {
  name: "louis",
  age: 29,
};

let d = {
  gender: "남자",
};

// ... : spread operator
let perfectMan = { ...c, ...d };
console.log(perfectMan);

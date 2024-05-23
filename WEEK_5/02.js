// 클래스 설계도 만들기
class Person {
  // 우리는 사람이기 때문에 필수요소
  // name, age
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // 메서드 형태의 동사 표현
  sayHello() {
    console.log(`${this.name}님 안녕하세요!`);
  }

  sayAge() {
    console.log(`내 나이는 ${this.age}살입니다.`);
  }
}

// 설계도를 통해 인스턴스를(실제 사물) 만들어보자
// 이름은 louis이고, 나이는 29살인 사람 하나를 만들어줘(설계도를 근거해서)
const person1 = new Person("louis", "29");

person1.sayHello();
person1.sayAge();

// 상속(Inheritance)
// Class -> 유산으로 내려주는 주요 기능 !!
// 부모 <-> 자식

// 동물 전체에 대한 클래스
class Animal {
  // 생성자
  constructor(name) {
    this.name = name;
  }

  // 메서드()
  speak() {
    console.log(`${this.name} says!`);
  }
}

// 상속 받을 때 extends 사용
class Dog extends Animal {
  // overriding : 부모에게서 내려받은 메서드를 재정의하는 것
  speak() {
    console.log(`${this.name} bark!`);
  }
}

const puppy = new Dog("louis");
puppy.speak();

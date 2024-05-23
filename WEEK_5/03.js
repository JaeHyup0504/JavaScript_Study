// class 연습하기

// [요구사항]
// 1. Car라는 새로운 클래스를 만들되, 처음 객체를 만들 때는
//    다음 네 개의 값이 필수로 입력돼야 합니다!
//     - modelName
//     - modelYear
//     - type
//     - price
// 2. makeNoise() 메서드를 만들어 클락션을 출력해주세요.
// 2-1. 해당 자동차가 몇년도 모델인지 출력하는 메서드 작성
// 3. 이후 자동차를 3개 정도 만들어주세요(객체 생성).

class Car {
  constructor(modelName, modelYear, type, price) {
    this.modelName = modelName;
    this.modelYear = modelYear;
    this.type = type;
    this.price = price;
  }

  makeNoise() {
    console.log(`${this.modelName}: 빵`);
  }

  printModelYear() {
    console.log(`${this.modelYear}년도`);
  }
}

const car1 = new Car("bmw", "2024", "suv", "2억");
const car2 = new Car("benz", "2024", "suv", "3억");
const car3 = new Car("auodi", "2024", "suv", "5억");

console.log(car1);
car1.makeNoise();
car1.printModelYear();

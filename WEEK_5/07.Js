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

// [추가 요구사항]
// 1. 전기차 클래스 <- Car 클래스의 상속을 받는다.

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

class ElectronicCar extends Car {
  constructor(modelName, modelYear, price, chargeTime) {
    // Car(부모 class)에게도 알려주기
    super(modelName, modelYear, "e", price);
    this._chargeTime = chargeTime;
  }

  get chargeTime() {
    return this._chargeTime;
  }
  set chargeTime(value) {
    this._chargeTime = value;
  }
}

const eleCar = new ElectronicCar("테슬라", "2024", 9000, 60);
eleCar.makeNoise();
eleCar.printModelYear();
console.log(eleCar._chargeTime);
eleCar.chargeTime = 20;
console.log(eleCar._chargeTime);

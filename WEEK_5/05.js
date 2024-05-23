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
// 1. modelName, modelYear, price, type을 가져오는 메서드
// 2. modelName, modelYear, price, type을 세팅하는 메서드
// 3. 만든 인스턴스를 통해서 마지막에 set 해서 get 하는 로직

class Car {
  constructor(modelName, modelYear, type, price) {
    this._modelName = modelName;
    this._modelYear = modelYear;
    this._type = type;
    this._price = price;
  }

  makeNoise() {
    console.log(`${this.modelName}: 빵`);
  }

  printModelYear() {
    console.log(`${this.modelYear}년도`);
  }

  get modelName() {
    return this._modelName;
  }

  set modelName(value) {
    if (value.length <= 0) {
      console.log("오류");
      return;
    } else if (typeof value !== "string") {
      console.log("오류");
      return;
    }

    this._modelName = value;
  }

  get modelYear() {
    return this._modelYear;
  }

  set modelYear(value) {
    if (value.length <= 0) {
      console.log("오류");
      return;
    } else if (typeof value !== "string") {
      console.log("오류");
      return;
    }

    this._modelYear = value;
  }

  get type() {
    return this._type;
  }

  set type(value) {
    this._type = value;
  }

  get price() {
    if (typeof value !== "number") {
      console.log("오류");
      return;
    } else if (value < "1000000") {
      console.log("오류");
      return;
    }

    return this._price;
  }

  set price(value) {
    this._price = value;
  }
}

const car1 = new Car("bmw", "2024", "suv", "2억");

// getter 예시1
console.log(car1.modelName);

// setter 예시 1
car1.modelName = 1;
console.log(car1.modelName);

// Static Method(= 정적 메소드)
// Class -> 객체를 만들기 위해서 사용
// 다량으로, 안전하고, 정확하게

class Calculator {
  //   constructor(a, b) {
  //     this.a = a;
  //     this.b = b;
  //   }

  static add(a, b) {
    console.log("더하기");
    return a + b;
  }

  static substract(a, b) {
    console.log("빼기");
    return a - b;
  }
}

console.log(Calculator.add(3, 5));
console.log(Calculator.substract(3, 5));

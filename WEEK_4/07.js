// [ 콜백 함수 내부의 this에 다른 값 바인딩하기]
// 콜백 함수 내부에서 this가 문맥에 맞는 객체를 바라보게 할 수는 없을까
// 콜백 함수 내부의 this에 다른 값을 바인딩하는 방법

var obj1 = {
  name: "obj1",
  func: function () {
    var self = this; //이 부분!
    return function () {
      console.log(self.name);
    };
  },
};

// 단순히 함수만 전달한 것이기 때문에, obj1 객체와는 상관이 없어요.
// 메서드가 아닌 함수로서 호출한 것과 동일하죠.
var callback = obj1.func();
// var callback = function () {
//     console.log(self.name);
//   };
setTimeout(callback, 1000);

// 결과만을 위한 코팅 => 하드코딩 10/100 점짜리 코딩
// var obj2 = {
//   name: "obj2",
//   func: function () {
//     console.log(obj2.name);
//   },
// };

// setTimeout(obj2.func, 1000);

var obj2 = {
  name: "obj2",
  func: obj1.func,
};

var callback2 = obj2.func();
setTimeout(callback2, 1500);

var obj3 = { name: "obj3" };
var callback3 = obj1.func.call(obj3);
setTimeout(callback3, 2000);

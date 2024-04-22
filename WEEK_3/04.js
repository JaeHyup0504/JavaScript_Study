// 이런 패턴은 어떨까요?
var copyObject = function (target) {
  var result = {};

  for (var prop in target) {
    result[prop] = target[prop];
  }
  return result;
};

// 패턴 적용
var user = {
  name: "louis",
  gender: "male",
};

var user2 = copyObject(user);
user2.name = "chageName";

if (user !== user2) {
  console.log("유저 정보가 변경되었냐");
}

console.log(user.name, user2.name); // "louis", 'changeName'
console.log(user === user2); // false

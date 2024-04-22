// refactoring
// re : 다시
// factoring

// - new 연산자로 호출한 Promise의 인자로 넘어가는 콜백은 바로 실행.
// - 그 내부의 resolve(또는 reject) 함수를 호출하는 구문이 있을 경우
//   resolve(또는 reject) 둘 중 하나가 실행되기 전까지는 다음(then), 오류(catch)로 넘어가지 않음.
// - 따라서, 비동기작업이 완료될 때 비로소 resolve, reject 호출.

const addCoffee = (name) => {
  return (prevName) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let newName = prevName ? `${prevName}, ${name}` : name;
        console.log(newName);
        resolve(newName);
      }, 500);
    });
  };
};

addCoffee("에스프레소")()
  .then(addCoffee("아메리카노"))
  .then(addCoffee("카페모카"))
  .then(addCoffee("카페라떼"));

// 클로저(Closure)
const x = 1;

function outerFunc() {
  const x = 10;
  function innerFunc() {
    // x는 어디서 참조할까
    // 함수가 선언된 렉시컬 환경이란?
    // 함수가 선언될 당시의 외부 변수 등의 정보
    console.log(x); // 10 !!
  }

  innerFunc();
}

outerFunc();

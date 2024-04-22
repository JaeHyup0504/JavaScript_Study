// 조건문 - if, else if, else, switch

// 1. if 문
// 조건 : boolean 값이 나올 수 있는 조건
if (조건) {
}

// 2. if - else 문
if (조건1) {
} else {
}

// 3. if - else if - else 문
if (조건1) {
} else if (조건2) {
} else {
}

// 4. switch
// 변수의 값에 따라, 여러 개의 경우(case) 중 하나를 선택
// default
let fruit = "사과";
switch (fruit) {
  case "사과":
    console.log("사과");
    break;
  case "바나나":
    console.log("바나나");
    break;
  case "키위":
    console.log("키위");
    break;
  default:
    console.log("아무것도 아닙니다.");
    break;
}

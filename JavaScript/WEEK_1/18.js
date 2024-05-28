// while
// while (조건) {
//   // 메인로직
//   // 증감
// }

// let i = 0;
while (i < 10) {
  //   console.log(i);
  i++;
}

// let i = 0;
while (i < 100) {
  if (i % 5 === 0) {
    // console.log(i);
  }

  i++;
}

// do ~ while
// 일단 do에서 코드한번 실행하고 while 실행
// let i = 0;
do {
  //   console.log(i);
  i++;
} while (i < 10);

// break : 그 자리에서 멈춤
// continue : 다음 순서로 넘어감
for (let i = 0; i <= 10; i++) {
  if (i === 5) break;
  if (i === 3) continue;
  console.log(i);
}

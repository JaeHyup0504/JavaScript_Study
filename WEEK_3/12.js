var numbers = [10, 20, 3, 16, 45];
var max = (min = numbers[0]);
numbers.forEach(function (number, idx) {
  //   if (number > max) {
  //     max = number;
  //   }

  //   if (number < min) {
  //     min = number;
  //   }
  console.log(idx + "번째 값 => " + number);
});

// console.log(max, min);

Array.prototype.map123 = function (callback, thisArg) {
  // map 함수에서 return할 결과 배열
  let mappingArr = [];
  for (let i = 0; i < this.length; i++) {
    let mapValue = callback.call(thisArg || globalThis, this[i]);
    mappingArr[i] = mapValue;
  }
  return mappingArr;
};

let newArr = [1, 2, 3].map123((number) => {
  return number * 2;
});

console.log(newArr);

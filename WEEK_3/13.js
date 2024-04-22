var numbers = [10, 20, 3, 16, 45];

// apply -> ({}, [])
var max = Math.max.apply(null, numbers);
var min = Math.min.apply(null, numbers);
console.log("apply => ", max, min);

// spread perator
var max = Math.max(...numbers);
var min = Math.min(...numbers);
console.log("spread => ", max, min);
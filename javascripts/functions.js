// jshint esversion :6
let arrayAvg = (arr) =>{
  let total = 0;
  for(var i = 0; i < arr.length; i++){
    total += arr[i];
  }
  return total / arr.length;
};
console.log(arrayAvg([6,2,4]));
console.log(arrayAvg([2,3,5,7,9]));

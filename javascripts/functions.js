// jshint esversion :6
let arrayAvg = (arr) => {
  let total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
};
console.log(arrayAvg([6, 2, 4]));
console.log(arrayAvg([2, 3, 5, 7, 9]));

function arrMax(arr) {
  let max = arr[0];
  arr.forEach(n => {
    if (n > max) {
      max = n;
    }
  });
  return max;
}
console.log(arrMax([2, 3, 5, 7, 9]));
console.log(arrMax([6, 2, 4]));

sumEvens = (arr) => {
  let sum = 0;
    for(n of arr){
        if(n%2==0){
            sum=sum+n;
        }
    }
    return sum;
};

console.log(sumEvens([2,3,5,7,8]));

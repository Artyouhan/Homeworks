// Задание 1
function getArrayParams(arr) {
 let arr = []
  let min, max, sum, avg;
min = Infinity max = -Infinity;
max = Infinity min = Infinity;
sum = min + max;
for(let i = 0; i < arr.length; i++){
if(i > max){
max = i;
}else if(i < min){
min = i
}
 } avg = (sum+i)/3 .toFixed(2)
let num = Number(avg)
  return { min: min, max: max, avg: avg };
}


// Задание 2
function worker(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i]
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;
let func = worker(arr)
arrOfArr=[[1, 2, 3, 4], [10, 20, -10, -20]]
for(let i = 0; i < arrOfArr.length; i++){
  func(arrOfArr[i]);
  if(max < sum){
    max = sum
  }
}
  return max;
}

// Задание 3
function worker2(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum -= arr[i]
  }
  Math.abs(sum)
  return sum;
}

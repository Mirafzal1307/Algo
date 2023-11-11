let arr = [
  [1, 1],
  [0, 1],
];
function countOnes(arr) {
  let num = 0;
  let arrSec = arr.flat()
  for (const element of arrSec) {
    if (element === 1) {
      num = num + 1;
    }
  }
  return num;
}

countOnes(arr);

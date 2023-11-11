function mean(num) {
  let arr = String(num).split("").map(Number);
  let sum = arr.reduce((acc, val) => acc + val, 0);
  let result = sum / arr.length;
  console.log(result);
  return result; 
}
mean(43256798765);

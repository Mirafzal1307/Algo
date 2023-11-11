let arr = [1, 2, 4];
function isAvgWhole(arr) {
  let result = arr.reduce((a, b) => {
    return a + b;
  }, 0);
  if (result % arr.length === 0) {
    return true;
  } else {
    return false;
  }
}

isAvgWhole(arr);

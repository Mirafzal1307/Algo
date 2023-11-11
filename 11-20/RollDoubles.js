function diceGame(arr) {
  let arr2 = arr.flat();
  if (arr2[0] === arr2[1]) {
    return 0;
  } else {
    let result = arr2.reduce((acc, val) => acc + val, 0);
    return result;
  }
}
diceGame([
  [1, 1],
  [3, 4],
  [5, 6],
]);

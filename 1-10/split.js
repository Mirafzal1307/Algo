function numberSplit(n) {
  let a = Math.ceil(n / 2);
  let b = n - a;
  return [a, b];
}

numberSplit(9)
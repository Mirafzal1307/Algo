function allTruthy(...args) {
  return args.every((value) => Boolean(value));
}

console.log(allTruthy(true, true, true));
console.log(allTruthy(true, false, true));
console.log(allTruthy(5, 4, 3, 2, undefined, 1));

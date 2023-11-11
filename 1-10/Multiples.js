const arrayOfMultiples = (num, length) => {
  const arr = [];

  for (let i = 1; i <= length; i++) {
    arr.push(num * i);
  }

  return arr;
};

arrayOfMultiples(2, 4);

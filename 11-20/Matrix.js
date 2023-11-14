function matrix(x, y, z) {
    const result = [];
      for (let i = 0; i < x; i++) {
      result.push(Array(y).fill(z));
    }
  
    return result;
  }
  
  console.log(matrix(3, 5, 3));
  console.log(matrix(4, 1, "fsdfsdfsdfsdfsfdsdf")); 
  console.log(matrix(3, 2, 0));
  
let arr = [1, 2, 3, 3, 3, 4];
function uniqueSort(arr) {
  sortedArr = arr.sort();
  result = [...new Set(sortedArr)];
  console.log(result);
  return result;
}
uniqueSort(arr);

function hashPlusCount(hashPlus) {
  let arr = hashPlus.split("");
  let hash = arr.filter((hash) => hash === "#");
  let plus = arr.filter((plus) => plus === "+");
  let result = hashPlus === "" ? [0, 0] : [hash.length, plus.length];

  return result;
}
hashPlusCount("#+++#+#++#");

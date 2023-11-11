const binary = (decimal) => {
  return decimal >= 0
    ? decimal.toString(2)
    : "Decimal must be greater than or equal to 0";
};
binary(3); // '11'

const names = ["Annie", "Steven", "Lisa", "Osman"];
const jobs = ["Teacher", "Engineer", "Doctor", "Cashier"];

const result = {};
names.forEach((key, i) => (result[key] = jobs[i]));
console.log(result);

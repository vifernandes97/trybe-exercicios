let salary = 3000;
let inss = 11;
let calculoInss = (inss / 100) * salary;
let salaryInssDeducted = salary - calculoInss
let calculoIr = ((7.5 / 100) * salaryInssDeducted) - 142.80
let liquidSalary = salaryInssDeducted - calculoIr

console.log(liquidSalary);
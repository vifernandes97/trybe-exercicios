
// considere esse array
const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// percorra o array imprimindo todos os valores contidos nele com a função console.log()
console.log(numbers.length);
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);
console.log(numbers[5]);
console.log(numbers[6]);
console.log(numbers[7]);
console.log(numbers[8]);
console.log(numbers[9]);

// Some todos os valores contidos no array e imprima o resultado.

let sum = 0;

for (let index = 0; index < numbers.length; index +=1) {
    sum += numbers[index];
};

// exercicios 3 e 4

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
    result += numbers[index];
};

result = result / numbers.length;

if (result > 20) {
    console.log('O valor da média aritmética é maior que 20');
} else {
    console.log('O valor da média aritmética é menor ou igual a 20');
};
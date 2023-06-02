const shopping = ['Sabão em pó', 'Macarrão', 'Leite Condensado', 'Refrigerante', 'Maçã', 'Alface', 'Nescau'];

console.log(shopping);

console.log(shopping[0]);

console.log(shopping.length);

console.log (shopping[shopping.length - 1]); // apresenta o nome do último item da lista

shopping.push('Estilete'); // adiciona 'estilete' na ultima posição
console.log(shopping);

shopping.unshift('Milho'); // adiciona 'milho' na primeira posição
console.log(shopping);

shopping.pop(); // apaga o último item do array
console.log(shopping);

shopping.shift(); // apaga o primeiro item do array
console.log(shopping);


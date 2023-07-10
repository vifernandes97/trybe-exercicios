// vamos construir um processo de transicao de function para arrow function

function subtraction (num1, num2) {
    return num1 - num2;
};

// passo 1: arrow functions nao possuem nome e sao armazenadas em variáveis. 
// passo 2: pecisamos tambem adicionar => na sintaxe entre os parametros e o corpo da funcao

const subtraction = (num1, num2) => {
    return num1 - num2;
}

// passo 3: simplificando arrow functions que possuem apenas uma linha

const subtraction = (num1, num2) => { return num1 - num2 }; 

// passo 4: remova as chaves
// passo 5: ao remover as chaves, tudo o que ficar a direita de => deve ser uma expressão. O 'return' é um statement. Logo, deve ser retirado 

const subtraction = (num1, num2) => num1 - num2;

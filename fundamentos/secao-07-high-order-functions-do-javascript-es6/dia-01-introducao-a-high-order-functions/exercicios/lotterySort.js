// Desenvolva uma HOF que retorne o resultado de um sorteio


// funcao valida se os numeros sao iguais
const numberChecker = (myNumber, number) => myNumber === number;

// recebe um numero inputado e uma funcao como parametros
const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};

console.log(lotteryResult(2, numberChecker));
   


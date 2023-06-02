/* Poderíamos comparar o loop executado pelo for como um piloto de F1 correndo as voltas de uma corrida. 
Quando se realiza uma volta completa, o valor do index é incrementado e essa sequência de passos é 
repetida até o final da corrida 🏎️. */

const laps = 68;

for (let index = 1; index <= laps; index += 1) {
    console.log(`Volta ${index} completada`);

}

console.log('Acabou a corrida!');


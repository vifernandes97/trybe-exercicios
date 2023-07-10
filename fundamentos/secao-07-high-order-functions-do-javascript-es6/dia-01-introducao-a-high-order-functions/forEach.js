
// sintaxe do forEach

// const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate'}];

// arrayOfValues.forEach((element, index) => {
//     console.log(`O elemento atual é: ${element} e possui o index ${index}`);
// })

// ------------------------------

// para transformar um array de pessoas aprovadas em um concurso para letras maiúsculas, você pode fazer o seguinte:
// const pessoasAprovadas = ['Ana Beatriz', 'Caio Nunes', 'Afonso Ribeiro', 'Leonardo Lins']; // lista de nomes

// pessoasAprovadas.forEach((nome, index) => {
//     pessoasAprovadas[index] = pessoasAprovadas[index].toUpperCase();
// });

// console.log(pessoasAprovadas);

// --------------------------------

// Agora imagine que você tenha desenvolvido um programa para fazer a tabuada do 2. Como você acha que esse código seria ao utilizar o forEach?

// Você pode construir a sua lógica da seguinte maneira:

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// numbers.forEach((element) => {
//     console.log(element * 2);
// })

// --------------------------------

// Use o método forEach para exibir a lista de emails com a seguinte frase: O email ${email} está cadastrado em nosso banco de dados!.

const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  // Adicione seu código aqui

  emailListInData.forEach((email) => {
    console.log(`O email ${email} está cadastrado em nosso banco de dados!`)
  })
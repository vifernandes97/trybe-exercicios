// // a função find é utilizada para encontrar o primeiro elemento que satisfaça a condição passada e retorne o primeiro valor
// // do array que corresponda a essa condição. Caso ele não encontre, retorna undefined.

// // A pessoa responsável pelo RH precisa encontrar a pessoa colaboradora de id 2 pois recebeu uma notificação que esta pessoa irá entrar em férias.

// const employees = [
//     { id: 1, nome: 'Douglas Adams', idade: 20},
//     { id: 2, nome: 'H. G. Wells', idade: 18},
//     { id: 3, nome: 'Júlio Verne', idade: 57},
//     { id: 4, nome: 'Margaret Atwood', idade: 83},
//     { id: 5, nome: 'Edgar Allan Poe', idade: 19},
//   ];
  
// employees.find((employee) => employee.id === 2); // H. G. Wells

// // Agora a pessoa do RH da empresa precisa saber o id da colaboradora que possui o nome 'Margaret Atwood'

// employees.find((employee) => employee.nome === "Margaret Atwood").id; // 4

// // Caso você realize uma verificação com o find que não encontre nenhum elemento, o retorno será undefined. Observe e execute o exemplo abaixo para encontrar a idade igual a 33 anos:

// const idades = [18, 21, 42, 20, 19, 21, 30, 73, 82, 45, 48, 50];

// idades.find((idade) => idade === 33); // undefined

// ------------- exercicios --------------- // 

// Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:

const numbers = [19, 21, 30, 3, 45, 22, 15];

// Adicione seu código aqui

const verifyNumbers = numbers.find((numero) => numero % 3 === 0 && numero % 5 ===0)
console.log(verifyNumbers)

// Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const names = ['João', 'Irene', 'Fernando', 'Maria'];

// Adicione seu código aqui

const verifyNames = names.find((name) => name.length === 5)
console.log(verifyNames)

// Utilize o find para encontrar a música com id igual a '31031685', caso ela exista:

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ];
  
  // Adicione seu código aqui

  const findMusicById = musicas.find((music) => music.id === "31031685")
  console.log(findMusicById)

// Every: verificar se todos os elementos de um arry correspondem à uma condição

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];

  const verifyAges = (array, condicao) =>  {
    return array.every((currentValue) => currentValue.age >= condicao);
  }
  
  console.log(verifyAges(people, 18)); // false
  console.log(verifyAges(people, 14)); // true


  // Caso a pessoa esteja na lista de convidados, o retorno da função hasName deve ser true. Caso contrário, deve ser false.

  const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

  const hasName = (array, name) => {
    return array.some((currentValue) => currentValue === name)

  };
  
  console.log(hasName(names, 'Ana'));
  console.log(hasName(names, 'Pedro'));
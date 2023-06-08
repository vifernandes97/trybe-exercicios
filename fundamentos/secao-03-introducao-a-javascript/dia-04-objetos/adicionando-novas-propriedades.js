const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Software Engineer',
  };

  customer.lastName = 'Faria';
  console.log(customer);

  // adicionando propriedades no objeto com uma função

  // criação da função

  const addProperty = (object, key, value) => {
    if (typeof object[key] === "undefined"){
        object[key] = value;
    }
  };

  // chamada da função passando os valores dos parâmetros
  addProperty(customer, 'email', 'vi.fernandes@gmail.com');
  addProperty(customer, 'fone', '19993686065');
  addProperty(customer, 'userGitHub', 'vifernandes97');
  addProperty(customer, 'linkedIn', '/vinicius.fernandes97');
  



  // exibe o objeto transformado
  console.log(customer);
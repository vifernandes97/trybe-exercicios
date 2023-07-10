
// funcao recebe nome e retorna um objeto com nome e email (que será criado em outra funcao a partir do nome)
const newEmployee = (fullName) => {
    return { fullName, email: ''}
}

// funcao recebe nome, cria email => retorna objeto com nome e email
const employeeGenerator = (fullName) => {
    const email = fullName.toLowerCase().replace('','_');
    return { fullName, email: `${email}@trybe.com` }
}

// funcao cria um objeto em que cada chave chama a funcao employeeGenerator, que irá trazer um objeto com nome + email
const newEmployees = () => {
    const employees = {
      id1: employeeGenerator('Pedro Guerra'),
      id2: employeeGenerator('Luiza Drumond'),
      id3: employeeGenerator('Carla Paiva'),
    }
    return employees;
  };

  console.log(newEmployees());
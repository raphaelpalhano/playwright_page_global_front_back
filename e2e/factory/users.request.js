import faker from 'faker-br';

export default {
  loginUser: (option) => {
    switch (option) {
    case 'valido':
      return {
        email: process.env.EMAIL,
        password: process.env.PASSWORD,
      };
    case 'invalido':
      return {
        email: faker.internet.email(),
        password: faker.internet.password(),
      };
    default:
      return `A opcao ${option} nao existe!`;
    }
  },

  getUser: (option) => {
    switch (option) {
    case 'valido':
      return {
        nome: faker.name.firstName(),
        email: process.env.EMAIL,
        password: process.env.PASSWORD,
        administrador: 'true',
      };
    case 'invalido':
      return {
        nome: faker.name.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        administrador: 'true',
      };
    default:
      return `A opcao ${option} nao existe!`;
    }
  },
};

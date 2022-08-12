import faker from 'faker-br';

export default {
  loginUser: (option) => {
    switch (option) {
    case 'valid':
      return {
        email: process.env.EMAIL,
        password: process.env.PASSWORD,
      };
    case 'invalid':
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
    case 'valid':
      return {
        nome: faker.name.firstName(),
        email: process.env.EMAIL,
        password: process.env.PASSWORD,
        administrador: 'true',
      };
    case 'invalid':
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

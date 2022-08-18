import faker from 'faker-br';

export default {
  products: (option) => {
    switch (option) {
    case 'valido':
      return {
        task: ['Estruturar dados', 'validar lista', 'Gerar massas', 'Escrever história'],
      };
    case 'invalido':
      return {
        number: '3312321981913288012312301203128012301231824080128402180481204812804128421804',
      };
    case 'aleatorio':
      return {
        phrase: faker.lorem.sentence(),
      };
    default:
      return { notfound: 'o parametro passado nao esta dentro da validacao do switch' };
    }
  },
};

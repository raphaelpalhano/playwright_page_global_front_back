export class Factory {
  public static items(choice: string) {
    switch (choice) {
      case 'valid':
        return {
          task: ['Estruturar dados', 'validar lista', 'Gerar massas', 'Escrever história'],
        };
      case 'invalid':
        return {
          number: '3312321981913288012312301203128012301231824080128402180481204812804128421804',
        };
      default:
        return { notfound: 'o parametro passado nao esta dentro da validacao do switch' };
    }
  }
}

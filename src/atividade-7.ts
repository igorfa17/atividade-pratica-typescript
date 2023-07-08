// 7. Crie um tipo que seja composto por um User OU por um Diretor usando interseção de tipos. Desenvolva uma função que receba uma lista desse novo tipo e, para cada item da lista, imprima: a. O mesmo que o exercício 5, em caso de objeto User. // b. O mesmo que o exercício 6, em caso de objeto Diretor.

interface User {
    nome: string;
    idade: number;
    ocupacao: string;
    salario?: number;
  }
  
  interface Diretor extends User {
    nivelComissionamento: number;
  }
  
  type UserOuDiretor = User | Diretor;
  
  function exibirInformacoes(lista: UserOuDiretor[]): void {
    lista.forEach((item) => {
      if ('nivelComissionamento' in item) {
        const salario = item.salario ? `salário R$ ${item.salario}` : 'salário N/A';
        console.log(`Diretor(a) ${item.nome}, ${item.idade} anos, comissão nível ${item.nivelComissionamento}, ${salario}`);
      } else {
        const salario = item.salario ? `salário R$ ${item.salario}` : 'salário N/A';
        console.log(`${item.nome}, ${item.idade} anos, ${item.ocupacao}, ${salario}`);
      }
    });
  }
  
  // Exemplo de uso
  const usuario10: User = { nome: 'Daphne', idade: 23, ocupacao: 'analista de TI', salario: 1000 };
  const diretor10: Diretor = { nome: 'Carlos', idade: 30, ocupacao: 'Diretor de Marketing', nivelComissionamento: 3 };
  const usuario20: User = { nome: 'João', idade: 40, ocupacao: 'engenheiro', salario: 2000 };
  
  const listaUsuarios: UserOuDiretor[] = [usuario10, diretor10, usuario20];
  
  exibirInformacoes(listaUsuarios);

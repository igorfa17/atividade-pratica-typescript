// 5. Crie um programa para mostrar informações de usuários (User) de uma empresa. Crie o tipo User com as seguintes propriedades: nome, idade, ocupação e salário (opcional). Caso o salário do usuário não seja informado, mostre o valor “N/A”. Exemplo: a. “Daphne, 23 anos, analista de TI, salário R$ 1000” // b. “Daphne, 23 anos, analista de TI, salário N/A”

interface User {
    nome: string;
    idade: number;
    ocupacao: string;
    salario?: number;
  }
  
  function exibirInformacoesUsuario(user: User): void {
    const salario = user.salario ? `salário R$ ${user.salario}` : 'salário N/A';
    console.log(`${user.nome}, ${user.idade} anos, ${user.ocupacao}, ${salario}`);
  }
  
  // Exemplo de uso
  const usuario1: User = { nome: 'Daphne', idade: 23, ocupacao: 'analista de TI', salario: 1000 };
  const usuario2: User = { nome: 'Carlos', idade: 30, ocupacao: 'engenheiro de software' };
  const usuario3: User = { nome: 'Pedro', idade: 18, ocupacao: 'desenvolvedor full stack', salario: 3000 };

  
  exibirInformacoesUsuario(usuario1);
  exibirInformacoesUsuario(usuario2);
  exibirInformacoesUsuario(usuario3);

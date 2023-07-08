// 3. Crie um programa que simule uma carteira de dinheiro. Este programa vai precisar ter uma carteira contendo saldo, transações de entrada e saídas. Ou seja, será um objeto com estas propriedades. Depois crie uma função para lançar uma entrada e uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar um erro ou avisar.

interface Transacao {
    tipo: 'entrada' | 'saida';
    valor: number;
  }
  
  interface Carteira {
    saldo: number;
    transacoes: Transacao[];
  }
  
  function adicionarTransacao(carteira: Carteira, tipo: 'entrada' | 'saida', valor: number): void {
    if (tipo === 'saida' && valor > carteira.saldo) {
      throw new Error('Saldo insuficiente.');
    }
  
    const transacao: Transacao = {
      tipo,
      valor
    };
  
    carteira.transacoes.push(transacao);
  
    if (tipo === 'entrada') {
      carteira.saldo += valor;
    } else {
      carteira.saldo -= valor;
    }
  }
  
  // Exemplo de uso
  const minhaCarteira: Carteira = {
    saldo: 100,
    transacoes: []
  };
  
  console.log('Saldo inicial:', minhaCarteira.saldo);
  
  try {
    adicionarTransacao(minhaCarteira, 'entrada', 50);
    console.log('Transação de entrada adicionada. Novo saldo:', minhaCarteira.saldo);
  
    adicionarTransacao(minhaCarteira, 'saida', 30);
    console.log('Transação de saída adicionada. Novo saldo:', minhaCarteira.saldo);
  
    adicionarTransacao(minhaCarteira, 'saida', 80);
    console.log('Transação de saída adicionada. Novo saldo:', minhaCarteira.saldo);
  } catch (error) {
    if (error instanceof Error) {
      console.log('Erro:', error.message);
    } else {
      console.log('Ocorreu um erro.');
    }
  }
  
  console.log('Transações:', minhaCarteira.transacoes);

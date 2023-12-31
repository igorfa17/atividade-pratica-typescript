"use strict";
// 1. Crie uma função que receba 2 números e retorne um objeto contendo a média e também um indicador booleano de aprovado/reprovado. Considere aprovado com média >= 6.
console.log('ATIVIDADE 1: ');
function calcularMedia(nota1, nota2) {
    const media = (nota1 + nota2) / 2;
    const situacao = media >= 6 ? 'Aprovado' : 'Reprovado';
    return {
        media,
        situacao
    };
}
const resultado = calcularMedia(2, 8);
console.log(resultado);
// 2. Crie uma função que receba uma lista de objetos contendo nota e peso, realize a média das notas considerando o peso. Exemplos: Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado // Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado
console.log('ATIVIDADE 2: ');
function calcularMediaPonderada(listaNotas) {
    let somaPonderada = 0;
    let somaPesos = 0;
    for (const notaPeso of listaNotas) {
        somaPonderada += notaPeso.nota * notaPeso.peso;
        somaPesos += notaPeso.peso;
    }
    const mediaPonderada = somaPonderada / somaPesos;
    return mediaPonderada;
}
// Exemplo de uso
const listaExemplo = [
    { nota: 7, peso: 2 },
    { nota: 8, peso: 3 },
];
const mediaExemplo = calcularMediaPonderada(listaExemplo);
console.log(mediaExemplo);
// 3. Crie um programa que simule uma carteira de dinheiro. Este programa vai precisar ter uma carteira contendo saldo, transações de entrada e saídas. Ou seja, será um objeto com estas propriedades. Depois crie uma função para lançar uma entrada e uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar um erro ou avisar.
console.log('ATIVIDADE 3: ');
function adicionarTransacao(carteira, tipo, valor) {
    if (tipo === 'saida' && valor > carteira.saldo) {
        throw new Error('Saldo insuficiente.');
    }
    const transacao = {
        tipo,
        valor
    };
    carteira.transacoes.push(transacao);
    if (tipo === 'entrada') {
        carteira.saldo += valor;
    }
    else {
        carteira.saldo -= valor;
    }
}
// Exemplo de uso
const minhaCarteira = {
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
}
catch (error) {
    if (error instanceof Error) {
        console.log('Erro:', error.message);
    }
    else {
        console.log('Ocorreu um erro.');
    }
}
console.log('Transações:', minhaCarteira.transacoes);
// 4. Crie um programa para cadastrar, listar e excluir produtos de uma lista com tipagem de Produto.
console.log('ATIVIDADE 4: ');
class ListaProdutos {
    constructor() {
        this.produtos = [];
    }
    cadastrarProduto(produto) {
        this.produtos.push(produto);
    }
    listarProdutos() {
        console.log('Lista de Produtos:');
        this.produtos.forEach((produto) => {
            console.log(`ID: ${produto.id}, Nome: ${produto.nome}, Preço: ${produto.preco}`);
        });
    }
    excluirProduto(id) {
        const index = this.produtos.findIndex((produto) => produto.id === id);
        if (index !== -1) {
            this.produtos.splice(index, 1);
            console.log('Produto removido com sucesso.');
        }
        else {
            console.log('Produto não encontrado.');
        }
    }
}
// Exemplo de uso
const lista = new ListaProdutos();
// Cadastrar produtos
const produto1 = { id: 1, nome: 'Camiseta', preco: 29.99 };
const produto2 = { id: 2, nome: 'Calça', preco: 59.99 };
const produto3 = { id: 3, nome: 'Tênis', preco: 99.99 };
lista.cadastrarProduto(produto1);
lista.cadastrarProduto(produto2);
lista.cadastrarProduto(produto3);
// Listar produtos
lista.listarProdutos();
// Excluir produto
lista.excluirProduto(2);
// Listar produtos novamente
lista.listarProdutos();
// 5. Crie um programa para mostrar informações de usuários (User) de uma empresa. Crie o tipo User com as seguintes propriedades: nome, idade, ocupação e salário (opcional). Caso o salário do usuário não seja informado, mostre o valor “N/A”. Exemplo: a. “Daphne, 23 anos, analista de TI, salário R$ 1000” // b. “Daphne, 23 anos, analista de TI, salário N/A”
console.log('ATIVIDADE 5: ');
function exibirInformacoesUsuario(user) {
    const salario = user.salario ? `salário R$ ${user.salario}` : 'salário N/A';
    console.log(`${user.nome}, ${user.idade} anos, ${user.ocupacao}, ${salario}`);
}
// Exemplo de uso
const usuario1 = { nome: 'Daphne', idade: 23, ocupacao: 'analista de TI', salario: 1000 };
const usuario2 = { nome: 'Carlos', idade: 30, ocupacao: 'engenheiro de software' };
const usuario3 = { nome: 'Pedro', idade: 18, ocupacao: 'desenvolvedor full stack', salario: 3000 };
exibirInformacoesUsuario(usuario1);
exibirInformacoesUsuario(usuario2);
exibirInformacoesUsuario(usuario3);
// 6. Usando o contexto do exercício anterior, crie um tipo de usuário que representa funcionários da diretoria da empresa. O tipo Diretor deve conter as propriedades: nome, idade, salário (opcional) e nível de comissionamento (numérico). Crie uma função que receba um Diretor e mostre suas informações. Exemplos: a. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário R$ 1000” // b. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário N/A”
console.log('ATIVIDADE 6: ');
function exibirInformacoesDiretor(diretor) {
    const salario = diretor.salario ? `salário R$ ${diretor.salario}` : 'salário N/A';
    console.log(`Diretor(a) ${diretor.nome}, ${diretor.idade} anos, comissão nível ${diretor.nivelComissionamento}, ${salario}`);
}
// Exemplo de uso
const diretor1 = { nome: 'Daphne', idade: 23, ocupacao: 'Diretora de Vendas', salario: 1000, nivelComissionamento: 5 };
const diretor2 = { nome: 'Carlos', idade: 30, ocupacao: 'Diretor de Marketing', nivelComissionamento: 3 };
exibirInformacoesDiretor(diretor1);
exibirInformacoesDiretor(diretor2);

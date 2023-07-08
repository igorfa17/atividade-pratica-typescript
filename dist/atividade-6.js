"use strict";
// 6. Usando o contexto do exercício anterior, crie um tipo de usuário que representa funcionários da diretoria da empresa. O tipo Diretor deve conter as propriedades: nome, idade, salário (opcional) e nível de comissionamento (numérico). Crie uma função que receba um Diretor e mostre suas informações. Exemplos: a. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário R$ 1000” // b. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário N/A”
function exibirInformacoesDiretor(diretor) {
    const salario = diretor.salario ? `salário R$ ${diretor.salario}` : 'salário N/A';
    console.log(`Diretor(a) ${diretor.nome}, ${diretor.idade} anos, comissão nível ${diretor.nivelComissionamento}, ${salario}`);
}
// Exemplo de uso
const diretor1 = { nome: 'Daphne', idade: 23, ocupacao: 'Diretora de Vendas', salario: 1000, nivelComissionamento: 5 };
const diretor2 = { nome: 'Carlos', idade: 30, ocupacao: 'Diretor de Marketing', nivelComissionamento: 3 };
exibirInformacoesDiretor(diretor1);
exibirInformacoesDiretor(diretor2);

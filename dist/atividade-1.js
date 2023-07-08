"use strict";
// 1. Crie uma função que receba 2 números e retorne um objeto contendo a média e também um indicador booleano de aprovado/reprovado. Considere aprovado com média >= 6.
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

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

"use strict";
// 2. Crie uma função que receba uma lista de objetos contendo nota e peso, realize a média das notas considerando o peso. Exemplos: Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado // Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado
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

// 1. Crie uma função que receba 2 números e retorne um objeto contendo a média e também um indicador booleano de aprovado/reprovado. Considere aprovado com média >= 6.

interface Resultado {
    media: number;
    situacao: string;
  }
  
  function calcularMedia(nota1: number, nota2: number): Resultado {
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

interface NotaPeso {
    nota: number;
    peso: number;
  }
  
  function calcularMediaPonderada(listaNotas: NotaPeso[]): number {
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
  const listaExemplo: NotaPeso[] = [
    { nota: 7, peso: 2 },
    { nota: 8, peso: 3 },
  ];
  
  const mediaExemplo = calcularMediaPonderada(listaExemplo);
  console.log(mediaExemplo);
  
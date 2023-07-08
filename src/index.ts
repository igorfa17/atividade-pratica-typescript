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
  
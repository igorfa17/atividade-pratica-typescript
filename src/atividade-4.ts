// 4. Crie um programa para cadastrar, listar e excluir produtos de uma lista com tipagem de Produto.

interface Produto {
    id: number;
    nome: string;
    preco: number;
  }
  
  class ListaProdutos {
    private produtos: Produto[];
  
    constructor() {
      this.produtos = [];
    }
  
    cadastrarProduto(produto: Produto): void {
      this.produtos.push(produto);
    }
  
    listarProdutos(): void {
      console.log('Lista de Produtos:');
      this.produtos.forEach((produto) => {
        console.log(`ID: ${produto.id}, Nome: ${produto.nome}, Preço: ${produto.preco}`);
      });
    }
  
    excluirProduto(id: number): void {
      const index = this.produtos.findIndex((produto) => produto.id === id);
  
      if (index !== -1) {
        this.produtos.splice(index, 1);
        console.log('Produto removido com sucesso.');
      } else {
        console.log('Produto não encontrado.');
      }
    }
  }
  
  // Exemplo de uso
  const lista = new ListaProdutos();
  
  // Cadastrar produtos
  const produto1: Produto = { id: 1, nome: 'Camiseta', preco: 29.99 };
  const produto2: Produto = { id: 2, nome: 'Calça', preco: 59.99 };
  const produto3: Produto = { id: 3, nome: 'Tênis', preco: 99.99 };
  
  lista.cadastrarProduto(produto1);
  lista.cadastrarProduto(produto2);
  lista.cadastrarProduto(produto3);
  
  // Listar produtos
  lista.listarProdutos();
  
  // Excluir produto
  lista.excluirProduto(2);
  
  // Listar produtos novamente
  lista.listarProdutos();
  

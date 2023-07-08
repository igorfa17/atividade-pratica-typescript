"use strict";
// 4. Crie um programa para cadastrar, listar e excluir produtos de uma lista com tipagem de Produto.
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

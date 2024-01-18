//Classe do objeto produto como base para carregar os produtos.
class Produto {
    constructor(nome, id, preco, cor, tamanho, estoque) {
        this.nome = nome;
        this.id = id;
        this.preco = preco;
        this.cor = cor;
        this.tamanho = tamanho;
        this.estoque = estoque;
    }

    vender(quantidade) {
        this.estoque = this.estoque - quantidade;
    }
    calcularPreco(preco, quantidadeRoupa, custoFrete) {
        return (preco * quantidadeRoupa) + custoFrete;
    }
}

//Carrego o estoque de produtos que pertencem à classe de produto
const camiseta1 = new Produto("Remera Cobra", 1, 60, "Preto", "GG", 30);
const camiseta2 = new Produto("Good Times", 2, 60, "Branco", "P", 10);
const camiseta3 = new Produto("Scream", 3, 65, "Preto", "M", 20);
const camiseta4 = new Produto("Black Oversized", 4, 75, "Preto", "M", 40);

//Simulador cálculo preço total da compra junto com o frete
const custoFrete = 20; // declaração do custo do frete


//Dados do comprador
alert("Produtos:" + "\n" + "(id= 1) Remera Cobra GG R$60,00" + "\n" + "(id= 2) Good Times S R$60,0 " + "\n" + "(id= 3) Scream M R$65,00" + "\n" + "(id= 4) Black Oversized M R$70,00");
let produtosSelecionados = parseInt(prompt("Escreva o ID do produto que deseja comprar:"));
let quantidade = parseInt(prompt("Escreva a quantidade de produtos que queira do produto escolhido:"));


if (produtosSelecionados == camiseta1.id) {
    alert("O preço final da sua compra é de:" + camiseta1.calcularPreco(camiseta1.preco, quantidade, custoFrete));
    camiseta1.vender(quantidade);
} else if (produtosSelecionados == camiseta2.id) {
    alert("O preço final da sua compra é de:" + camiseta2.calcularPreco(camiseta2.preco, quantidade, custoFrete));
    camiseta2.vender(quantidade);
} else if (produtosSelecionados == camiseta3.id) {
    alert("O preço final da sua compra é de:" + camiseta3.calcularPreco(camiseta3.preco, quantidade, custoFrete));
    camiseta3.vender(quantidade);
} else if (produtosSelecionados == camiseta4.id) {
    alert("O preço final da sua compra é de:" + camiseta4.calcularPreco(camiseta4.preco, quantidade, custoFrete));
    camiseta4.vender(quantidade);
} else {
    alert("Erro: Digite o ID de um produto válido.");
}
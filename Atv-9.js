function valorProduto (preco, desconto){

    calculoDesconto = preco * (desconto / 100);
    return calculoDesconto;
}
console.log("O valor do produto com desconto é de: R$", valorProduto(500, 25));
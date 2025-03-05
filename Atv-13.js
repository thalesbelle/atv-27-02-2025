function impostoProduto(produto){

    taxaImposto = produto + (produto * (18 / 100));
    return taxaImposto;
}
console.log("O valor do produto com a adição do imposto é de: R$", impostoProduto(500));
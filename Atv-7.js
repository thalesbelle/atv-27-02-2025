function calculoCartao (dinheiro, cartao){
    var cartao = 5.00;
    var dinheiro = 50.00;

    quantidadeCartoes = dinheiro / cartao;
    return quantidadeCartoes;
}
console.log("A quantia de cartões que a pessoa pode comprar é de:", calculoCartao(50, 5), "cartões.");
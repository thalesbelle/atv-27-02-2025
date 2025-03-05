function calculoPremio(valor, pessoas){

    valorPessoa = valor / pessoas;
    return valorPessoa;
}
console.log("O valor premiado para cada pessoa é igualmente de: R$", calculoPremio(200, 5));
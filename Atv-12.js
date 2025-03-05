function refeicoesPessoas(quilos){

    
    quantidadeRefeicoes = ((quilos * 1000) / 250).toFixed(0)
    return quantidadeRefeicoes;
}
console.log("A quantidade de refeições que poderão ser feitas é de: ", refeicoesPessoas(40), "refeições");
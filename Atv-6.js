function calculoIdade (anoAtual, anoNasc){
    idadeFinal = anoAtual - anoNasc;
    return idadeFinal;
}
console.log("A idade do usuário é de", calculoIdade(2025, 1980), "anos.");
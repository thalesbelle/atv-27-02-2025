function custoCombustivel (distanciaPercorrida, consumoCarro){
    let combustivel = 5.50;

    var litrosGastos = distanciaPercorrida / consumoCarro;
    var totalCombust = combustivel * litrosGastos;

    return totalCombust;
}
console.log("O total gasto de combustivel é de: R$", custoCombustivel(120, 8));
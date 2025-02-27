function darTroco (valorPago, valorCompra)
{
    calculoTroco = valorPago - valorCompra
    return calculoTroco;
}
console.log("O troco a ser recebido é de R$", darTroco(50, 20));
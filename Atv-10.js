function contaRestaurante(prato1, prato2, prato3, prato4, prato5, gorjeta){

    somaPratos = prato1 + prato2 + prato3 + prato4 + prato5
    gorjeta = somaPratos + (somaPratos * (10 / 100));
    return gorjeta;
}
console.log("O total da conta com a adição da gorjeta é de: R$", contaRestaurante(2,3,4,5,6));